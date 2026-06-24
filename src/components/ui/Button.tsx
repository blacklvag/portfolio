import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant
  children: ReactNode
  href?: string
  onNavigate?: (href: string) => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-background hover:bg-white/90 shadow-glow',
  secondary:
    'glass glass-hover text-foreground',
  ghost:
    'text-muted hover:text-foreground hover:bg-white/[0.05]',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  onNavigate,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none'

  const handleClick = () => {
    if (href && onNavigate) {
      onNavigate(href)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}
