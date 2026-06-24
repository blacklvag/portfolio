import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical expertise"
          description="A toolkit built through professional experience and academic projects."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} delay={index * 0.1}>
              <h3 className="text-lg font-medium mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.03 }}
                  >
                    <Badge>{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
