import type { LinkKind } from '../lib/navigation'

export interface SocialLink {
  label: string
  detail: string
  href: string
  icon: string
  kind: LinkKind
}
