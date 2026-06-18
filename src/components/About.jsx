import { motion } from 'framer-motion'
import { memo } from 'react'
import { PROFILE_FACTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { TiltCard, ShimmerBorder } from './ui/TiltCard'
import { PremiumPlaceholder } from './ui/PremiumPlaceholder'

export const About = memo(function About() {
  return (
    <SectionWrapper id="about" className="bg-charcoal/25" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="about"
          eyebrow="The Icon"
          title="More Than a Player"
          subtitle="Portuguese forward. Al Nassr captain. Portugal's eternal number seven. Five Ballon d'Or awards."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 sm:space-y-10"
          >
            <motion.p variants={fadeUp} custom={0} className="text-base leading-[1.8] text-pearl/65 sm:text-lg md:text-xl">
              From Sporting CP to Manchester United, Real Madrid, Juventus, and Al Nassr — Cristiano Ronaldo
              has carried elite standards across every stage. For Portugal, he remains the all-time leading
              scorer with 143 international goals and the captain behind two major titles.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              custom={0.12}
              className="glass-panel relative overflow-hidden rounded-2xl p-6 cinematic-shadow sm:rounded-3xl sm:p-8 md:p-10"
            >
              <ShimmerBorder className="rounded-2xl sm:rounded-3xl" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold/80 via-gold/30 to-transparent" />
              <p className="text-lg font-light italic leading-relaxed text-pearl sm:text-xl md:text-2xl">
                &ldquo;Talent without discipline is nothing. Excellence is not a single act — it is a habit
                forged every day.&rdquo;
              </p>
              <footer className="mt-4 text-[9px] uppercase tracking-[0.25em] text-gold sm:mt-6 sm:text-[10px] sm:tracking-[0.3em]">
                Mentality · Discipline · Excellence
              </footer>
            </motion.blockquote>

            {/* Profile facts — mobile 2-col */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {PROFILE_FACTS.map((fact, i) => (
                <motion.article
                  key={fact.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={0.15 + i * 0.05}
                >
                  <TiltCard intensity={5} className="h-full">
                    <div className="group glass-panel h-full rounded-xl p-4 cinematic-shadow transition hover:border-gold/20 sm:rounded-2xl sm:p-5 md:p-6">
                      <ShimmerBorder className="rounded-xl sm:rounded-2xl" />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[10px] sm:tracking-[0.25em]">
                        {fact.label}
                      </p>
                      <p className="mt-2 font-display text-xl tracking-wide text-pearl transition group-hover:text-gold-light sm:mt-3 sm:text-2xl">
                        {fact.value}
                      </p>
                    </div>
                  </TiltCard>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Premium portrait placeholder */}
          <div className="order-first lg:order-last">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.08}
              className="relative overflow-hidden rounded-2xl cinematic-shadow sm:rounded-3xl"
            >
              <PremiumPlaceholder
                accentHex="#D4AF37"
                badge="CR7"
                label="Signature Card"
                caption="Forward · Portugal · Al Nassr"
                aspectRatio="4/5"
                className="rounded-2xl sm:rounded-3xl"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 z-20 p-5 sm:p-8">
                <p className="font-display text-2xl text-pearl sm:text-3xl md:text-4xl">
                  Cristiano <span className="text-gradient-gold">Ronaldo</span>
                </p>
                <div className="mt-2 flex items-center gap-2 sm:mt-3 sm:gap-3">
                  <span className="h-px w-6 bg-gold/40 sm:w-8" />
                  <p className="text-[9px] uppercase tracking-[0.25em] text-gold/80 sm:text-[10px] sm:tracking-[0.3em]">No. 7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
})
