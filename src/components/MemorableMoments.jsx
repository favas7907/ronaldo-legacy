import { motion } from 'framer-motion'
import { memo } from 'react'
import { MEMORABLE_MOMENTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { PremiumPlaceholder } from './ui/PremiumPlaceholder'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

const captionVariants = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  hover: {
    opacity: 0.85,
    height: 'auto',
    marginTop: 12,
    transition: { duration: 0.4, ease: PREMIUM_EASE },
  },
}

export const MemorableMoments = memo(function MemorableMoments() {
  return (
    <SectionWrapper id="moments" className="bg-[#0a0a0a]" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="moments"
          eyebrow="Defining Chapters"
          title="Iconic Frames"
          subtitle="Curated moments from a historic career."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {MEMORABLE_MOMENTS.map((moment, i) => (
            <motion.article
              key={moment.title}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i * 0.04}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal cinematic-shadow cursor-pointer sm:rounded-3xl"
            >
              {/* Premium placeholder background */}
              <PremiumPlaceholder
                accentHex={moment.accentHex}
                badge={moment.badge}
                label=""
                caption=""
                aspectRatio="auto"
                className="absolute inset-0 h-full w-full"
              />

              {/* Dark gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] sm:text-[10px] sm:tracking-[0.35em]" style={{ color: moment.accentHex }}>
                  Frame {String(i + 1).padStart(2, '0')}
                </p>
                
                <h3 className="mt-1.5 font-display text-2xl tracking-wide text-pearl sm:mt-2 sm:text-3xl md:text-4xl">
                  {moment.title}
                </h3>

                {/* Caption — visible on hover (desktop) or always visible on mobile */}
                <p className="mt-2 text-[11px] leading-[1.7] text-pearl/60 sm:mt-3 sm:text-xs sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-500">
                  {moment.caption}
                </p>
              </div>

              {/* Hover border */}
              <div
                className="absolute inset-0 border border-white/[0.04] pointer-events-none rounded-2xl transition-colors duration-400 group-hover:border-white/10 sm:rounded-3xl"
                style={{
                  '--hover-border': `${moment.accentHex}25`,
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
})
