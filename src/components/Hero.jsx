import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { HERO_IMAGE, HERO_STATS } from '../data/content'
import { PremiumButton } from './ui/PremiumButton'
import { AmbientLayer } from './ui/AmbientLayer'

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: `${(i * 17 + 7) % 100}%`,
        y: `${(i * 23 + 11) % 100}%`,
        size: (i % 5) * 0.6 + 1.2,
        delay: (i % 8) * 0.4,
        duration: 8 + (i % 6),
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/20"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ opacity: [0.05, 0.4, 0.05], y: [0, -45, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-px w-[160%] rotate-[-6deg] bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        animate={{ x: ['-8%', '8%'] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/3 bottom-1/3 h-px w-[140%] rotate-[5deg] bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ['5%', '-5%'] }}
        transition={{ duration: 19, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </div>
  )
}

function OrbitalRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-10 opacity-70" aria-hidden="true">
      {/* Outer slow-spinning dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full border border-dashed border-gold/10"
      />
      {/* Mid ring with top/bottom glowing borders */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full border border-t-gold/25 border-b-gold/25 border-l-transparent border-r-transparent shadow-[0_0_50px_rgba(201,169,98,0.03)]"
      />
      {/* Inner eccentric ring */}
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full border border-l-white/5 border-r-gold/20 border-t-transparent border-b-transparent"
      />
    </div>
  )
}

export function Hero() {
  const ref = useRef(null)
  
  // UseScroll for depth-based parallax transitions on scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '24%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 0])

  // Stat card Y parallax offsets to create zero-gravity depth variations
  const card0Y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -140])
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -110])
  const cardParallaxes = [card0Y, card1Y, card2Y, card3Y]

  const handleExplore = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleMuseum = () => {
    document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Hero Introduction"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#030303]"
    >
      {/* Background Image Container */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Cinematic Ronaldo athlete silhouette in stadium lighting"
          className="h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-[#030303]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/90 via-transparent to-[#030303]/80" />
        <div className="spotlight absolute inset-0" />
      </motion.div>

      {/* Atmospheric Layers */}
      <AmbientLayer />
      <ParticleField />
      <OrbitalRings />

      {/* Center ambient glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px] z-10"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-10 md:pb-28 lg:pb-36"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-void/50 px-5 py-2.5 backdrop-blur-xl gold-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/55 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(201,169,98,0.8)]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            All-Time Leading Scorer · 973 Goals and Counting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(4.25rem,14vw,10.5rem)] leading-[0.82] tracking-[0.02em] text-pearl"
        >
          Cristiano
          <br />
          <span className="text-gradient-gold">Ronaldo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-pearl/65 md:text-xl"
        >
          A legacy built under extreme pressure. The standard of elite football — repeated across multiple continents and etched eternally into history.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <PremiumButton onClick={handleExplore}>Explore Legacy</PremiumButton>
          <PremiumButton variant="secondary" onClick={handleMuseum}>
            View Achievements
          </PremiumButton>
        </motion.div>
      </motion.div>

      {/* Floating zero-gravity stat cards */}
      {HERO_STATS.map((stat, i) => {
        const positions = [
          'right-4 top-[24%] md:right-10 lg:right-16',
          'left-4 top-[32%] md:left-12 lg:left-20',
          'right-6 bottom-[36%] md:right-16 lg:right-24',
          'left-6 bottom-[30%] md:left-10 lg:left-16',
        ]
        
        return (
          <motion.div
            key={stat.label}
            style={{ y: cardParallaxes[i] }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute z-20 hidden md:block ${positions[i]}`}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5 + i * 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel-strong rounded-2xl px-6 py-5 border border-white/[0.08] bg-charcoal/70 backdrop-blur-2xl cinematic-shadow"
            >
              <p className="font-display text-4xl text-gold">{stat.value}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-muted">{stat.label}</p>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Bottom arrow down scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <button onClick={handleExplore} className="group flex flex-col items-center gap-2.5 focus:outline-none">
          <span className="text-[9px] uppercase tracking-[0.4em] text-muted transition group-hover:text-gold">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-10 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent"
          />
        </button>
      </motion.div>
    </section>
  )
}
