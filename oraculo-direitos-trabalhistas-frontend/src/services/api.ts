import { CARTILHA_TRT4, mockEntries } from '../mocks/answers'
import type { AskRequest, AskResponse, FeedbackRequest } from '../types/api'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

// Camada de serviço: o resto do app só conhece estas funções.
// Para usar o backend real, troque o corpo por um fetch (veja o README).
export async function askQuestion({ question }: AskRequest): Promise<AskResponse> {
  await wait(1200)

  const text = normalize(question)
  if (text.includes('simular erro')) throw new Error('Falha simulada')

  const entry = mockEntries.find((item) => item.keywords.some((keyword) => text.includes(keyword)))
  if (!entry) {
    return {
      found: false,
      message: 'Não encontramos informações suficientes em nossa base para responder com segurança a essa pergunta.',
    }
  }

  return {
    found: true,
    answer: entry.answer,
    source: CARTILHA_TRT4,
    relatedQuestions: entry.relatedQuestions,
  }
}

export async function sendFeedback(_feedback: FeedbackRequest): Promise<void> {
  await wait(200)
}
