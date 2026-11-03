export interface AskRequest {
  question: string
}

export interface Source {
  title: string
  url: string
}

export interface FoundAnswer {
  found: true
  answer: string
  source: Source
  relatedQuestions?: string[]
}

// O RAG não achou base suficiente para responder com segurança.
export interface InsufficientInfo {
  found: false
  message: string
}

export type AskResponse = FoundAnswer | InsufficientInfo

export interface FeedbackRequest {
  question: string
  helpful: boolean
}
