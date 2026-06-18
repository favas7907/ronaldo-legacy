import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { CAREER_ERAS } from '../data/content'
import { ShimmerBorder } from './ui/TiltCard'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

/* ─── Jersey silhouette for visual depth ─── */
function JerseySVG({ hex, className = '' }) {
  return (
    <svg viewBox="0 0 280 320" fill="none" className={className}>
      <path
        d="M140 20 L100 25 L60 60 L30 55 L10 90 L40 110 L55 90 L55 280 L225 280 L225 90 L240 110 L270 90 L250 55 L220 60 L180 25 L140 20Z"
        stroke={hex}
        strokeWidth="1.5"
        fill="none"
      />
      <text x="140" y="195" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="100" fill={hex} opacity="0.25">
        7
      </text>
      <path d="M120 25 Q140 40 160 25" stroke={hex} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  )
}

/* ─── Era filmstrip tab ─── */
function EraTab({ era, index, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex-shrink-0 text-left transition-all duration-400 focus-visible:outline-gold ${
        isActive ? 'flex-[2] sm:flex-[1.5]' : 'flex-1'
      }`}
    >
      {/* Colored top border */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(to right, ${era.accentHex}, ${era.accentHex}40)` }}
      />

      <div className={`h-full border-r border-white/[0.04] px-3 py-3 transition sm:px-4 sm:py-4 ${
        isActive ? 'bg-white/[0.03]' : 'hover:bg-white/[0.015]'
      }`}>
        <p className={`text-[7px] font-semibold uppercase tracking-[0.18em] transition sm:text-[8px] ${
          isActive ? '' : 'text-muted group-hover:text-pearl/50'
        }`}
          style={isActive ? { color: era.accentHex } : {}}
        >
          {era.period}
        </p>
        <p className={`mt-0.5 font-display text-[11px] tracking-wide transition sm:text-xs md:text-sm ${
          isActive ? 'text-pearl' : 'text-pearl/30 group-hover:text-pearl/50'
        }`}>
          {era.club}
        </p>
      </div>
    </button>
  )
}

