import { Sparkles } from 'lucide-react'
import { services } from '../data/services'
import { Button } from '../components/shared/Button'
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
              <article
                id={service.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
              >
                {service.image ? (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="block w-full"
                    />
                    <div className="border-t border-border px-6 py-4 text-center md:px-8">
                      <Button
                        to={`/book-us?service=${encodeURIComponent(service.title)}`}
                        size="sm"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles size={24} />
                    </div>
                    <h2 className="font-display text-2xl text-primary">{service.title}</h2>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-xl bg-background-alt px-4 py-2.5 text-sm text-text"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    {service.partnerNote && service.partnerHandle && service.partnerUrl ? (
                      <p className="mt-4 text-sm text-text-muted">
                        {service.partnerNote}{' '}
                        <a
                          href={service.partnerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-accent-dark hover:underline"
                        >
                          {service.partnerHandle}
                        </a>
                      </p>
                    ) : null}
                    <Button
                      to={`/book-us?service=${encodeURIComponent(service.title)}`}
                      className="mt-6"
                      size="sm"
                    >
                      Get Quote
                    </Button>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
