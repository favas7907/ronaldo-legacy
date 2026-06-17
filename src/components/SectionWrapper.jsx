import { motion } from 'framer-motion'
import { fadeUp } from '../motion/variants'
import { AmbientLayer } from './ui/AmbientLayer'

export function SectionWrapper({ id, children, className = '', ambient = false }) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`relative px-5 py-28 md:px-10 md:py-36 lg:px-16 ${className}`}
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
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-20 ${alignClass}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} custom={0} className="mb-4 flex items-center gap-4">
          <span className="editorial-rule max-w-[3rem]" aria-hidden="true" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </p>
        </motion.div>
      )}
      <motion.h2
        id={`${id}-heading`}
        variants={fadeUp}
        custom={0.08}
        className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.92] tracking-wide text-pearl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.16}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        custom={0.22}
        className="editorial-rule mt-10 max-w-xs"
        aria-hidden="true"
      />
    </motion.header>
  )
}
