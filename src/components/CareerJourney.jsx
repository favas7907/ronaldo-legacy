import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { CAREER_STAGES } from '../data/content'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { TiltCard, ShimmerBorder } from './ui/TiltCard'

// Zero-gravity rise and rotate entry variant
const cardRiseVariant = {
  hidden: (isEven) => ({
    opacity: 0,
    y: 80,
    rotateX: 15,
    rotateY: isEven ? -8 : 8,
    scale: 0.94,
  }),
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function CareerJourney() {
  const containerRef = useRef(null)

  // Track scroll inside the career journey section to draw the vertical line dynamically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth out the scroll progress using a spring
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <SectionWrapper id="journey" className="bg-[#030303]" ambient>
      <div ref={containerRef} className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="journey"
          eyebrow="Career Journey"
          title="Every Stage. Same Standard."
          subtitle="From Lisbon to Riyadh — dominant spells at Manchester United, Real Madrid, Juventus, and Al Nassr. Records were broken. Greatness was repeated."
        />

        <div className="relative">
          {/* Static thin background track */}
          <div
            className="absolute left-5 top-0 bottom-0 hidden w-px bg-white/[0.04] md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Dynamic Scroll-tied track */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-5 top-0 bottom-0 hidden w-0.5 origin-top bg-gradient-to-b from-gold via-gold-dim to-gold/10 md:left-1/2 md:block md:-translate-x-1/2 shadow-[0_0_12px_rgba(201,169,98,0.45)] z-10"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {CAREER_STAGES.map((stage, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.article
                  key={stage.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={isEven}
                  variants={cardRiseVariant}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:items-center md:gap-16`}
                >
                  {/* Left or Right Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Container */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                    <TiltCard intensity={5}>
                      <motion.div
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br ${stage.accent} p-8 cinematic-shadow md:p-10`}
                      >
                        <ShimmerBorder className="rounded-3xl" />
                        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/10" />

                        {/* Top layout */}
                        <div
                          className={`relative mb-6 flex items-center gap-4 ${
                            isEven ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 font-display text-xl text-gold gold-glow transition group-hover:bg-gold/10">
                            {stage.badge}
                          </span>
                          <div className={isEven ? 'md:text-right' : ''}>
                            <h3 className="font-display text-3xl tracking-wide text-pearl transition group-hover:text-gold-light md:text-4xl">
                              {stage.club}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{stage.era}</p>
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="relative text-sm leading-[1.8] text-pearl/65 md:text-base">
                          {stage.summary}
                        </p>

                        <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold/40 to-transparent transition-all duration-700 group-hover:w-full" />
                      </motion.div>
                    </TiltCard>
                  </div>

                  {/* Interactive scrolling node indicator on timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 15 }}
                    className="absolute left-5 top-12 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-gold bg-void shadow-[0_0_16px_rgba(201,169,98,0.8)] md:left-1/2 md:block z-20 group-hover:scale-125 transition-transform"
                    aria-hidden="true"
                  />
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
