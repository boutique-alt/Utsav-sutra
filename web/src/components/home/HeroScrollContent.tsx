import { siteConfig } from '../../data/site'
import { Button } from '../shared/Button'

export function HeroScrollContent() {
  return (
    <div className="absolute inset-0 grid lg:grid-cols-2">
      <div className="flex w-full items-center px-6 py-10 pt-24 max-md:items-end max-md:px-5 max-md:pb-24 max-md:pt-8 sm:px-10 sm:pt-28 md:py-16 md:pt-32 lg:px-14 xl:px-20">
        <div className="w-full max-w-none [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent-light uppercase max-md:mb-2 max-md:text-[10px]">
            Welcome to Utsav Sutra
          </p>
          <h1 className="font-display text-3xl leading-tight font-semibold text-accent max-md:text-[1.65rem] max-md:leading-snug sm:text-4xl md:text-5xl xl:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 w-full text-sm leading-relaxed text-white max-md:mt-3 max-md:line-clamp-3 max-md:text-xs sm:mt-5 sm:text-base md:text-lg lg:max-w-xl">
            {siteConfig.about.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 max-md:mt-5 max-md:flex-col max-md:gap-2.5 sm:mt-8">
            <Button to="/book-us" size="lg" className="max-md:w-full">
              Book Free Consultation
            </Button>
            <Button
              href="#services"
              variant="outline"
              size="lg"
              className="border-white/70 text-white hover:bg-white hover:text-primary max-md:w-full"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
