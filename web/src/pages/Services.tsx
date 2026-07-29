import { services } from '../data/services'
import { ServiceOverlayCard } from '../components/services/ServiceOverlayCard'
import { ScrollReveal } from '../components/shared/ScrollReveal'

export function Services() {
  return (
    <>
      <section className="bg-brand-gradient py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl text-accent md:text-5xl">Our Services</h1>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-page space-y-10">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.03}>
              <ServiceOverlayCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
