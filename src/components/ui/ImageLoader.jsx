import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Premium image loader with skeleton shimmer, fade-in on load,
 * and fallback to PremiumPlaceholder on error.
 */
export function ImageLoader({
  src,
  alt,
  className = '',
  aspectRatio = '4/5',
  priority = false,
  objectPosition = 'center',
  overlay = true,
  children,
}) {
  const [status, setStatus] = useState(src ? 'loading' : 'error')
  const imgRef = useRef(null)

  useEffect(() => {
    if (!src) {
      setStatus('error')
      return
    }
    setStatus('loading')
  }, [src])

  const handleLoad = () => setStatus('loaded')
  const handleError = () => setStatus('error')

  return (
    <div
      className={`relative overflow-hidden bg-charcoal ${className}`}
      style={{ aspectRatio }}
    >
      {/* Skeleton shimmer */}
      {status === 'loading' && (
        <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true" />
      )}

      {/* Actual image */}
      {src && status !== 'error' && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: status === 'loaded' ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      )}

      {/* Gradient overlays */}
      {overlay && status === 'loaded' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/40 via-transparent to-void/20" />
        </>
      )}

      {/* Children overlay content */}
      {children}
    </div>
  )
}
