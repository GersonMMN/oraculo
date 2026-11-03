export function LoadingAnswer() {
  return (
    <div className="card loading" role="status">
      <div className="loading__header">
        <span className="loading__ring" aria-hidden="true" />
        <p>Consultando informações...</p>
      </div>
      <div className="loading__lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
