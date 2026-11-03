export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="/" aria-label="Oráculo, Direitos Trabalhistas — página inicial">
          <svg className="brand__logo" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <circle cx="16" cy="16" r="4.5" fill="#F0B429" />
          </svg>
          <span>
            <span className="brand__name">Oráculo</span>
            <span className="brand__subtitle">Direitos Trabalhistas</span>
          </span>
        </a>
        <span className="badge">Protótipo</span>
      </div>
    </header>
  )
}
