import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { OpeningSequence } from './components/OpeningSequence'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CareerOdyssey } from './components/CareerOdyssey'
import { Achievements } from './components/Achievements'
import { Statistics } from './components/Statistics'
import { MemorableMoments } from './components/MemorableMoments'
import { LegacyFinale } from './components/LegacyFinale'
import { Footer } from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'

function UnifiedPage() {
  const [showOpening, setShowOpening] = useState(true)
  const location = useLocation()
  
  const sectionIds = [
    'hero',
    'about',
    'journey',
    'achievements',
    'statistics',
    'moments',
    'finale',
  ]
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    if (showOpening) return

    const path = location.pathname
    let targetId = 'hero'
    
    if (path === '/about') targetId = 'about'
    else if (path === '/journey') targetId = 'journey'
    else if (path === '/museum') targetId = 'achievements'
    else if (path === '/stats') targetId = 'statistics'
    else if (path === '/moments') targetId = 'moments'
    
    const el = document.getElementById(targetId)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, showOpening])

  useEffect(() => {
    if (showOpening) return
    
    let path = '/'
    if (activeSection === 'about') path = '/about'
    else if (activeSection === 'journey') path = '/journey'
    else if (activeSection === 'achievements') path = '/museum'
    else if (activeSection === 'statistics') path = '/stats'
    else if (activeSection === 'moments') path = '/moments'
    
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path)
    }
  }, [activeSection, showOpening])

  return (
    <div className="relative text-pearl bg-[#020202] overflow-x-hidden min-h-screen">
      <AnimatePresence>
        {showOpening && (
          <OpeningSequence onComplete={() => setShowOpening(false)} />
        )}
      </AnimatePresence>
      
      <div 
        className={
          showOpening 
            ? 'opacity-0 h-screen overflow-hidden' 
            : 'opacity-100 transition-opacity duration-1000'
        }
      >
        <Header activeSection={activeSection} />
        <main id="main-content">
          <Hero />
          <About />
          <CareerOdyssey />
          <Achievements />
          <Statistics />
          <MemorableMoments />
          <LegacyFinale />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <Routes>
        <Route path="*" element={<UnifiedPage />} />
      </Routes>
    </BrowserRouter>
  )
}
