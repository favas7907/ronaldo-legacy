import { motion } from 'framer-motion'
import { MEMORABLE_MOMENTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'

export function MemorableMoments() {
  return (
    <SectionWrapper id="moments" className="bg-charcoal/25" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="moments"
          eyebrow="Defining Chapters"
          title="Memorable Moments"
          subtitle="Curated frames from a career that rewrote the limits of what one athlete could achieve."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORABLE_MOMENTS.map((moment, i) => (
            <motion.article
              key={moment.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeUp}
              custom={i * 0.05}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl cinematic-shadow"
            >
              <motion.img
                src={moment.image}
                alt={moment.alt}
                className="h-full w-full object-cover brightness-[0.85] saturate-[0.8] transition duration-700 group-hover:scale-110 group-hover:brightness-100 group-hover:saturate-100"
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent transition duration-500 group-hover:from-void/95 group-hover:via-void/60" />

              <motion.div
                className="absolute inset-0 backdrop-blur-0 transition duration-500 group-hover:backdrop-blur-[2px]"
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                  Frame {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-wide text-pearl md:text-4xl">
                  {moment.title}
                </h3>
                <p className="mt-4 max-h-0 translate-y-2 overflow-hidden text-sm leading-[1.75] text-pearl/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:translate-y-0 group-hover:opacity-100">
                  {moment.caption}
                </p>
              </div>

              <div className="absolute inset-0 border border-transparent transition duration-500 group-hover:border-gold/25 group-hover:shadow-[inset_0_0_80px_rgba(201,169,98,0.06)]" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
