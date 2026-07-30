import { useEffect, useState } from 'react'
import type { Service } from '../../data/services'

interface ServiceOverlayCardProps {
  service: Service
}

export function ServiceOverlayCard({ service }: ServiceOverlayCardProps) {
  const imgs = service.images ?? (service.image ? [service.image] : [])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (imgs.length <= 1) return
    const t = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 3000)
    return () => clearInterval(t)
  }, [imgs.length])

  return (
    <article
      id={service.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
    >
      <div className="relative">
        {imgs.length > 0 ? (
          <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
            {imgs.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                aria-hidden
                className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        ) : null}

        <div
          className={`absolute inset-y-0 flex w-[52%] flex-col justify-center bg-white/98 px-3 py-3 sm:px-4 md:w-[48%] md:px-8 md:py-6 lg:px-10 ${
            service.overlayReverse ? 'left-0' : 'right-0'
          }`}
        >
          <h2 className="font-display text-lg uppercase tracking-wide text-primary sm:text-xl md:border-b md:border-border md:pb-3 md:text-2xl lg:text-[1.75rem]">
            {service.title}
          </h2>
          <ul className="mt-3 space-y-2 sm:mt-4 md:mt-5 md:space-y-2.5">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex gap-2.5 text-[11px] leading-relaxed text-primary sm:text-xs md:gap-3 md:text-sm before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-[''] md:before:mt-2"
              >
                {f}
              </li>
            ))}
          </ul>
          {service.partnerNote && service.partnerHandle && service.partnerUrl ? (
            <p className="mt-4 text-sm text-text-muted md:mt-5">
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
