import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(sectionIds[0] ?? 'hero')

  useEffect(() => {
    if (!sectionIds.length) return

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [sectionIds])

  return active
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function useSectionNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (path, sectionId) => {
    if (location.pathname === path) {
      scrollToSection(sectionId)
      return
    }

    navigate(path)
    requestAnimationFrame(() => {
      setTimeout(() => scrollToSection(sectionId), 350)
    })
  }

  return { goToSection, pathname: location.pathname }
}
