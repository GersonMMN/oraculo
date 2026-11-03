interface RelatedQuestionsProps {
  questions: string[]
  onSelect: (question: string) => void
}

export function RelatedQuestions({ questions, onSelect }: RelatedQuestionsProps) {
  if (questions.length === 0) return null

  return (
    <section aria-labelledby="related-title">
      <h2 id="related-title" className="section-title">
        Perguntas relacionadas
      </h2>
      <ul className="chips">
        {questions.map((question) => (
          <li key={question}>
            <button type="button" className="chip" onClick={() => onSelect(question)}>
              {question}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
