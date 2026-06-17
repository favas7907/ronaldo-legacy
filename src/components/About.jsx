import { motion } from 'framer-motion'
import { ABOUT_PORTRAIT, PROFILE_FACTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { TiltCard, ShimmerBorder } from './ui/TiltCard'

export function About() {
  return (
    <SectionWrapper id="about" className="bg-charcoal/25" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="about"
          eyebrow="The Icon"
          title="More Than a Player"
          subtitle="Portuguese forward. Al Nassr captain. Portugal's eternal number seven. Five Ballon d'Or awards. A career defined by discipline, ambition, and relentless excellence."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-10"
          >
            <motion.p variants={fadeUp} custom={0} className="text-lg leading-[1.8] text-pearl/75 md:text-xl">
              From Sporting CP to Manchester United, Real Madrid, Juventus, and Al Nassr — Cristiano Ronaldo
              has carried elite standards across every stage. For Portugal, he remains the all-time leading
              scorer with 143 international goals and the face of two major titles.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              custom={0.12}
              className="glass-panel relative overflow-hidden rounded-3xl p-8 md:p-10 cinematic-shadow"
            >
              <ShimmerBorder className="rounded-3xl" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold/80 via-gold/30 to-transparent" />
              <p className="text-xl font-light italic leading-relaxed text-pearl md:text-2xl">
                &ldquo;Talent without discipline is nothing. Excellence is not a single act — it is a habit
                forged every day.&rdquo;
              </p>
              <footer className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold">
                Mentality · Discipline · Excellence
              </footer>
            </motion.blockquote>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.08}
              className="relative overflow-hidden rounded-3xl cinematic-shadow"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
              <img
                src={ABOUT_PORTRAIT}
                alt="Editorial football portrait in dramatic lighting"
                className="aspect-[4/5] w-full object-cover brightness-90 saturate-[0.9]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 z-20 p-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold">Signature Card</p>
                <p className="mt-2 font-display text-3xl text-pearl">CR7</p>
                <p className="mt-1 text-sm text-pearl/50">Forward · Portugal · Al Nassr</p>
              </div>
              <div className="absolute inset-0 border border-white/10" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {PROFILE_FACTS.map((fact, i) => (
                <motion.article
                  key={fact.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={0.15 + i * 0.06}
                >
                  <TiltCard intensity={5} className="h-full">
                    <div className="group glass-panel h-full rounded-2xl p-5 cinematic-shadow transition hover:border-gold/20 md:p-6">
                      <ShimmerBorder className="rounded-2xl" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-3 font-display text-2xl tracking-wide text-pearl transition group-hover:text-gold-light">
                        {fact.value}
                      </p>
                    </div>
                  </TiltCard>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
