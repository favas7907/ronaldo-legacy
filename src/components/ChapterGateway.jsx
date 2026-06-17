import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HOME_CHAPTERS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'

export function ChapterGateway() {
  return (
    <SectionWrapper id="chapters" className="spotlight-bottom bg-charcoal/20" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="chapters"
          eyebrow="The Experience"
          title="Three Chapters of Greatness"
          subtitle="A slow-burn cinematic reveal — explore the legacy, the records, and the archive."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {HOME_CHAPTERS.map((chapter, i) => (
            <motion.div
              key={chapter.path}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i * 0.1}
            >
              <Link to={chapter.path} className="group block h-full">
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br ${chapter.accent} p-8 md:p-10 cinematic-shadow`}
                >
                  <ShimmerBorder active className="rounded-3xl" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold/80">
                    Chapter {chapter.number}
                  </p>
                  <h3 className="mt-4 font-display text-4xl tracking-wide text-pearl transition group-hover:text-gold-light md:text-5xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-pearl/55">{chapter.subtitle}</p>

                  <div className="mt-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                    <span>Enter</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>

                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/10" />
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
