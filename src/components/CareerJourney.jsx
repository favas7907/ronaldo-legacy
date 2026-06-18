import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef, memo } from 'react'
import { CAREER_STAGES } from '../data/content'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { TiltCard, ShimmerBorder } from './ui/TiltCard'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

const cardRiseVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: PREMIUM_EASE,
    },
  },
}

function JerseySilhouette({ accentHex }) {
  return (
    <div className="absolute right-2 top-2 opacity-[0.035] pointer-events-none sm:right-4 sm:top-4" aria-hidden="true">
      <svg width="100" height="120" viewBox="0 0 280 320" fill="none" className="sm:w-[120px] sm:h-[140px]">
        <path
          d="M140 20 L100 25 L60 60 L30 55 L10 90 L40 110 L55 90 L55 280 L225 280 L225 90 L240 110 L270 90 L250 55 L220 60 L180 25 L140 20Z"
          stroke={accentHex}
          strokeWidth="2"
          fill="none"
        />
        <text
          x="140"
          y="190"
          textAnchor="middle"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="100"
          fill={accentHex}
          opacity="0.3"
        >
          7
        </text>
      </svg>
    </div>
  )
}

export const CareerJourney = memo(function CareerJourney() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

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
          subtitle="From Lisbon to Riyadh — records were broken. Greatness was repeated."
        />

        <div className="relative">
          {/* Timeline track — hidden on mobile */}
          <div
            className="absolute left-5 top-0 bottom-0 hidden w-px bg-white/[0.04] md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY }}
            className="absolute left-5 top-0 bottom-0 hidden w-0.5 origin-top bg-gradient-to-b from-gold via-gold-dim to-gold/10 md:left-1/2 md:block md:-translate-x-1/2 shadow-[0_0_10px_rgba(201,169,98,0.35)] z-10"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10 md:space-y-14">
            {CAREER_STAGES.map((stage, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.article
                  key={stage.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={cardRiseVariant}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:items-center md:gap-14`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <TiltCard intensity={4}>
                      <div
                        className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${stage.accent} p-6 cinematic-shadow sm:rounded-3xl sm:p-8 md:p-10`}
                      >
                        <ShimmerBorder className="rounded-2xl sm:rounded-3xl" />
                        <JerseySilhouette accentHex={stage.accentHex} />
                        
                        {/* Static glow */}
                        <div
                          className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-[50px]"
                          style={{ backgroundColor: `${stage.accentHex}06` }}
                          aria-hidden="true"
                        />

                        {/* Top row */}
                        <div
                          className={`relative mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4 ${
                            isEven ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-display text-base tracking-wider transition sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl"
                            style={{
                              borderColor: `${stage.accentHex}30`,
                              backgroundColor: `${stage.accentHex}08`,
                              color: stage.accentHex,
                            }}
                          >
                            {stage.badge}
                          </span>
                          <div className={isEven ? 'md:text-right' : ''}>
                            <h3 className="font-display text-2xl tracking-wide text-pearl transition group-hover:text-gold-light sm:text-3xl md:text-4xl">
                              {stage.club}
                            </h3>
                            <p className="text-[9px] uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.25em]" style={{ color: stage.accentHex }}>
                              {stage.era}
                            </p>
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="relative text-sm leading-[1.75] text-pearl/55 md:text-base">
                          {stage.summary}
                        </p>

                        {/* Bottom hover line */}
                        <div
                          className="absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full"
                          style={{ background: `linear-gradient(to right, ${stage.accentHex}40, transparent)` }}
                        />
                      </div>
                    </TiltCard>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 15 }}
                    className="absolute left-5 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 md:left-1/2 md:block z-20"
                    style={{
                      borderColor: stage.accentHex,
                      backgroundColor: '#030303',
                      boxShadow: `0 0 12px ${stage.accentHex}70`,
                    }}
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
})
