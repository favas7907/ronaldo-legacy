import { motion } from 'framer-motion'
import { STATISTICS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { AnimatedCounter } from './AnimatedCounter'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'

function StatRing({ value, max }) {
  const pct = Math.min((value / max) * 100, 100)
  const circumference = 2 * Math.PI * 42
  const offset = circumference - (pct / 100) * circumference

  return (
    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <motion.circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="rgba(201,169,98,0.35)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </svg>
  )
}

export function Statistics() {
  return (
    <SectionWrapper id="statistics" className="spotlight-bottom" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="statistics"
          eyebrow="By The Numbers"
          title="Statistics"
          subtitle="Figures that speak louder than words — verified milestones from a career without equal."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STATISTICS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i * 0.07}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-panel relative overflow-hidden rounded-3xl px-5 py-12 text-center cinematic-shadow"
              >
                <ShimmerBorder className="rounded-3xl" />
                <StatRing value={stat.value} max={stat.max} />

                <div className="relative">
                  <p className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-none text-pearl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.2} />
                  </p>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
                    {stat.label}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
