import { motion } from 'framer-motion'
import { STATISTICS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { AnimatedCounter } from './AnimatedCounter'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'

function StatRing({ value, max }) {
  const pct = Math.min((value / max) * 100, 100)
  const circumference = 2 * Math.PI * 40
  const offset = circumference - (pct / 100) * circumference

  return (
    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      
      {/* Outer blurred glow stroke */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="rgba(201, 169, 98, 0.45)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        className="blur-[2px]"
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />

      {/* Inner sharp stroke */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="rgba(201, 169, 98, 0.85)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </svg>
  )
}

export function Statistics() {
  const questValue = 973
  const questMax = 1000
  const questPct = (questValue / questMax) * 100

  return (
    <SectionWrapper id="statistics" className="spotlight-bottom bg-[#030303]" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="statistics"
          eyebrow="By The Numbers"
          title="Career Analytics"
          subtitle="A premium dashboard of statistical milestones. Precise figures, verified benchmarks, and the metrics of unmatched longevity."
        />

        {/* Five Stat Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-14">
          {STATISTICS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeUp}
              custom={i * 0.07}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel relative overflow-hidden rounded-3xl px-5 py-14 text-center cinematic-shadow"
              >
                <ShimmerBorder className="rounded-3xl" />
                <StatRing value={stat.value} max={stat.max} />

                <div className="relative z-10">
                  <p className="font-display text-[clamp(2.75rem,5.5vw,3.8rem)] leading-none text-pearl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                  </p>
                  <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.25em] text-muted group-hover:text-gold transition">
                    {stat.label}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 1,000 Goals Quest Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative overflow-hidden rounded-3xl p-8 cinematic-shadow"
        >
          <ShimmerBorder active className="rounded-3xl" />
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">The Millennium Landmark</p>
              <h3 className="mt-1 font-display text-2xl tracking-wide text-pearl md:text-3xl">Quest for 1,000 Official Goals</h3>
            </div>
            <div className="flex items-baseline gap-2 font-display text-4xl text-pearl md:text-5xl">
              <span className="text-gradient-gold">973</span>
              <span className="text-lg text-muted font-body font-light">/ 1,000</span>
            </div>
          </div>

          <p className="text-xs text-pearl/50 leading-relaxed max-w-xl mb-6">
            Approaching the ultimate milestone in professional football. With 973 verified official goals scored across Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr, and Portugal, Ronaldo continues to push international limits.
          </p>

          {/* Progress Bar Track */}
          <div className="relative h-2 w-full rounded-full bg-white/[0.04] overflow-hidden border border-white/[0.05]">
            {/* Filled Progress */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${questPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-dim via-gold to-gold-light rounded-full shadow-[0_0_12px_rgba(201,169,98,0.5)]"
            />
            {/* Shimmer sweep inside bar */}
            <div className="absolute inset-0 shimmer-sweep opacity-20 pointer-events-none rounded-full" />
          </div>

          <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-muted">
            <span>Progress: {questPct.toFixed(1)}%</span>
            <span>27 Goals Remaining</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
