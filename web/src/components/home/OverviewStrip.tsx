import { overviewServices } from '../../data/services'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'

export function OverviewStrip() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading title="Our Offerings" />
        </ScrollReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {overviewServices.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/15 bg-surface px-4 py-2 text-sm text-primary shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
