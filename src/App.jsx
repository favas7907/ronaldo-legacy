import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { PageTransition } from './components/ui/PageTransition'
import { useActiveSection } from './hooks/useActiveSection'
import { HomePage } from './pages/HomePage'
import { LegacyPage } from './pages/LegacyPage'
import { RecordsPage } from './pages/RecordsPage'
import { ArchivePage } from './pages/ArchivePage'

const SECTION_MAP = {
  '/': ['hero', 'chapters'],
  '/legacy': ['about', 'journey'],
  '/records': ['achievements', 'statistics'],
  '/archive': ['moments', 'gallery'],
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const sectionIds = SECTION_MAP[location.pathname] ?? []
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/legacy"
              element={
                <PageTransition>
                  <LegacyPage />
                </PageTransition>
              }
            />
            <Route
              path="/records"
              element={
                <PageTransition>
                  <RecordsPage />
                </PageTransition>
              }
            />
            <Route
              path="/archive"
              element={
                <PageTransition>
                  <ArchivePage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
