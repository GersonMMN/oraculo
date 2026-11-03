interface SuggestedQuestionsProps {
  questions: string[]
  onSelect: (question: string) => void
}

export function SuggestedQuestions({ questions, onSelect }: SuggestedQuestionsProps) {
  return (
    <section className="container suggestions" aria-labelledby="suggestions-title">
      <h2 id="suggestions-title" className="suggestions__title">
        Comece por uma dúvida comum
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
