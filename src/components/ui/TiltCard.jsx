import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function TiltCard({ children, className = '', intensity = 8 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ShimmerBorder({ active = false, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      aria-hidden="true"
    >
      {active && <div className="shimmer-sweep absolute inset-0 rounded-[inherit] opacity-60" />}
      <div className="absolute inset-0 rounded-[inherit] border border-white/[0.06] transition group-hover:border-gold/25" />
    </div>
  )
}
