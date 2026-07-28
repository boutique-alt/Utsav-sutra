import { HeroScrollVideo } from '../components/home/HeroScrollVideo'
import { StatsBar } from '../components/home/StatsBar'
import { AboutSnippet } from '../components/home/AboutSnippet'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { GalleryPreview } from '../components/home/GalleryPreview'
import { Partners } from '../components/home/Partners'
import { QuoteForm } from '../components/home/QuoteForm'

export function Home() {
  return (
    <>
      <HeroScrollVideo />
      <StatsBar />
      <AboutSnippet />
      <ServicesPreview />
      <GalleryPreview />
      <Partners />
      <QuoteForm />
    </>
  )
}
