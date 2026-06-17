import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PAGE_ROUTES, NAV_LINKS } from '../data/content'
import { useSectionNavigation } from '../hooks/useActiveSection'
import { AmbientLayer, ScrollProgressBar, usePageScrollProgress } from './ui/AmbientLayer'

export function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { goToSection, pathname } = useSectionNavigation()
  const location = useLocation()
  const scrollProgress = usePageScrollProgress()

  const pageSections = NAV_LINKS.filter((link) => link.path === pathname)
  const showSectionNav = pageSections.length > 0

  const handleSectionNav = (link) => {
    goToSection(link.path, link.id)
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative border-b border-white/[0.06] bg-void/70 backdrop-blur-2xl">
        <AmbientLayer grain={false} gradient={false} />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link
            to="/"
            aria-label="Cristiano Ronaldo — Home"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-gold/30 bg-gold/10 font-display text-lg tracking-wider text-gold"
            >
              <span className="absolute inset-0 bg-gold/10 opacity-0 transition group-hover:opacity-100" />
              CR7
            </motion.span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.35em] text-muted sm:block">
              Legacy
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-charcoal/50 px-1.5 py-1 backdrop-blur-xl lg:flex"
          >
            {PAGE_ROUTES.map((route) => {
              const isActive = location.pathname === route.path
              return (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`relative rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                    isActive ? 'text-gold' : 'text-muted hover:text-pearl'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="page-nav-indicator"
                      className="absolute inset-0 rounded-full border border-gold/25 bg-gold/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{route.label}</span>
                </Link>
              )
            })}
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-charcoal/60 backdrop-blur-xl lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-pearl"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full bg-pearl"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-pearl"
              />
            </div>
          </button>
        </div>

        {showSectionNav && (
          <div className="relative hidden border-t border-white/[0.04] lg:block">
            <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-10 py-2">
              {pageSections.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => goToSection(link.path, link.id)}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] transition ${
                      isActive
                        ? 'bg-gold/10 text-gold'
                        : 'text-muted hover:text-pearl'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <ScrollProgressBar progress={scrollProgress} />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-charcoal/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="px-5 py-4">
              <li className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted">Pages</li>
              {PAGE_ROUTES.map((route, i) => (
                <motion.li
                  key={route.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={route.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-white/5 py-4 text-sm font-medium uppercase tracking-[0.18em] ${
                      location.pathname === route.path ? 'text-gold' : 'text-pearl/70'
                    }`}
                  >
                    {route.label}
                  </Link>
                </motion.li>
              ))}
              {showSectionNav && (
                <>
                  <li className="mb-2 mt-6 text-[10px] uppercase tracking-[0.3em] text-muted">
                    Sections
                  </li>
                  {pageSections.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.04 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSectionNav(link)}
                        className={`block w-full border-b border-white/5 py-3 text-left text-xs uppercase tracking-[0.16em] ${
                          activeSection === link.id ? 'text-gold' : 'text-pearl/60'
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
