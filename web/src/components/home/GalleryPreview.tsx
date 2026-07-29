import { Link } from 'react-router-dom'
import { galleryItems } from '../../data/content'
import { siteConfig } from '../../data/site'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { Button } from '../shared/Button'

export function GalleryPreview() {
  const preview = galleryItems.filter((item) => item.category === 'decor')

  return (
    <section className="section-pad bg-background-alt">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading title="Our Work" subtitle={siteConfig.workTagline} />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {preview.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.04}>
              <Link
                to="/gallery"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-background shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/gallery">View Gallery</Button>
          <Button
            to="/book-us"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
