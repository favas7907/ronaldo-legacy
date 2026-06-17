import { motion, useSpring } from 'framer-motion'

export function AmbientLayer({ grain = true, gradient = true, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {gradient && <div className="gradient-drift absolute inset-0 opacity-60" />}
      {grain && <div className="film-grain absolute inset-0" />}
    </div>
  )
}

export function ScrollProgressBar({ progress }) {
  const scaleX = useSpring(progress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-gold/20 via-gold to-gold/20"
      style={{ scaleX }}
    />
  )
}
