import type { Source } from '../../types/api'

interface SourceCardProps {
  source: Source
}

export function SourceCard({ source }: SourceCardProps) {
  return (
    <aside className="card card--source" aria-labelledby="source-title">
      <h2 id="source-title" className="card__title">
        Fonte utilizada
      </h2>
      <p className="source__name">{source.title}</p>
      <a className="button button--outline" href={source.url} target="_blank" rel="noopener noreferrer">
        Consultar fonte<span className="sr-only"> (abre em nova aba)</span>
      </a>
    </aside>
  )
}
