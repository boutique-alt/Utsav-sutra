import { siteConfig } from '../../data/site'
import { services } from '../../data/services'

const stats = [
  { value: String(services.length), label: 'Services' },
  { value: String(siteConfig.founded), label: 'Founded' },
  { value: 'We Plan.', label: 'You Celebrate.' },
]

export function StatsBar() {
  return (
    <section className="border-y border-accent/20 bg-primary">
      <div className="container-page grid grid-cols-1 gap-6 py-10 sm:grid-cols-3 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-semibold text-accent md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs tracking-wide text-white/70 uppercase md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
