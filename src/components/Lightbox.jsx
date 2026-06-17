import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.button
            type="button"
            aria-label="Close lightbox"
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pearl transition hover:border-gold/50 hover:text-gold"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.button>

          <motion.figure
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl cinematic-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[85vh] w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void/90 to-transparent px-6 py-5">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">{image.mood}</p>
              <p className="mt-1 text-sm text-pearl/80">{image.alt}</p>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
