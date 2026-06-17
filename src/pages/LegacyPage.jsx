import { About } from '../components/About'
import { CareerJourney } from '../components/CareerJourney'
import { Footer } from '../components/Footer'
import { PageIntro } from '../components/PageIntro'

export function LegacyPage() {
  return (
    <div id="main-content">
      <PageIntro
        eyebrow="Chapter 01"
        title="The Legacy"
        subtitle="Identity, discipline, and the eras that forged one of football's greatest careers."
      />
      <About />
      <CareerJourney />
      <Footer />
    </div>
  )
}
