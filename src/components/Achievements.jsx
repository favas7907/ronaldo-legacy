import { motion } from 'framer-motion'
import { useState, memo, useCallback } from 'react'
import { ACHIEVEMENTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { TiltCard, ShimmerBorder } from './ui/TiltCard'

const icons = {
  star: (
    <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" fill="currentColor" />
  ),
  trophy: (
    <>
      <path d="M8 21h8M12 17v4M6 3h12l-1 8c0 2.8-2.2 5-5 5s-5-2.2-5-5L6 3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 5H3v2c0 2 1.5 3 3 3M18 5h3v2c0 2-1.5 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  shield: (
    <path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
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
    <path d="M3 18V8l4.5 5L12 4l4.5 9L21 8v10H3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
  ),
}

function AchievementCard({ item, index, featured = false }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <TiltCard intensity={featured ? 4 : 6} className="h-full">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeUp}
        custom={index * 0.05}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-slate/90 to-charcoal p-6 sm:rounded-3xl sm:p-8 md:p-10 ${
          featured ? 'trophy-metallic' : 'cinematic-shadow'
        }`}
      >
        <ShimmerBorder active={featured} className="rounded-2xl sm:rounded-3xl" />
        
        {/* Static bloom */}
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/[0.03] blur-[50px] sm:h-36 sm:w-36" />

        {/* Gold sweep on featured */}
        {featured && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl" aria-hidden="true">
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-gold/[0.05] to-transparent sm:w-32"
              animate={{ x: ['-96px', '400px'] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            />
          </div>
        )}

        {/* Mouse spotlight — desktop only */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl hidden sm:block sm:rounded-3xl"
            style={{
              background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 169, 98, 0.06), transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10">
          <div
            className={`mb-4 flex items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold sm:mb-6 sm:rounded-2xl ${
              featured ? 'h-12 w-12 sm:h-16 sm:w-16 gold-glow' : 'h-10 w-10 sm:h-12 sm:w-12'
            }`}
          >
            <svg width={featured ? 22 : 18} height={featured ? 22 : 18} viewBox="0 0 24 24" className="sm:w-auto sm:h-auto" aria-hidden="true">
              {icons[item.icon]}
            </svg>
          </div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted sm:text-[10px] sm:tracking-[0.28em]">{item.title}</p>
          <p
            className={`mt-3 font-display text-gradient-gold sm:mt-4 ${
              featured ? 'text-5xl sm:text-7xl md:text-8xl' : 'text-4xl sm:text-5xl'
            }`}
          >
            {item.value}
          </p>
          <p className="mt-3 text-xs leading-[1.7] text-pearl/45 sm:mt-5 sm:text-sm sm:leading-[1.75]">{item.detail}</p>
        </div>
      </motion.article>
    </TiltCard>
  )
}

export const Achievements = memo(function Achievements() {
  const featured = ACHIEVEMENTS.filter((a) => a.featured)
  const supporting = ACHIEVEMENTS.filter((a) => !a.featured)

  return (
    <SectionWrapper id="achievements" className="overflow-hidden bg-[#0a0a0a]" ambient>
      <div className="pointer-events-none absolute inset-0 spotlight opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="achievements"
          eyebrow="Hall of Legends"
          title="Trophy Museum"
          subtitle="From five Ballon d'Or conquests to international crowns — verified metrics of an unmatched legacy."
        />

        <div className="mb-5 grid gap-4 sm:mb-6 sm:gap-5 lg:grid-cols-2">
          {featured.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} featured />
          ))}
        </div>

        <div className="grid gap-4 grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {supporting.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i + 2} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
})
