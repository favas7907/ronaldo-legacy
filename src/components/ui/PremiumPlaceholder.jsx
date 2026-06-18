import { motion } from 'framer-motion'
import { memo } from 'react'

/**
 * Premium placeholder card shown when an image is unavailable.
 * Memoized to prevent unnecessary re-renders in lists.
 */
export const PremiumPlaceholder = memo(function PremiumPlaceholder({
  accentHex = '#D4AF37',
  badge = 'CR7',
  label = '',
  caption = '',
  className = '',
  aspectRatio = '4/5',
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#080808] ${className}`}
      style={{ aspectRatio }}
    >
      {/* Dark gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 80%, ${accentHex}15, transparent 70%), linear-gradient(175deg, #0a0a0a 0%, #050505 50%, ${accentHex}08 100%)`,
        }}
      />

      {/* Jersey silhouette SVG — static, no animation overhead */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]" aria-hidden="true">
        <svg
          width="280"
          height="320"
          viewBox="0 0 280 320"
          fill="none"
          className="w-[60%] max-w-[280px]"
        >
          <path
            d="M140 20 L100 25 L60 60 L30 55 L10 90 L40 110 L55 90 L55 280 L225 280 L225 90 L240 110 L270 90 L250 55 L220 60 L180 25 L140 20Z"
            stroke={accentHex}
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <text
            x="140"
            y="185"
            textAnchor="middle"
            fontFamily="'Bebas Neue', sans-serif"
            fontSize="90"
            fill={accentHex}
            opacity="0.15"
          >
            7
          </text>
          <path
            d="M120 25 Q140 40 160 25"
            stroke={accentHex}
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Static accent glow — CSS only, no JS animation */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 translate-y-1/4 rounded-full blur-[80px]"
        style={{ backgroundColor: `${accentHex}18` }}
        aria-hidden="true"
      />

      {/* Club badge */}
      <div className="absolute left-5 top-5 z-10">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl border font-display text-xs tracking-wider"
          style={{
            borderColor: `${accentHex}40`,
            backgroundColor: `${accentHex}12`,
            color: accentHex,
            boxShadow: `0 0 20px ${accentHex}15`,
          }}
        >
          {badge}
        </div>
      </div>

      {/* Shimmer sweep — CSS-only animation */}
      <div className="absolute inset-0 shimmer-sweep opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        {label && (
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.3em]"
            style={{ color: accentHex }}
          >
            {label}
          </p>
        )}
        {caption && (
          <p className="mt-2 text-sm leading-relaxed text-pearl/50">
            {caption}
          </p>
        )}
      </div>

      {/* Border */}
      <div
        className="absolute inset-0 rounded-[inherit] border pointer-events-none"
        style={{ borderColor: `${accentHex}15` }}
      />
    </div>
  )
})
