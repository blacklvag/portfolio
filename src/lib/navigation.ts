export type LinkKind = 'internal' | 'external' | 'mailto'

export function getLinkKind(href: string): LinkKind {
  if (href.startsWith('#')) return 'internal'
  if (href.startsWith('mailto:')) return 'mailto'
  return 'external'
}

/** Client-side navigation for a static SPA — no server or API required. */
export function navigateTo(href: string) {
  const kind = getLinkKind(href)

  if (kind === 'internal') {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  if (kind === 'mailto') {
    window.location.href = href
    return
  }

  window.open(href, '_blank', 'noopener,noreferrer')
}
