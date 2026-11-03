import { useState, type FormEvent } from 'react'

interface SearchBoxProps {
  onSubmit: (question: string) => void
}

export function SearchBox({ onSubmit }: SearchBoxProps) {
  const [value, setValue] = useState('')
  const canSubmit = value.trim().length > 0

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (canSubmit) onSubmit(value)
  }

  return (
    <form className="search" role="search" onSubmit={handleSubmit}>
      <label htmlFor="question" className="sr-only">
        Digite sua dúvida trabalhista
      </label>
      <input
        id="question"
        className="search__input"
        type="text"
        autoComplete="off"
        maxLength={300}
        placeholder="Digite sua dúvida trabalhista..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="search__button" type="submit" disabled={!canSubmit}>
        Perguntar
      </button>
    </form>
  )
}
