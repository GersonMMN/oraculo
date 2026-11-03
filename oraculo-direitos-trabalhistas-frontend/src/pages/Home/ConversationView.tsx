import { useEffect, useRef } from 'react'
import { AnswerCard } from '../../components/AnswerCard/AnswerCard'
import { Feedback } from '../../components/Feedback/Feedback'
import { LoadingAnswer } from '../../components/LoadingAnswer/LoadingAnswer'
import { RelatedQuestions } from '../../components/RelatedQuestions/RelatedQuestions'
import { SourceCard } from '../../components/SourceCard/SourceCard'
import { StatusMessage } from '../../components/StatusMessage/StatusMessage'
import type { ActiveQuestionState } from '../../hooks/useQuestion'

interface ConversationViewProps {
  state: ActiveQuestionState
  onAsk: (question: string) => void
  onReset: () => void
  onFeedback: (helpful: boolean) => void
}

export function ConversationView({ state, onAsk, onReset, onFeedback }: ConversationViewProps) {
  const resultRef = useRef<HTMLDivElement>(null)

  // Leva o foco ao resultado quando a consulta termina (leitores de tela e teclado).
  useEffect(() => {
    if (state.status !== 'loading') resultRef.current?.focus()
  }, [state.status])

  return (
    <div className="container conversation">
      <section className="question" aria-label="Sua pergunta">
        <p className="question__label">Você perguntou</p>
        <p className="question__text">“{state.question}”</p>
      </section>

      <div ref={resultRef} tabIndex={-1} className="result" aria-label="Resultado da consulta">
        {state.status === 'loading' && <LoadingAnswer />}

        {state.status === 'success' && (
          <>
            <AnswerCard answer={state.answer.answer} />
            <SourceCard source={state.answer.source} />
            <Feedback onVote={onFeedback} />
            <RelatedQuestions questions={state.answer.relatedQuestions ?? []} onSelect={onAsk} />
          </>
        )}

        {state.status === 'insufficient' && (
          <StatusMessage tone="info" title="Informação insuficiente">
            {state.message}
          </StatusMessage>
        )}

        {state.status === 'error' && (
          <StatusMessage
            tone="error"
            title="Algo deu errado"
            actionLabel="Tentar novamente"
            onAction={() => onAsk(state.question)}
          >
            Não foi possível consultar as informações. Tente novamente.
          </StatusMessage>
        )}
      </div>

      {state.status !== 'loading' && (
        <button type="button" className="button button--primary" onClick={onReset}>
          Fazer nova pergunta
        </button>
      )}
    </div>
  )
}
