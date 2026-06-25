import type { SocialLink } from '../../types/links'

type SocialLinksVariant = 'card' | 'inline'

interface SocialLinksProps {
  links: readonly SocialLink[]
  variant?: SocialLinksVariant
  className?: string
}

export function SocialLinks({ links, variant = 'card', className = '' }: SocialLinksProps) {
  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap sm:flex-nowrap items-center gap-x-6 gap-y-2 ${className}`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.kind === 'external' || link.kind === 'mailto' ? '_blank' : undefined}
            rel={link.kind === 'external' || link.kind === 'mailto' ? 'noopener noreferrer' : undefined}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.kind === 'external' || link.kind === 'mailto' ? '_blank' : undefined}
          rel={link.kind === 'external' || link.kind === 'mailto' ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-3 p-4 rounded-xl glass glass-hover group"
        >
          <svg
            className="w-5 h-5 shrink-0 text-muted group-hover:text-accent transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={link.icon} />
          </svg>
          <div className="min-w-0">
            <span className="text-sm block">{link.label}</span>
            <span className="text-xs text-muted truncate block">{link.detail}</span>
          </div>
          {(link.kind === 'external' || link.kind === 'mailto') && (
            <svg
              className="w-4 h-4 ml-auto shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      ))}
    </div>
  )
}
