import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { services } from '../../data/services'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { Button } from '../shared/Button'

export function ServicesPreview() {
  return (
    <section id="services" className="section-pad bg-background-alt">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading eyebrow="Utsav Sutra" title="Our Services" />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.03}>
              <Link
                to={`/services#${service.id}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="block w-full transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-primary/5 p-6">
                    <Sparkles className="text-primary" size={28} />
                    <h3 className="font-display text-center text-lg text-primary">
                      {service.title}
                    </h3>
                    <ul className="space-y-1 text-center">
                      {service.features.slice(0, 3).map((f) => (
                        <li key={f} className="text-xs text-text-muted">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
