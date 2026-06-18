import { useEffect, useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

const LINES = [
  { text: 'Records were broken.', delay: 500 },
  { text: 'Greatness was repeated.', delay: 1800 },
  { text: 'A legacy was built through eras.', delay: 3100 },
]

function FloatingDust({ count = 24 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: `${(i * 17 + 5) % 100}%`,
        y: `${(i * 23 + 9) % 100}%`,
        s: 1 + (i % 3) * 0.4,
        dur: 8 + (i % 7),
        del: (i % 6) * 0.4,
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/25 will-change-transform"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ opacity: [0, 0.35, 0], y: [0, -30, 0] }}
          transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export function OpeningSequence({ onComplete }) {
  const [phase, setPhase] = useState('lines')
  const [visibleLines, setVisibleLines] = useState([])
  const [exiting, setExiting] = useState(false)

  const handleComplete = useCallback(() => onComplete(), [onComplete])

  // Staggered line reveals
  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay)
    )
    const nameTimer = setTimeout(() => setPhase('name'), 5000)
    return () => [...timers, nameTimer].forEach(clearTimeout)
  }, [])

  // Name → exit
  useEffect(() => {
    if (phase !== 'name') return
    const exitTimer = setTimeout(() => setExiting(true), 2400)
    const doneTimer = setTimeout(handleComplete, 3200)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [phase, handleComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: PREMIUM_EASE }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#020202]"
        >
          <FloatingDust count={24} />

          {/* Multi-layered ambient glow */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {/* Central gold bloom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, ease: PREMIUM_EASE }}
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[140px]"
            />
            {/* Bottom crimson accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute left-1/2 bottom-0 h-72 w-96 -translate-x-1/2 translate-y-1/3 rounded-full bg-crimson/[0.03] blur-[100px]"
            />
          </div>

          {/* Animated horizontal rule — grows across center */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 2.5, delay: 0.2, ease: PREMIUM_EASE }}
              className="h-px w-[min(80vw,500px)] origin-center bg-gradient-to-r from-transparent via-gold/20 to-transparent"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
            <AnimatePresence mode="wait">
              {phase === 'lines' && (
                <motion.div
                  key="lines"
                  exit={{ opacity: 0, y: -15, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: PREMIUM_EASE }}
                  className="flex flex-col items-center gap-6"
                >
                  {LINES.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                      animate={
                        visibleLines.includes(i)
                          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                          : {}
                      }
                      transition={{ duration: 1, ease: PREMIUM_EASE }}
                      className="text-xs font-light uppercase tracking-[0.35em] text-pearl/45 sm:text-sm md:text-base md:tracking-[0.4em]"
                    >
                      {line.text}
                    </motion.p>
                  ))}
                </motion.div>
              )}

              {phase === 'name' && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                  className="flex flex-col items-center"
                >
                  {/* Eyebrow */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="mb-5 text-[9px] uppercase tracking-[0.5em] text-gold/50 sm:text-[10px]"
                  >
                    The Evolution of Greatness
                  </motion.p>

                  {/* Name */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30, letterSpacing: '0.2em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
                    transition={{ duration: 1.2, ease: PREMIUM_EASE }}
                    className="font-display text-5xl text-pearl sm:text-6xl md:text-8xl lg:text-9xl"
                  >
                    CRISTIANO
                  </motion.h2>
                  <motion.h2
                    initial={{ opacity: 0, y: 30, letterSpacing: '0.2em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
                    transition={{ delay: 0.12, duration: 1.2, ease: PREMIUM_EASE }}
                    className="font-display text-5xl text-gradient-gold sm:text-6xl md:text-8xl lg:text-9xl"
                  >
                    RONALDO
                  </motion.h2>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1, ease: PREMIUM_EASE }}
                    className="mt-6 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                  />

                  {/* Stat chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                    className="mt-8 flex flex-wrap justify-center gap-4 text-[8px] uppercase tracking-[0.3em] text-pearl/30 sm:text-[9px]"
                  >
                    <span>5× Ballon d'Or</span>
                    <span className="text-gold/30">·</span>
                    <span>900+ Goals</span>
                    <span className="text-gold/30">·</span>
                    <span>UCL Legend</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
