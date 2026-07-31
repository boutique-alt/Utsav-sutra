import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '../../data/services'
import { galleryAlbums } from '../../data/content'
import { ScrollReveal } from '../shared/ScrollReveal'
import { PopularSearchCard } from './PopularSearchCard'
import { cn } from '../../lib/utils'

const POPULAR_SERVICE_IDS = [
  'wedding-essentials',
  'catering-hospitality',
  'groom-sherwani',
  'mehendi-haldi-sangeet',
  'wedding-decor',
  'bridal-couture',
  'bridal-beauty',
  'photography-films',
  'wedding-rituals',
  'wedding-tray',
  'bridal-car',
  'groom-bandhgala',
  'groom-haldi-look',
] as const

const POPULAR_SEARCH_IMAGES: Partial<Record<(typeof POPULAR_SERVICE_IDS)[number], string>> = {
  'wedding-essentials': '/images/gallery/wedding-essentials-1.png',
  'bridal-car': '/images/gallery/car-decoration-1.png',
  'wedding-decor': '/images/gallery/wedding-decor-1.png',
  'photography-films': '/images/gallery/photography-films-1.png',
  'wedding-tray': '/images/gallery/wedding-tray-2.png',
  'catering-hospitality': '/images/gallery/catering-1.png',
  'groom-sherwani': '/images/gallery/groom-sherwani.png',
  'groom-bandhgala': '/images/gallery/groom-bandhgala.png',
  'groom-haldi-look': '/images/gallery/haldi-ceremony.png',
  'mehendi-haldi-sangeet': '/images/gallery/mehendi-decor.png',
  'bridal-couture': '/images/about/bride/4.png',
  'wedding-rituals': '/images/about/bride/3.png',
}

const galleryCovers = {
  groom: galleryAlbums.find((a) => a.category === 'groom')?.cover,
  garland: galleryAlbums.find((a) => a.category === 'garland')?.cover,
  decor: galleryAlbums.find((a) => a.category === 'decor')?.cover,
} as const

function getImageFocus(service: (typeof services)[number]): 'left' | 'right' | 'center' {
  if (POPULAR_SEARCH_IMAGES[service.id as (typeof POPULAR_SERVICE_IDS)[number]]) {
    return 'center'
  }
  if (service.layout !== 'overlay') return 'center'
  return service.overlayReverse ? 'right' : 'left'
}

const popularServices = POPULAR_SERVICE_IDS.map((id) => {
  const service = services.find((s) => s.id === id)
  if (!service?.image) return null
  return {
    id: service.id,
    title: service.title,
    image: POPULAR_SEARCH_IMAGES[id] ?? service.image,
    imageFocus: getImageFocus(service),
  }
}).filter((s): s is NonNullable<typeof s> => Boolean(s))

export function PopularSearches() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateScrollState()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = Math.max(el.clientWidth * 0.7, 280)
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <ScrollReveal>
          <h2 className="font-display text-2xl text-primary md:text-3xl">Popular Searches</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="relative mt-8 md:mt-10">
            {canScrollLeft ? (
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Scroll popular searches left"
                className="absolute left-0 top-[calc(50%-1.25rem)] z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-surface p-2.5 text-primary shadow-md transition hover:border-accent hover:text-accent-dark md:flex"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            ) : null}

            {canScrollRight ? (
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Scroll popular searches right"
                className="absolute right-0 top-[calc(50%-1.25rem)] z-10 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-surface p-2.5 text-primary shadow-md transition hover:border-accent hover:text-accent-dark md:flex"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            ) : null}

            <div
              ref={scrollRef}
              className={cn(
                'scrollbar-hide flex gap-4 overflow-x-auto pb-2 sm:gap-5',
                'snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
              )}
            >
              {popularServices.map((service) => (
                <div key={service.id} className="snap-start">
                  <PopularSearchCard
                    to={`/services#${service.id}`}
                    image={service.image}
                    title={service.title}
                    imageFocus={service.imageFocus}
                  />
                </div>
              ))}

              {galleryCovers.groom ? (
                <div className="snap-start">
                  <PopularSearchCard
                    to="/gallery?category=groom"
                    image={galleryCovers.groom}
                    title="Groom Looks"
                  />
                </div>
              ) : null}

              {galleryCovers.decor ? (
                <div className="snap-start">
                  <PopularSearchCard
                    to="/gallery?category=decor"
                    image={galleryCovers.decor}
                    title="Wedding Décor"
                  />
                </div>
              ) : null}

              {galleryCovers.garland ? (
                <div className="snap-start">
                  <PopularSearchCard
                    to="/gallery?category=garland"
                    image={galleryCovers.garland}
                    title="Garland & Rituals"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
