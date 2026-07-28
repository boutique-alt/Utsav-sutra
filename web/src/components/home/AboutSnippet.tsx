import { siteConfig } from '../../data/site'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { Button } from '../shared/Button'

export function AboutSnippet() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading eyebrow="About Us" title="Utsav Sutra" subtitle={siteConfig.about.intro} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-relaxed text-text-muted md:text-lg">
            <p>{siteConfig.about.body}</p>
            <p>{siteConfig.about.close}</p>
            <Button to="/about" variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
              Know More About Us
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
