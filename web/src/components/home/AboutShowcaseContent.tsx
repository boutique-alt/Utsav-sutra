import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { Button } from '../shared/Button'
import { ScrollReveal } from '../shared/ScrollReveal'

export function AboutShowcaseContent() {
  return (
    <ScrollReveal delay={0.12}>
      <div className="flex flex-col justify-center px-2 py-8 md:px-4 lg:px-8 lg:py-0">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-dark">
          About Us
        </p>

        <h2 className="font-display text-4xl uppercase leading-[1.05] text-primary md:text-5xl lg:text-[3.25rem]">
          {siteConfig.name}
        </h2>

        <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted md:text-lg">
          {siteConfig.about.intro}
        </p>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
          {siteConfig.tagline}
        </p>

        <Button
          to="/about"
          variant="outline"
          className="mt-8 w-fit gap-2 border-primary px-8 uppercase tracking-[0.15em] text-primary hover:bg-primary hover:text-white"
        >
          Explore
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </ScrollReveal>
  )
}
