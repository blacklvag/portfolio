import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { terminalOutput } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.5 },
    )
    const el = document.getElementById('terminal-section')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(cursorInterval)
  }, [started])

  useEffect(() => {
    if (!started || currentLine >= terminalOutput.length) return

    const line = terminalOutput[currentLine]
    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev]
          updated[currentLine] = line.slice(0, charIndex + 1)
          return updated
        })
        setCharIndex((c) => c + 1)
      }, 40)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setCurrentLine((l) => l + 1)
      setCharIndex(0)
    }, 400)
    return () => clearTimeout(timeout)
  }, [started, currentLine, charIndex])

  return (
    <section id="terminal-section" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Terminal"
          title="Who am I?"
          description="A glimpse into what defines my work."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass rounded-xl overflow-hidden shadow-glow">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted ml-2 font-mono">portfolio — zsh</span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed min-h-[180px]">
              <p className="text-muted">
                <span className="text-emerald-400">~</span>
                <span className="text-white/40"> $ </span>
                <span className="text-foreground">whoami</span>
              </p>

              <div className="mt-4 space-y-1">
                {displayedLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-accent pl-4 break-words"
                  >
                    {line}
                  </motion.p>
                ))}
                {started && currentLine < terminalOutput.length && (
                  <span
                    className={`inline-block w-2 h-4 bg-accent ml-4 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
              </div>

              {started && currentLine >= terminalOutput.length && (
                <p className="mt-4 text-muted">
                  <span className="text-emerald-400">~</span>
                  <span className="text-white/40"> $ </span>
                  <span
                    className={`inline-block w-2 h-4 bg-foreground align-middle ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
