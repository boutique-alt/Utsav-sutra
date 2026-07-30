import { siteConfig } from '../../data/site'
import { Button } from '../shared/Button'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="block h-auto w-full max-w-none"
      />

      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="flex w-full items-center px-6 py-10 sm:px-10 md:py-16 lg:px-14 xl:px-20">
          <div className="w-full max-w-none [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent-light uppercase">
              Welcome to Utsav Sutra
            </p>
            <h1 className="font-display text-3xl leading-tight font-semibold text-accent sm:text-4xl md:text-5xl xl:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-4 w-full text-sm leading-relaxed text-white sm:mt-5 sm:text-base md:text-lg lg:max-w-xl">
              {siteConfig.about.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Button to="/book-us" size="lg">
                Book Free Consultation
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="border-white/70 text-white hover:bg-white hover:text-primary"
              >
                Explore Offerings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
