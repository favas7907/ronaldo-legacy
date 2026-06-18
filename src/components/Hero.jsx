import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo, useState } from 'react'
import { HERO_STATS } from '../data/content'
import { PremiumButton } from './ui/PremiumButton'
import heroImage from '../assets/hero-silhouette.jpg'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

/* ─── Floating dust particles ─── */
function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: `${(i * 19 + 3) % 100}%`,
        y: `${(i * 23 + 7) % 100}%`,
        s: 1 + (i % 3) * 0.4,
        d: 9 + (i % 6),
        dl: (i % 7) * 0.5,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[4]" aria-hidden="true">
      {dots.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/20 will-change-transform"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ opacity: [0, 0.3, 0], y: [0, -30, 0] }}
          transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ─── Hero Image with cinematic treatment ─── */
function HeroVisual() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="absolute inset-0 z-[1]" aria-hidden="true">
      {/* The hero silhouette image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.8, ease: PREMIUM_EASE }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt=""
          onLoad={() => setLoaded(true)}
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </motion.div>

      {/* Cinematic overlays */}
      {/* Bottom fade to black — strong, allows text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/70 to-transparent" />
      
      {/* Left text area darkening */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/80 via-[#020202]/40 to-transparent" />
      
      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/60 via-transparent to-transparent" />
      
      {/* Slight desaturation + darken for cinematic feel */}
      <div className="absolute inset-0 bg-[#020202]/20" />

      {/* Gold tint overlay to match site palette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(212,175,55,0.04),transparent_65%)]" />
    </div>
  )
}

/* ─── Orbital ring accent ─── */
function OrbitalAccent() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[2] opacity-30" aria-hidden="true">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[clamp(20rem,50vw,42rem)] aspect-square rounded-full border border-gold/[0.04]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[clamp(15rem,38vw,32rem)] aspect-square rounded-full border border-dashed border-white/[0.025]"
      />
    </div>
  )
}

/* ─── Stat chips ─── */
function StatChips() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7, ease: PREMIUM_EASE }}
      className="flex flex-wrap gap-2 sm:gap-2.5"
    >
      {HERO_STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.07, duration: 0.5, ease: PREMIUM_EASE }}
          className="group flex items-center gap-2 rounded-full border border-white/[0.08] bg-void/40 px-3 py-1.5 backdrop-blur-xl transition hover:border-gold/20 sm:gap-2.5 sm:px-4 sm:py-2"
        >
          <span className="font-display text-sm text-gold sm:text-base">{stat.value}</span>
          <span className="text-[7px] uppercase tracking-[0.15em] text-pearl/35 sm:text-[8px] sm:tracking-[0.18em]">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

/* ─── Main Hero ─── */
export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const handleExplore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const handleJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#020202]"
    >
      {/* Image with parallax zoom */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-[1]">
        <HeroVisual />
      </motion.div>

      <Particles />
      <OrbitalAccent />

      {/* Film grain */}
      <div className="film-grain absolute inset-0 z-[3] pointer-events-none" aria-hidden="true" />

      {/* ─── Content Layer ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:pb-14 md:px-10 md:pb-20 lg:pb-28"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: PREMIUM_EASE }}
          className="mb-4 inline-flex items-center gap-2 sm:mb-6 sm:gap-2.5"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/50" />
            <span className="relative inline-flex h-full w-full rounded-full bg-gold" />
          </span>
          <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-gold/60 sm:text-[9px] sm:tracking-[0.28em]">
            Living Legend · Al Nassr · Portugal
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: PREMIUM_EASE }}
        >
          <h1 className="font-display leading-[0.85]">
            <span className="block text-[clamp(3.2rem,12vw,10rem)] tracking-[0.02em] text-pearl drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              Cristiano
            </span>
            <span className="block text-[clamp(3.2rem,12vw,10rem)] tracking-[0.02em] text-gradient-gold drop-shadow-[0_4px_30px_rgba(212,175,55,0.15)]">
              Ronaldo
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: PREMIUM_EASE }}
          className="mt-4 max-w-md text-sm font-light leading-[1.8] text-pearl/40 sm:mt-6 sm:max-w-lg sm:text-base"
        >
          The evolution of greatness — 900+ official goals, five Ballon d'Or titles,
          and a legacy forged across six legendary chapters.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: PREMIUM_EASE }}
          className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"
        >
          <PremiumButton onClick={handleExplore}>Explore Legacy</PremiumButton>
          <PremiumButton variant="secondary" onClick={handleJourney}>
            View Journey
          </PremiumButton>
        </motion.div>

        {/* Stat chips */}
        <div className="mt-8 sm:mt-12">
          <StatChips />
        </div>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 sm:bottom-7"
        aria-hidden="true"
      >
        <button onClick={handleExplore} className="group flex flex-col items-center gap-1.5 focus:outline-none sm:gap-2">
          <span className="text-[7px] uppercase tracking-[0.3em] text-muted transition group-hover:text-gold sm:text-[8px] sm:tracking-[0.35em]">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="h-6 w-px bg-gradient-to-b from-gold/50 to-transparent sm:h-8"
          />
        </button>
      </motion.div>
    </section>
  )
}
