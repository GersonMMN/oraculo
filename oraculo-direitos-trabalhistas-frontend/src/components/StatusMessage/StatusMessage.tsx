import type { ReactNode } from 'react'

interface StatusMessageProps {
  tone: 'info' | 'error'
  title: string
  children: ReactNode
  actionLabel?: string
  onAction?: () => void
}

export function StatusMessage({ tone, title, children, actionLabel, onAction }: StatusMessageProps) {
  return (
    <div className={`status status--${tone}`} role={tone === 'error' ? 'alert' : 'status'}>
      <h2 className="card__title">{title}</h2>
      <p>{children}</p>
      {actionLabel && onAction && (
        <button type="button" className="button button--outline" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  )
}
