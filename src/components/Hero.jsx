import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { HERO_IMAGE, HERO_STATS } from '../data/content'
import { PremiumButton } from './ui/PremiumButton'
import { AmbientLayer } from './ui/AmbientLayer'

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        x: `${(i * 17 + 7) % 100}%`,
        y: `${(i * 23 + 11) % 100}%`,
        size: (i % 5) * 0.6 + 1,
        delay: (i % 8) * 0.5,
        duration: 8 + (i % 6),
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/25"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ opacity: [0.05, 0.5, 0.05], y: [0, -40, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-px w-[160%] rotate-[-6deg] bg-gradient-to-r from-transparent via-gold/25 to-transparent"
        animate={{ x: ['-8%', '8%'] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/3 bottom-1/3 h-px w-[140%] rotate-[5deg] bg-gradient-to-r from-transparent via-white/8 to-transparent"
        animate={{ x: ['6%', '-6%'] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </div>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0])

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Cinematic football athlete in dramatic stadium lighting"
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/20 to-void/70" />
        <div className="spotlight absolute inset-0" />
      </motion.div>

      <AmbientLayer />
      <ParticleField />

      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-10 md:pb-28 lg:pb-36"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/35 bg-void/40 px-5 py-2.5 backdrop-blur-xl gold-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(201,169,98,0.9)]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            Record Holder · UEFA Champions League All-Time Leading Scorer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(4.5rem,16vw,11rem)] leading-[0.82] tracking-[0.02em] text-pearl"
        >
          Cristiano
          <br />
          <span className="text-gradient-gold">Ronaldo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-pearl/65 md:text-xl"
        >
          A legacy built under pressure. The standard of elite football — repeated across continents,
          etched into history.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <PremiumButton to="/legacy">Explore Legacy</PremiumButton>
          <PremiumButton to="/records" variant="secondary">
            View Achievements
          </PremiumButton>
        </motion.div>
      </motion.div>

      {HERO_STATS.map((stat, i) => {
        const positions = [
          'right-4 top-[28%] md:right-14',
          'left-4 top-[36%] md:left-16',
          'right-6 bottom-[32%] md:right-20',
          'left-6 bottom-[26%] md:left-14',
        ]
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute z-20 hidden md:block ${positions[i]}`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel-strong rounded-2xl px-6 py-4 cinematic-shadow"
            >
              <p className="font-display text-3xl text-gold">{stat.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted">{stat.label}</p>
            </motion.div>
          </motion.div>
        )
      })}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Link to="/legacy" className="group flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted transition group-hover:text-gold">
            Enter
          </span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="h-12 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent"
          />
        </Link>
      </motion.div>
    </section>
  )
}
