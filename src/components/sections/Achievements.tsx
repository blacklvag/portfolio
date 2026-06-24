import { type ReactNode } from 'react'
import { achievements } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

const icons: Record<string, ReactNode> = {
  git: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  automation: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  bosch: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  language: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h5M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
}

export function Achievements() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Achievements"
          title="Milestones & recognition"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent shrink-0">
                  {icons[achievement.icon]}
                </div>
                <div>
                  <h3 className="font-medium mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
