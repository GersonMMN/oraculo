interface AnswerCardProps {
  answer: string
}

export function AnswerCard({ answer }: AnswerCardProps) {
  const paragraphs = answer.split('\n\n')

  return (
    <article className="card">
      <h2 className="card__title">Resposta do Oráculo</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  )
}
