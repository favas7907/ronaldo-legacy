import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PAGE_ROUTES } from '../data/content'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-void px-5 py-20 md:px-10">
      <div className="pointer-events-none absolute inset-0 spotlight-bottom opacity-50" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-rule absolute inset-x-0 top-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-4xl tracking-wide text-pearl md:text-5xl">
              Cristiano <span className="text-gradient-gold">Ronaldo</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Built to honor one of football&apos;s greatest icons.
            </p>
          </motion.div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {PAGE_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-[10px] uppercase tracking-[0.22em] text-muted transition hover:text-gold"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/[0.04] pt-10 sm:flex-row sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted/50">
            Football Legacy Portfolio · {new Date().getFullYear()}
          </p>

          <motion.button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 rounded-full border border-gold/30 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold transition hover:border-gold/60 hover:shadow-[0_0_24px_rgba(201,169,98,0.15)]"
          >
            Back to Top
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition group-hover:-translate-y-0.5"
            >
              <path d="M7 11V3M7 3L3 7M7 3l4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-12 flex justify-center"
          aria-hidden="true"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>
      </div>
    </footer>
  )
}
