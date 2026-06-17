import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const base =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full text-xs font-semibold uppercase tracking-[0.25em] transition'

const variants = {
  primary: `${base} border border-gold/50 bg-gold/10 px-8 py-3.5 text-gold-light hover:shadow-[0_0_40px_rgba(201,169,98,0.2)]`,
  secondary: `${base} border border-white/15 px-8 py-3.5 text-pearl/80 hover:border-white/30 hover:bg-white/5 hover:text-pearl`,
}

const MotionLink = motion.create(Link)

export function PremiumButton({
  children,
  variant = 'primary',
  to,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${variants[variant]} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 translate-y-full bg-gold/20 transition-transform duration-500 group-hover:translate-y-0" />
      )}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    className: classes,
    ...props,
  }

  if (to) {
    return (
      <MotionLink to={to} {...motionProps}>
        {content}
      </MotionLink>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  )
}