/* ─── Era content panel ─── */
function EraPanel({ era, index, total, onPrev, onNext }) {
  return (
    <motion.div
      key={era.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.45, ease: PREMIUM_EASE }}
      className="relative"
    >
      {/* Dynamic background gradient per era */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 100% 50%, ${era.accentHex}08, transparent 70%), radial-gradient(ellipse 50% 60% at 0% 100%, ${era.accentHex}05, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative grid gap-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#080808] sm:rounded-3xl lg:grid-cols-[0.45fr_0.55fr]">
        
        {/* ─── Left: Visual showcase ─── */}
        <div className="relative min-h-[280px] overflow-hidden border-b border-white/[0.04] sm:min-h-[340px] lg:min-h-0 lg:border-b-0 lg:border-r">
          {/* Accent gradient base */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 70% at 50% 80%, ${era.accentHex}12, transparent 70%), linear-gradient(175deg, #0a0a0a 0%, #060606 50%, ${era.accentHex}06 100%)`,
            }}
          />

          {/* Jersey silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]" aria-hidden="true">
            <JerseySVG hex={era.accentHex} className="w-[55%] max-w-[260px]" />
          </div>

          {/* Big era number */}
          <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7" aria-hidden="true">
            <span className="font-display text-7xl leading-none text-white/[0.03] sm:text-8xl lg:text-9xl">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Club badge */}
          <div className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl border font-display text-sm tracking-wider sm:h-14 sm:w-14 sm:rounded-2xl sm:text-lg"
              style={{
                borderColor: `${era.accentHex}35`,
                backgroundColor: `${era.accentHex}10`,
                color: era.accentHex,
                boxShadow: `0 0 24px ${era.accentHex}12`,
              }}
            >
              {era.badge}
            </div>
          </div>

          {/* Stage label */}
          <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
            <div className="rounded-full border border-white/10 bg-void/60 px-3 py-1 backdrop-blur-md sm:px-4 sm:py-1.5">
              <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-pearl/60 sm:text-[8px]">
                {era.stage}
              </p>
            </div>
          </div>

          {/* Accent glow */}
          <div
            className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 translate-y-1/4 rounded-full blur-[80px]"
            style={{ backgroundColor: `${era.accentHex}10` }}
            aria-hidden="true"
          />

          {/* Shimmer */}
          <div className="absolute inset-0 shimmer-sweep opacity-15 pointer-events-none" aria-hidden="true" />

          {/* Border */}
          <div className="absolute inset-0 border border-white/[0.02] rounded-[inherit] pointer-events-none" />
        </div>

        {/* ─── Right: Content ─── */}
        <div className="relative flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-10">
          <div>
            {/* Era eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: `${era.accentHex}40` }} />
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] sm:text-[9px]" style={{ color: era.accentHex }}>
                Era {String(index + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
              </p>
            </div>

            {/* Club name */}
            <h3 className="font-display text-3xl tracking-wide text-pearl sm:text-4xl md:text-5xl">
              {era.club}
            </h3>

            {/* Title */}
            <p className="mt-2 font-display text-lg text-pearl/50 sm:mt-3 sm:text-xl">
              {era.title}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              <span
                className="rounded-full border px-3 py-1 text-[8px] uppercase tracking-[0.15em] sm:text-[9px]"
                style={{ borderColor: `${era.accentHex}25`, color: `${era.accentHex}cc` }}
              >
                Age {era.age}
              </span>
              <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[8px] uppercase tracking-[0.15em] text-pearl/35 sm:text-[9px]">
                {era.period}
              </span>
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-transparent sm:my-6" />

            {/* Summary */}
            <p className="text-sm leading-[1.85] text-pearl/45 sm:text-base">
              {era.summary}
            </p>
          </div>

          {/* Bottom navigation */}
          <div className="mt-6 flex items-center justify-between sm:mt-8">
            <button
              type="button"
              onClick={onPrev}
              disabled={index === 0}
              className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-pearl/40 transition hover:text-gold disabled:opacity-20 sm:text-[10px]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Prev
            </button>

            {/* Dot pagination */}
            <div className="flex items-center gap-1.5">
              {CAREER_ERAS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-400 ${
                    i === index ? 'w-5 bg-gold' : i < index ? 'w-1.5 bg-gold/30' : 'w-1.5 bg-white/10'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={onNext}
              disabled={index === total - 1}
              className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-pearl/40 transition hover:text-gold disabled:opacity-20 sm:text-[10px]"
            >
              Next
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Export ─── */
export function CareerOdyssey() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeEra = CAREER_ERAS[activeIndex]

  const handlePrev = useCallback(() => setActiveIndex((p) => Math.max(0, p - 1)), [])
  const handleNext = useCallback(() => setActiveIndex((p) => Math.min(CAREER_ERAS.length - 1, p + 1)), [])

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative px-5 py-20 sm:py-24 md:px-10 md:py-32 lg:px-16 lg:py-36 bg-[#030303]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="film-grain absolute inset-0" />
        <div className="gradient-drift absolute inset-0 opacity-40" />
        {/* Subtle spotlight matching active era */}
        <motion.div
          key={activeEra.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 40% at 80% 30%, ${activeEra.accentHex}04, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: PREMIUM_EASE }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-gold/60 to-transparent sm:w-10" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[10px] sm:tracking-[0.4em]">
              Career Odyssey
            </p>
          </div>
          <h2
            id="journey-heading"
            className="font-display text-[clamp(2.25rem,7vw,5rem)] leading-[0.92] tracking-wide text-pearl"
          >
            Every Era. Same Standard.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
            From Lisbon to Riyadh — six legendary chapters of elite football, explored through an interactive journey.
          </p>
          <div className="mt-8 h-px max-w-[200px] bg-gradient-to-r from-gold/20 via-gold/10 to-transparent sm:mt-10 sm:max-w-xs" />
        </motion.header>

        {/* Era filmstrip tabs */}
        <div className="mb-6 flex overflow-x-auto rounded-xl border border-white/[0.05] bg-void/40 backdrop-blur-sm scrollbar-none sm:mb-8 sm:rounded-2xl">
          {CAREER_ERAS.map((era, i) => (
            <EraTab
              key={era.id}
              era={era}
              index={i}
              isActive={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Era detail panel */}
        <AnimatePresence mode="wait">
          <EraPanel
            era={activeEra}
            index={activeIndex}
            total={CAREER_ERAS.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </AnimatePresence>
      </div>
    </section>
  )
}
