import { useCallback, useRef, useState } from 'react'
import { askQuestion, sendFeedback as sendFeedbackToApi } from '../services/api'
import type { FoundAnswer } from '../types/api'

export type QuestionState =
  | { status: 'idle' }
  | { status: 'loading'; question: string }
  | { status: 'success'; question: string; answer: FoundAnswer }
  | { status: 'insufficient'; question: string; message: string }
  | { status: 'error'; question: string }

export type ActiveQuestionState = Exclude<QuestionState, { status: 'idle' }>

export function useQuestion() {
  const [state, setState] = useState<QuestionState>({ status: 'idle' })
  // Ignora respostas atrasadas se o usuário já fez outra pergunta ou recomeçou.
  const lastRequestId = useRef(0)

  const ask = useCallback(async (rawQuestion: string) => {
    const question = rawQuestion.trim()
    if (!question) return

    const requestId = ++lastRequestId.current
    setState({ status: 'loading', question })

    try {
      const response = await askQuestion({ question })
      if (requestId !== lastRequestId.current) return
      setState(
        response.found
          ? { status: 'success', question, answer: response }
          : { status: 'insufficient', question, message: response.message },
      )
    } catch {
      if (requestId !== lastRequestId.current) return
      setState({ status: 'error', question })
    }
  }, [])

  const reset = useCallback(() => {
    lastRequestId.current++
    setState({ status: 'idle' })
  }, [])

  const sendFeedback = useCallback(
    (helpful: boolean) => {
      if (state.status !== 'success') return
      void sendFeedbackToApi({ question: state.question, helpful })
    },
    [state],
  )

  return { state, ask, reset, sendFeedback }
}
