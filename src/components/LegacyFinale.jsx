import { motion } from 'framer-motion'
import { useMemo, memo } from 'react'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

export const LegacyFinale = memo(function LegacyFinale() {
  const slowParticles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: `${(i * 29 + 13) % 100}%`,
        y: `${(i * 17 + 7) % 100}%`,
        size: (i % 4) * 0.4 + 0.8,
        delay: (i % 8) * 0.3,
        duration: 14 + (i % 8),
      })),
    []
  )

  return (
    <section
      id="finale"
      aria-label="Legacy Finale"
      className="relative flex min-h-[85svh] flex-col items-center justify-center overflow-hidden bg-[#030303] px-5 py-20 sm:py-28"
    >
      {/* Background Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {slowParticles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gold/20 will-change-transform"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ opacity: [0.02, 0.2, 0.02], y: [0, -14, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Static gold bloom */}
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/3 rounded-full bg-gold/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: PREMIUM_EASE }}
          className="flex flex-col items-center"
        >
          {/* Crown icon */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold gold-glow sm:mb-6 sm:h-12 sm:w-12"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 18V8l4.5 5L12 4l4.5 9L21 8v10H3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-muted sm:text-[10px] sm:tracking-[0.45em]">
            The Lasting Impact
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.9, ease: PREMIUM_EASE }}
            className="mt-6 font-display text-3xl leading-[1.1] tracking-wide text-pearl sm:mt-8 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            The standard of
            <br />
            <span className="text-gradient-gold">elite football.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mx-auto mt-6 max-w-sm text-sm font-light leading-relaxed text-pearl/40 sm:mt-8 sm:max-w-md md:text-base"
          >
            Discipline shaped the legend. Pressure became performance. Every era confirmed what the first one promised.
          </motion.p>

          {/* Animated Signature SVG */}
          <div className="relative mt-10 h-20 w-48 sm:mt-14 sm:h-24 sm:w-60 md:mt-16 md:h-28 md:w-64">
            <svg
              viewBox="0 0 200 100"
              fill="none"
              className="absolute inset-0 h-full w-full text-gold/70"
              aria-label="Cristiano Ronaldo Signature"
            >
              <motion.path
                d="M 35,50 C 25,32 30,15 45,20 C 58,25 52,48 38,55 C 22,62 12,42 22,30 M 52,42 C 52,22 68,22 68,38 C 68,48 58,48 52,48 C 55,55 60,62 70,65 M 78,30 L 100,30 L 85,68 M 15,65 C 45,72 110,72 132,54 C 142,46 122,38 95,48 C 72,56 58,82 90,82 C 112,82 145,56 180,48"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  pathLength: { duration: 3, ease: PREMIUM_EASE, delay: 0.8 },
                  opacity: { duration: 0.3, delay: 0.8 },
                }}
              />
            </svg>
            
            {/* Static gold halo */}
            <div
              className="absolute left-1/2 top-1/2 h-12 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-xl"
              aria-hidden="true"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 0.6 }}
            className="mt-5 font-display text-[10px] uppercase tracking-[0.25em] text-gold sm:text-xs sm:tracking-[0.3em]"
          >
            Cristiano Ronaldo
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})
