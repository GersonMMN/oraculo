import { useState } from 'react'

interface FeedbackProps {
  onVote: (helpful: boolean) => void
}

export function Feedback({ onVote }: FeedbackProps) {
  const [vote, setVote] = useState<boolean | null>(null)

  function handleVote(helpful: boolean) {
    setVote(helpful)
    onVote(helpful)
  }

  return (
    <section className="feedback" aria-labelledby="feedback-title">
      <h2 id="feedback-title" className="section-title">
        Essa resposta foi útil?
      </h2>
      <div className="feedback__actions">
        <button
          type="button"
          className="button button--outline"
          aria-pressed={vote === true}
          disabled={vote !== null}
          onClick={() => handleVote(true)}
        >
          <span aria-hidden="true">👍</span> Sim
        </button>
        <button
          type="button"
          className="button button--outline"
          aria-pressed={vote === false}
          disabled={vote !== null}
          onClick={() => handleVote(false)}
        >
          <span aria-hidden="true">👎</span> Não
        </button>
      </div>
      <p className="feedback__thanks" role="status">
        {vote === null ? '' : 'Obrigado! Seu retorno ajuda a melhorar as respostas.'}
      </p>
    </section>
  )
}
