import { motion } from 'framer-motion'
import { CAREER_STAGES } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { TiltCard, ShimmerBorder } from './ui/TiltCard'

export function CareerJourney() {
  return (
    <SectionWrapper id="journey" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="journey"
          eyebrow="Career Journey"
          title="Every Stage. Same Standard."
          subtitle="From Lisbon to Riyadh — dominant spells at Manchester United, Real Madrid, Juventus, and Al Nassr. Records were broken. Greatness was repeated."
        />

        <div className="relative">
          <div
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-gold/50 via-white/5 to-transparent md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-5 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-gold via-gold/40 to-gold/10 md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {CAREER_STAGES.map((stage, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.article
                  key={stage.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  custom={i * 0.07}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:items-center md:gap-16`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className={`md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                    <TiltCard intensity={6}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br ${stage.accent} p-7 cinematic-shadow md:p-9`}
                      >
                        <ShimmerBorder className="rounded-3xl" />
                        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/5 blur-2xl transition group-hover:bg-gold/10" />

                        <div
                          className={`relative mb-5 flex items-center gap-4 ${
                            isEven ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-xl text-gold gold-glow">
                            {stage.badge}
                          </span>
                          <div className={isEven ? 'md:text-right' : ''}>
                            <h3 className="font-display text-3xl tracking-wide text-pearl md:text-4xl">
                              {stage.club}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{stage.era}</p>
                          </div>
                        </div>

                        <p className="relative text-sm leading-[1.8] text-pearl/65 md:text-base">
                          {stage.summary}
                        </p>

                        <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-700 group-hover:w-full" />
                      </motion.div>
                    </TiltCard>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, type: 'spring', stiffness: 260, damping: 20 }}
                    className="absolute left-5 top-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-gold bg-void shadow-[0_0_16px_rgba(201,169,98,0.7)] md:left-1/2 md:block"
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
