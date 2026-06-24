import { personalInfo, socialLinks } from '../../data/portfolio'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <SocialLinks links={socialLinks} variant="inline" />
      </div>
    </footer>
  )
}
