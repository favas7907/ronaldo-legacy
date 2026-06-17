import { motion } from 'framer-motion'
import { useMemo } from 'react'

export function LegacyFinale() {
  // Generate particles that drift extremely slowly, representing the "settling" of dust in the cosmos
  const slowParticles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: `${(i * 29 + 13) % 100}%`,
        y: `${(i * 17 + 7) % 100}%`,
        size: (i % 4) * 0.5 + 0.8,
        delay: (i % 8) * 0.3,
        duration: 15 + (i % 10), // Much longer duration = slower drift
      })),
    []
  )

  return (
    <section
      id="finale"
      aria-label="Legacy Finale"
      className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden bg-[#030303] px-5 py-28"
    >
      {/* Background Decelerating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {slowParticles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gold/20"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{
              opacity: [0.03, 0.3, 0.03],
              y: [0, -15, 0], // Tiny drift range
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Soft, low opacity gold lens flare bottom center */}
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/3 rounded-full bg-gold/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtle gold crown or mark */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold gold-glow"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L6 14L12 6L18 14L21 8V18H3V8Z" fill="currentColor" />
            </svg>
          </motion.div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-muted">
            The Lasting Impact
          </p>

          <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-wide text-pearl sm:text-5xl md:text-7xl lg:text-8xl">
            The standard of
            <br />
            <span className="text-gradient-gold">elite football.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-sm font-light leading-relaxed text-pearl/50 md:text-base">
            Talent without discipline is nothing. Excellence is not a single act — it is a habit forged every single day.
          </p>

          {/* Animated Signature SVG */}
          <div className="relative mt-12 h-24 w-60 md:mt-16 md:h-28 md:w-64">
            <svg
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-full w-full text-gold/80"
              aria-label="Cristiano Ronaldo Signature"
            >
              {/* Stylized CR7 Signature Path */}
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
                  pathLength: { duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
                  opacity: { duration: 0.4, delay: 0.5 },
                }}
              />
              
              {/* Highlight signature stroke */}
              <motion.path
                d="M 35,50 C 25,32 30,15 45,20 C 58,25 52,48 38,55 C 22,62 12,42 22,30 M 52,42 C 52,22 68,22 68,38 C 68,48 58,48 52,48 C 55,55 60,62 70,65 M 78,30 L 100,30 L 85,68 M 15,65 C 45,72 110,72 132,54 C 142,46 122,38 95,48 C 72,56 58,82 90,82 C 112,82 145,56 180,48"
                stroke="#FFE5B4"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  pathLength: { duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.55 },
                }}
              />
            </svg>
            
            {/* Soft gold halo behind signature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.35, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2, duration: 1 }}
              className="absolute left-1/2 top-1/2 h-16 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-xl"
              aria-hidden="true"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="mt-6 font-display text-xs uppercase tracking-[0.3em] text-gold"
          >
            Cristiano Ronaldo Aveiro
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
