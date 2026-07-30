import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { Button } from '../shared/Button'

export function ServicesPreview() {
  return (
    <section id="services" className="section-pad bg-background-alt">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading eyebrow="Utsav Sutra" title="Our Offerings" />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.03}>
              <Link
                to={`/services#${service.id}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                  <div
                    className={`absolute inset-y-0 flex w-[52%] flex-col justify-center bg-white/98 px-3 py-3 ${
                      service.overlayReverse ? 'left-0' : 'right-0'
                    }`}
                  >
                    <h3 className="font-display text-sm uppercase tracking-wide text-primary sm:text-base">
                      {service.title}
                    </h3>
                    <ul className="mt-1.5 space-y-1">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex gap-2 text-[10px] leading-snug text-primary before:mt-1 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent before:content-[''] sm:text-[11px]"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/services" variant="secondary">
            View All Offerings
          </Button>
        </div>
      </div>
    </section>
  )
}
