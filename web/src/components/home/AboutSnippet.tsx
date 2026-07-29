import { useState } from 'react'
import { galleryAlbums, type GalleryAlbum } from '../../data/content'
import {
  brideShowcaseImages,
  decorShowcaseImages,
  groomShowcaseImages,
  type ShowcaseImage,
} from '../../data/aboutShowcase'
import { GalleryLightbox } from '../gallery/GalleryLightbox'
import { ScrollReveal } from '../shared/ScrollReveal'
import { AboutImageSlideColumn } from './AboutImageSlideColumn'
import { AboutShowcaseContent } from './AboutShowcaseContent'

export function AboutSnippet() {
  const [activeAlbum, setActiveAlbum] = useState<GalleryAlbum | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const openImage = (
    image: ShowcaseImage,
    images: ShowcaseImage[],
    index: number,
    title: string,
  ) => {
    if (image.albumId) {
      const album = galleryAlbums.find((item) => item.id === image.albumId)
      if (album) {
        setActiveAlbum(album)
        setActiveIndex(0)
        return
      }
    }

    setActiveAlbum({
      id: `about-${title.toLowerCase().replace(/\s+/g, '-')}`,
      title,
      category: 'garland',
      cover: image.src,
      images: images.map((item) => ({ src: item.src, alt: item.alt })),
    })
    setActiveIndex(index)
  }

  const closeAlbum = () => {
    setActiveAlbum(null)
    setActiveIndex(0)
  }

  return (
    <>
      <section className="section-pad bg-background">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr] xl:gap-14">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <ScrollReveal>
                <AboutImageSlideColumn
                  images={groomShowcaseImages}
                  direction="up"
                  onImageClick={(image, index) =>
                    openImage(image, groomShowcaseImages, index, 'Groom Looks')
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <AboutImageSlideColumn
                  images={decorShowcaseImages}
                  direction="down"
                  onImageClick={(image, index) =>
                    openImage(image, decorShowcaseImages, index, 'Décor')
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <AboutImageSlideColumn
                  images={brideShowcaseImages}
                  direction="up"
                  onImageClick={(image, index) =>
                    openImage(image, brideShowcaseImages, index, 'Bridal Looks')
                  }
                />
              </ScrollReveal>
            </div>

            <AboutShowcaseContent />
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
