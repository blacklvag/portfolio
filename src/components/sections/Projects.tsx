import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="From AI-powered productivity tools to enterprise test automation."
        />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass glass-hover rounded-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div
                  className={`lg:w-2/5 p-8 bg-gradient-to-br ${project.gradient} flex items-center justify-center min-h-[200px] lg:min-h-0`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-semibold text-foreground/80">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5 p-8">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">{project.description}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                        <svg
                          className="w-4 h-4 text-accent mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
