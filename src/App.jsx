import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { OpeningSequence } from './components/OpeningSequence'
import { Hero } from './components/Hero'
import { AgeEvolutionTimeline } from './components/AgeEvolutionTimeline'
import { CareerJourney } from './components/CareerJourney'
import { Achievements } from './components/Achievements'
import { Statistics } from './components/Statistics'
import { MemorableMoments } from './components/MemorableMoments'
import { Gallery } from './components/Gallery'
import { LegacyFinale } from './components/LegacyFinale'
import { Footer } from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'

function UnifiedPage() {
  const [showOpening, setShowOpening] = useState(true)
  const location = useLocation()
  
  // All section IDs to track for scrolling and nav highlighting
  const sectionIds = [
    'hero',
    'timeline',
    'journey',
    'achievements',
    'statistics',
    'moments',
    'gallery',
    'finale',
  ]
  const activeSection = useActiveSection(sectionIds)

  // Scroll to section based on route path on mount or path change
  useEffect(() => {
    // If opening sequence is still playing, we wait
    if (showOpening) return

    const path = location.pathname
    let targetId = 'hero'
    
    if (path === '/timeline') targetId = 'timeline'
    else if (path === '/journey') targetId = 'journey'
    else if (path === '/museum') targetId = 'achievements'
    else if (path === '/stats') targetId = 'statistics'
    else if (path === '/moments') targetId = 'moments'
    
    const el = document.getElementById(targetId)
    if (el) {
      // Small timeout to allow transition stability
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, showOpening])

  // Synchronize URL path with active section on scroll
  useEffect(() => {
    if (showOpening) return
    
    let path = '/'
    if (activeSection === 'timeline') path = '/timeline'
    else if (activeSection === 'journey') path = '/journey'
    else if (activeSection === 'achievements') path = '/museum'
    else if (activeSection === 'statistics') path = '/stats'
    else if (activeSection === 'moments') path = '/moments'
    else if (activeSection === 'gallery') path = '/moments'
    
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path)
    }
  }, [activeSection, showOpening])

  return (
    <div className="relative text-pearl bg-[#030303] overflow-x-hidden min-h-screen">
      {showOpening && (
        <OpeningSequence onComplete={() => setShowOpening(false)} />
      )}
      
      {/* Hide content visually during opening sequence to prevent visual shifts */}
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
          <AgeEvolutionTimeline />
          <CareerJourney />
          <Achievements />
          <Statistics />
          <MemorableMoments />
          <Gallery />
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
