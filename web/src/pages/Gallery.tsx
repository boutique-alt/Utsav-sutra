import { useMemo, useState } from 'react'
import { galleryAlbums, galleryCategories, type GalleryAlbum, type GalleryCategory } from '../data/content'
import { siteConfig } from '../data/site'
import { Button } from '../components/shared/Button'
import { GalleryCard } from '../components/gallery/GalleryCard'
import { GalleryLightbox } from '../components/gallery/GalleryLightbox'
import { cn } from '../lib/utils'

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('all')
  const [activeAlbum, setActiveAlbum] = useState<GalleryAlbum | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const albums = useMemo(
    () =>
      filter === 'all' ? galleryAlbums : galleryAlbums.filter((album) => album.category === filter),
    [filter],
  )

  const openAlbum = (album: GalleryAlbum) => {
    setActiveAlbum(album)
    setActiveIndex(0)
  }

  const closeAlbum = () => {
    setActiveAlbum(null)
    setActiveIndex(0)
  }

  return (
    <>
      <section className="bg-brand-gradient py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl text-accent md:text-5xl">Our Work</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">{siteConfig.workTagline}</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition',
                  filter === cat.id
                    ? 'bg-primary text-white'
                    : 'border border-border bg-surface text-primary hover:border-accent',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {albums.map((album) => (
              <GalleryCard key={album.id} album={album} onClick={() => openAlbum(album)} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/book-us">Plan Your Dream Wedding</Button>
          </div>
        </div>
      </section>

      <GalleryLightbox
        album={activeAlbum}
        activeIndex={activeIndex}
        onClose={closeAlbum}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
