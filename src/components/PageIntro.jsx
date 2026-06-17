import { motion } from 'framer-motion'
import { fadeUp } from '../motion/variants'
import { AmbientLayer } from './ui/AmbientLayer'

export function PageIntro({ eyebrow, title, subtitle }) {
  return (
    <section
      aria-label={`${title} introduction`}
      className="relative flex min-h-[42vh] items-end overflow-hidden border-b border-white/[0.04] bg-charcoal/40 pt-28 md:min-h-[48vh] md:pt-32"
    >
      <AmbientLayer />
      <div className="spotlight pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.08}
          className="font-display text-[clamp(3rem,10vw,6.5rem)] leading-[0.9] tracking-wide text-pearl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.16}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.22}
          className="editorial-rule mt-10 max-w-xs"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
