import { Hero } from '../components/Hero'
import { ChapterGateway } from '../components/ChapterGateway'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <div id="main-content">
      <Hero />
      <ChapterGateway />
      <Footer />
    </div>
  )
}
