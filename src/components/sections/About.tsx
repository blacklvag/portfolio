import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="About"
          title="Engineering quality at scale"
          description="Bridging academic foundations with professional automation experience."
        />

        <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 blur-xl" />
              <img
                src={personalInfo.profileImage}
                alt={`Professional headshot of ${personalInfo.name}`}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover object-[center_20%] border border-white/[0.1] shadow-glow"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-1"
          >
            <p className="text-muted leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
            <p className="text-muted leading-relaxed">
              At Bosch, I work on a production-grade Playwright automation framework,
              contributing test improvements, framework enhancements, and quality
              assurance processes. My role combines hands-on automated testing with
              thoughtful defect analysis and continuous framework evolution.
            </p>
            <p className="text-muted leading-relaxed">
              Alongside my professional work, I pursue my BSc in IT Engineering at
              Óbuda University, building strong foundations in software development,
              object-oriented design, and database systems. I believe in continuous
              learning and applying academic knowledge to real-world engineering challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-xl p-8 lg:col-span-1"
          >
            <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest, i) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Badge>{interest}</Badge>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.08] space-y-4">
              {[
                { label: 'Current Role', value: 'QA Automation Engineer @ Bosch' },
                { label: 'Education', value: 'BSc IT Engineering @ Óbuda University' },
                { label: 'Focus', value: 'Playwright, TypeScript, Quality Engineering' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
