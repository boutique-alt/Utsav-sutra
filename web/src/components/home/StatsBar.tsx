import { siteConfig } from '../../data/site'

const stats = [
  { value: '12+', label: 'Services' },
  { value: String(siteConfig.founded), label: 'Founded' },
  { value: 'We Plan.', label: 'You Celebrate.' },
]

export function StatsBar() {
  return (
    <section className="border-y border-accent/20 bg-primary">
      <div className="container-page py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <p className="font-display text-2xl font-semibold text-accent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-wide text-white/70 uppercase md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
