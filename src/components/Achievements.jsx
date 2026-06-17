import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'

const icons = {
  star: (
    <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" fill="currentColor" />
  ),
  trophy: (
    <path d="M8 2h8v1a5 5 0 01-5 5 5 5 0 01-5-5V2zm1 1v0a4 4 0 004 4 4 4 0 004-4V3H9zm-1 9h10v1H8v-1zm1 3h8v1H9v-1z" fill="currentColor" />
  ),
  shield: (
    <path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z" fill="currentColor" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  flag: (
    <path d="M5 3v18M5 3h12l-2 4 2 4H5" stroke="currentColor" strokeWidth="1.5" fill="none" />
  ),
  crown: (
    <path d="M3 8l3 6 6-8 6 8 3-6v10H3V8z" fill="currentColor" />
  ),
}

function AchievementCard({ item, index, featured = false }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      custom={index * 0.06}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-slate/90 to-charcoal cinematic-shadow ${
        featured ? 'p-10 md:p-12' : 'p-8'
      }`}
    >
      <ShimmerBorder active={featured} className="rounded-3xl" />
      {featured && (
        <div className="pointer-events-none absolute inset-0 shimmer-sweep opacity-0 transition group-hover:opacity-100" />
      )}

      <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/12" />

      <div className="relative">
        <div
          className={`mb-6 flex items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold gold-glow ${
            featured ? 'h-16 w-16' : 'h-12 w-12'
          }`}
        >
          <svg width={featured ? 28 : 22} height={featured ? 28 : 22} viewBox="0 0 24 24" aria-hidden="true">
            {icons[item.icon]}
          </svg>
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">{item.title}</p>
        <p
          className={`mt-3 font-display text-gradient-gold ${
            featured ? 'text-7xl md:text-8xl' : 'text-5xl'
          }`}
        >
          {item.value}
        </p>
        <p className="mt-5 text-sm leading-[1.75] text-pearl/55">{item.detail}</p>
      </div>
    </motion.article>
  )
}

export function Achievements() {
  const featured = ACHIEVEMENTS.filter((a) => a.featured)
  const supporting = ACHIEVEMENTS.filter((a) => !a.featured)

  return (
    <SectionWrapper id="achievements" className="overflow-hidden bg-charcoal/35" ambient>
      <div className="pointer-events-none absolute inset-0 spotlight opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="achievements"
          eyebrow="Hall of Legends"
          title="Trophy Room"
          subtitle="A museum exhibit of greatness — Ballon d'Or laurels, continental triumphs, and records that define an era."
        />

        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          {featured.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} featured />
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supporting.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i + 2} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
