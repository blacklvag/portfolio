import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { commandPaletteItems } from '../../data/portfolio'
import { navigateTo } from '../../lib/navigation'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = commandPaletteItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const execute = (item: (typeof commandPaletteItems)[number]) => {
    navigateTo(item.href)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      execute(filtered[selectedIndex])
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[12%] sm:top-[20%] left-1/2 -translate-x-1/2 z-[101] w-[calc(100vw-2rem)] sm:w-full max-w-lg"
          >
            <div className="glass rounded-xl shadow-glow-lg overflow-hidden border border-white/[0.1]">
              <div className="flex items-center gap-3 px-4 border-b border-white/[0.08]">
                <svg className="w-4 h-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search commands..."
                  className="w-full py-4 bg-transparent text-sm text-foreground placeholder:text-muted outline-none"
                />
                <kbd className="hidden sm:inline text-xs text-muted px-1.5 py-0.5 glass rounded">ESC</kbd>
              </div>

              <ul className="max-h-64 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <li className="px-4 py-8 text-center text-sm text-muted">No results found</li>
                ) : (
                  filtered.map((item, index) => (
                    <li key={item.id}>
                      <button
                        onClick={() => execute(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          index === selectedIndex
                            ? 'bg-white/[0.08] text-foreground'
                            : 'text-muted hover:bg-white/[0.04]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {'shortcut' in item && item.shortcut && (
                          <kbd className="text-xs px-1.5 py-0.5 glass rounded text-muted">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
