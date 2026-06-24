interface BadgeProps {
  children: string
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.06] text-muted border border-white/[0.08] ${className}`}
    >
      {children}
    </span>
  )
}
