import { motion } from 'framer-motion'
import { fadeUp } from '../motion/variants'
import { AmbientLayer } from './ui/AmbientLayer'

export function SectionWrapper({ id, children, className = '', ambient = false }) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`relative px-5 py-20 sm:py-24 md:px-10 md:py-32 lg:px-16 lg:py-36 ${className}`}
    >
      {ambient && <AmbientLayer />}
      {children}
    </section>
  )
}

export function SectionHeading({ id, eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'max-w-3xl'

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`mb-14 sm:mb-16 md:mb-20 ${alignClass}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} custom={0} className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
          <span className="editorial-rule max-w-[2.5rem] sm:max-w-[3rem]" aria-hidden="true" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[10px] sm:tracking-[0.4em]">
            {eyebrow}
          </p>
        </motion.div>
      )}
      <motion.h2
        id={`${id}-heading`}
        variants={fadeUp}
        custom={0.08}
        className="font-display text-[clamp(2.25rem,7vw,5rem)] leading-[0.92] tracking-wide text-pearl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.16}
          className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:max-w-2xl sm:text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        custom={0.22}
        className="editorial-rule mt-8 max-w-[200px] sm:mt-10 sm:max-w-xs"
        aria-hidden="true"
      />
    </motion.header>
  )
}
