import { SearchBox } from '../../components/SearchBox/SearchBox'
import { SuggestedQuestions } from '../../components/SuggestedQuestions/SuggestedQuestions'
import { useQuestion } from '../../hooks/useQuestion'
import { suggestedQuestions } from '../../mocks/answers'
import { ConversationView } from './ConversationView'

export function Home() {
  const { state, ask, reset, sendFeedback } = useQuestion()

  if (state.status !== 'idle') {
    return (
      <main>
        <ConversationView state={state} onAsk={ask} onReset={reset} onFeedback={sendFeedback} />
      </main>
    )
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Tire suas dúvidas sobre seus direitos trabalhistas.</h1>
          <p className="hero__text">
            Pergunte do seu jeito. O Oráculo busca a resposta em fontes confiáveis e mostra de onde ela veio.
          </p>
          <SearchBox onSubmit={ask} />
        </div>
      </section>
      <SuggestedQuestions questions={suggestedQuestions} onSelect={ask} />
    </main>
  )
}
