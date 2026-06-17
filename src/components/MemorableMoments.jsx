import { motion } from 'framer-motion'
import { MEMORABLE_MOMENTS } from '../data/content'
import { fadeUp } from '../motion/variants'
import { SectionHeading, SectionWrapper } from './SectionWrapper'

// High-fidelity hover transition parameters
const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.025,
    y: -10,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageHoverVariants = {
  initial: { scale: 1.01, filter: 'brightness(0.75) saturate(0.8)' },
  hover: {
    scale: 1.08,
    filter: 'brightness(0.95) saturate(1.05)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const textGroupVariants = {
  initial: { y: 20 },
  hover: {
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const captionVariants = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  hover: {
    opacity: 0.85,
    height: 'auto',
    marginTop: 14,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function MemorableMoments() {
  return (
    <SectionWrapper id="moments" className="bg-[#0a0a0a]" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="moments"
          eyebrow="Defining Chapters"
          title="Iconic Frames"
          subtitle="Curated moments from a historic career. Hover over each frame to explore the narratives behind football's most iconic occurrences."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMORABLE_MOMENTS.map((moment, i) => (
            <motion.article
              key={moment.title}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i * 0.05}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal cinematic-shadow"
            >
              {/* Nested Card wrapper for scale/lift */}
              <motion.div
                variants={cardHoverVariants}
                className="absolute inset-0 overflow-hidden"
              >
                {/* Slow zooming image */}
                <motion.img
                  src={moment.image}
                  alt={moment.alt}
                  className="h-full w-full object-cover"
                  variants={imageHoverVariants}
                  loading="lazy"
                />

                {/* Dark gradient mapping overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-void/40 via-transparent to-gold/5 opacity-40" />

                {/* Soft backdrop blur sweep */}
                <motion.div
                  className="absolute inset-0 backdrop-blur-0 transition-all duration-500 group-hover:backdrop-blur-[1px]"
                  aria-hidden="true"
                />

                {/* Text Content Overlay */}
                <motion.div
                  variants={textGroupVariants}
                  className="absolute inset-0 flex flex-col justify-end p-8 md:p-10"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                    Frame {String(i + 1).padStart(2, '0')}
                  </p>
                  
                  <h3 className="mt-2 font-display text-3xl tracking-wide text-pearl md:text-4xl">
                    {moment.title}
                  </h3>

                  {/* Rising/revealing caption */}
                  <motion.p
                    variants={captionVariants}
                    className="overflow-hidden text-xs leading-[1.8] text-pearl/80"
                  >
                    {moment.caption}
                  </motion.p>
                </motion.div>

                {/* Premium Gold border ring overlay */}
                <div className="absolute inset-0 border border-white/5 transition-colors duration-500 group-hover:border-gold/25 pointer-events-none rounded-3xl" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
