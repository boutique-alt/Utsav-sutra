import { InstagramIcon } from '../shared/InstagramIcon'
import type { Partner } from '../../data/partners'

interface PartnerCardProps {
  partner: Partner
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex aspect-[16/9] items-center justify-center px-6 py-5"
        style={{ backgroundColor: partner.logoBg }}
        aria-label={`Visit ${partner.name} website`}
      >
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </a>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
          {partner.tagline}
        </p>
        <h3 className="mt-2 font-display text-2xl text-primary">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary-mid"
          >
            {partner.name}
          </a>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {partner.description}
        </p>

        <ul className="mt-5 space-y-2">
          {partner.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-text before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition hover:text-accent-dark"
          >
            Visit Website
          </a>
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-dark transition hover:text-primary"
          >
            <InstagramIcon size={16} />
            {partner.handle}
          </a>
        </div>
      </div>
    </article>
  )
}
