import { siteConfig } from '../data/site'
import { Button } from '../components/shared/Button'

export function About() {
  return (
    <>
      <section className="bg-brand-gradient py-16 md:py-20">
        <div className="container-page text-center">
          <img
            src="/images/logo.png"
            alt="Utsav Sutra Event"
            className="mx-auto mb-6 h-28 w-28 rounded-full object-cover ring-2 ring-accent/50"
          />
          <h1 className="font-display text-4xl text-accent md:text-5xl">About Us</h1>
          <p className="mt-3 text-accent-light">{siteConfig.tagline}</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-page mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-text-muted md:text-lg">
          <p className="text-center text-xl text-primary md:text-2xl">{siteConfig.about.intro}</p>
          <p>{siteConfig.about.body}</p>
          <p>{siteConfig.about.close}</p>
          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <p className="font-display text-lg text-primary">Founded {siteConfig.founded}</p>
            <p className="mt-2 text-sm">
              Making beautiful, well-planned weddings accessible at every budget.
            </p>
          </div>
          <div className="pt-4 text-center">
            <Button to="/book-us">Book Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  )
}
