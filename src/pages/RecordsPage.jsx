import { Achievements } from '../components/Achievements'
import { Statistics } from '../components/Statistics'
import { Footer } from '../components/Footer'
import { PageIntro } from '../components/PageIntro'

export function RecordsPage() {
  return (
    <div id="main-content">
      <PageIntro
        eyebrow="Chapter 02"
        title="The Records"
        subtitle="Trophy room prestige and numbers that define an era — verified greatness, etched in history."
      />
      <Achievements />
      <Statistics />
      <Footer />
    </div>
  )
}
