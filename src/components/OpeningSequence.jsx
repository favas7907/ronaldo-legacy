import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  'Records were broken.',
  'Greatness was repeated.',
  'A legacy was built through eras.',
  'CRISTIANO RONALDO',
]

export function OpeningSequence({ onComplete }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (currentSlide < SLIDES.length) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
      }, 2500) // Each slide is visible for 2.5s
      return () => clearTimeout(timer)
    } else {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
      }, 50)
      const completeTimer = setTimeout(() => {
        onComplete()
      }, 1050) // Wait for exit animation to finish
      return () => {
        clearTimeout(exitTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [currentSlide, onComplete])

  // Simple floating particles for the opening sequence
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: `${(i * 13 + 7) % 100}%`,
    y: `${(i * 19 + 11) % 100}%`,
    size: (i % 3) * 0.5 + 0.8,
    delay: (i % 6) * 0.4,
    duration: 6 + (i % 5),
  }))

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="opening-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#030303]"
        >
          {/* Subtle Ambient Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full bg-gold/30"
                style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
                animate={{ opacity: [0.05, 0.4, 0.05], y: [0, -30, 0] }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Central Gold Light Bloom */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]"
            aria-hidden="true"
          />

          {/* Slide Text Wrapper */}
          <div className="relative z-10 px-6 text-center">
            <AnimatePresence mode="wait">
              {SLIDES.map((slide, index) => {
                if (index !== currentSlide) return null
                const isLastName = index === SLIDES.length - 1

                return (
                  <motion.div
                    key={slide}
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center"
                  >
                    {isLastName ? (
                      <h2 className="font-display text-5xl tracking-[0.1em] text-pearl md:text-7xl lg:text-8xl">
                        CRISTIANO <span className="text-gradient-gold">RONALDO</span>
                      </h2>
                    ) : (
                      <p className="text-sm font-light uppercase tracking-[0.4em] text-pearl/70 md:text-lg">
                        {slide}
                      </p>
                    )}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '60px' }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="editorial-rule mt-6"
                      aria-hidden="true"
                    />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
