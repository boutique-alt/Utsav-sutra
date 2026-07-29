import { Sparkles } from 'lucide-react'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  reverse?: boolean
}

export function ServiceCard({ service, reverse = false }: ServiceCardProps) {
  return (
    <article
      id={service.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
    >
      <div
        className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="overflow-hidden md:w-1/2">
          {service.image ? (
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="h-full min-h-56 w-[200%] max-w-none object-cover object-left md:min-h-full"
            />
          ) : (
            <div className="flex min-h-56 items-center justify-center bg-primary/5 md:min-h-full">
              <Sparkles className="text-primary" size={40} />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-8">
          <h2 className="font-display text-2xl text-primary md:text-3xl">{service.title}</h2>
          <ul className="mt-5 space-y-2.5 md:space-y-3">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex gap-3 text-sm leading-relaxed text-text before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
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
        </div>
      </div>
    </article>
  )
}
