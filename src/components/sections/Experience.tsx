import { motion } from 'framer-motion'
import { experience } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Professional journey"
          description="Building expertise through industry experience and academic growth."
        />

        <div className="relative max-w-5xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent bg-background" />

                <div className="glass rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                    <span className="text-xs font-medium text-accent uppercase tracking-wide">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                  <p className="text-muted text-sm mt-1">{item.role}</p>
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-white/30 mt-1">—</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
