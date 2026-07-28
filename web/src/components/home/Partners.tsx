import { partners } from '../../data/partners'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { Button } from '../shared/Button'
import { PartnerCard } from './PartnerCard'

export function Partners() {
  return (
    <section className="section-pad bg-background-alt">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            title="Our Brand Partners"
            subtitle="Trusted partners who bring fashion and digital storytelling into every Utsav Sutra celebration."
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.id} delay={i * 0.08}>
              <PartnerCard partner={partner} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.16}>
          <div className="mt-12 text-center">
            <p className="mb-5 text-sm text-text-muted md:text-base">
              Want boutique styling or digital content for your wedding?
            </p>
            <Button to="/book-us" variant="secondary">
              Plan With Our Partners
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
