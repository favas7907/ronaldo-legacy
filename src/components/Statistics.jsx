import { motion } from 'framer-motion'
import { STATISTICS } from '../data/content'
import { AnimatedCounter } from './AnimatedCounter'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.8, ease: PREMIUM_EASE },
  }),
}

/* ─── Circular Progress Ring ─── */
function ProgressRing({ value, max, size = 120 }) {
  const pct = Math.min((value / max) * 100, 100)
  const radius = (size - 12) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <svg
      width={size}
      height={size}
      className="-rotate-90"
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="3"
      />
      {/* Progress */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#gold-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference - (pct / 100) * circumference }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: PREMIUM_EASE, delay: 0.3 }}
      />
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#aa8c2c" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#f3e5ab" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ─── Featured Stat Card ─── */
function FeaturedStat({ stat, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeIn}
      custom={index * 0.08}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-charcoal/80 via-[#0c0c0c] to-void p-6 sm:rounded-3xl sm:p-8">
        <ShimmerBorder className="rounded-2xl sm:rounded-3xl" />
        
        {/* Background accent glow */}
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold/[0.03] blur-[60px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Ring */}
          <div className="relative mb-4 sm:mb-6">
            <ProgressRing value={stat.value} max={stat.max} />
            {/* Value centered in ring */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-display text-2xl leading-none text-pearl sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
              </p>
            </div>
          </div>

          {/* Label */}
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-muted group-hover:text-gold transition sm:text-[10px]">
            {stat.label}
          </p>

          {/* Ratio indicator */}
          <div className="mt-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-white/[0.04]" />
            <span className="text-[8px] tabular-nums text-pearl/25 sm:text-[9px]">
              {stat.value}{stat.suffix} / {stat.max}
            </span>
            <div className="h-px flex-1 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Quest Milestone Tracker ─── */
function QuestTracker() {
  const current = 900
  const target = 1000
  const pct = (current / target) * 100
  const remaining = target - current

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeIn}
      custom={0.1}
      className="relative overflow-hidden rounded-2xl border border-gold/[0.12] bg-gradient-to-br from-gold/[0.04] via-charcoal/40 to-void sm:rounded-3xl"
    >
      {/* Background decoration */}
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/[0.03] blur-[80px]" aria-hidden="true" />
      <div className="absolute inset-0 shimmer-sweep opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 p-5 sm:p-8 md:p-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[10px]">
                Active Quest
              </p>
            </div>
            <h3 className="font-display text-2xl tracking-wide text-pearl sm:text-3xl md:text-4xl">
              The 1,000 Goal <span className="text-gradient-gold">Milestone</span>
            </h3>
          </div>

          {/* Big number */}
          <div className="flex items-baseline gap-1 font-display">
            <span className="text-4xl text-gradient-gold sm:text-5xl md:text-6xl">900+</span>
            <span className="text-base text-muted font-body font-light sm:text-lg">/ 1,000</span>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-pearl/35 sm:mt-5 sm:text-sm">
          Approaching football's greatest individual milestone — over 900 verified official goals across 
          Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr, and Portugal.
        </p>

        {/* Progress bar */}
        <div className="mt-6 sm:mt-8">
          <div className="relative h-3 w-full rounded-full bg-white/[0.04] overflow-hidden border border-white/[0.06] sm:h-4">
            {/* Filled */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: PREMIUM_EASE, delay: 0.3 }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-light"
            >
              {/* Glow tip */}
              <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/40 blur-md sm:h-6 sm:w-6" />
            </motion.div>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer-sweep opacity-30 pointer-events-none rounded-full" />
          </div>

          {/* Markers */}
          <div className="mt-3 flex justify-between text-[8px] uppercase tracking-[0.2em] text-muted/50 sm:text-[9px]">
            <span>0</span>
            <div className="flex items-center gap-1.5">
              <span className="h-px w-3 bg-gold/30" />
              <span className="text-gold/60">~{remaining} remaining</span>
              <span className="h-px w-3 bg-gold/30" />
            </div>
            <span>1,000</span>
          </div>
        </div>

        {/* Club breakdown — horizontal badges */}
        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {['Sporting CP', 'Man United', 'Real Madrid', 'Juventus', 'Al Nassr', 'Portugal'].map(
            (club) => (
              <span
                key={club}
                className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[8px] uppercase tracking-[0.15em] text-pearl/35 sm:px-3.5 sm:py-1.5 sm:text-[9px]"
              >
                {club}
              </span>
            )
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Statistics Export ─── */
export function Statistics() {
  return (
    <SectionWrapper id="statistics" className="bg-[#020202] relative" ambient>
      {/* Background spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(212,175,55,0.04),transparent_60%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="statistics"
          eyebrow="By The Numbers"
          title="Career Analytics"
          subtitle="Verified milestones measured across two decades of elite football."
        />

        {/* Stat ring grid — 5 columns on desktop, 2 on mobile with last centered */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5 mb-8 sm:mb-12">
          {STATISTICS.map((stat, i) => (
            <div
              key={stat.label}
              className={i === STATISTICS.length - 1 ? 'col-span-2 lg:col-span-1 max-w-xs mx-auto lg:max-w-none w-full' : ''}
            >
              <FeaturedStat stat={stat} index={i} />
            </div>
          ))}
        </div>

        {/* Quest tracker */}
        <QuestTracker />
      </div>
    </SectionWrapper>
  )
}
