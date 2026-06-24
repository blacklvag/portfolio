import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance gradient-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-lg max-w-4xl">{description}</p>
      )}
    </motion.div>
  )
}
