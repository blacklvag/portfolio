import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function Card({
  children,
  className = '',
  delay = 0,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass rounded-xl p-6 ${hover ? 'glass-hover' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
