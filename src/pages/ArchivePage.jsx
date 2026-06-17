import { MemorableMoments } from '../components/MemorableMoments'
import { Gallery } from '../components/Gallery'
import { Footer } from '../components/Footer'
import { PageIntro } from '../components/PageIntro'

export function ArchivePage() {
  return (
    <div id="main-content">
      <PageIntro
        eyebrow="Chapter 03"
        title="The Archive"
        subtitle="Iconic moments and cinematic frames from a legendary career — each image, a chapter retold."
      />
      <MemorableMoments />
      <Gallery />
      <Footer />
    </div>
  )
}
