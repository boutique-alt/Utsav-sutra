import type { ShowcaseImage } from '../../data/aboutShowcase'
import { cn } from '../../lib/utils'

export const aboutShowcaseSlideGapClass = 'gap-2'

export const aboutShowcaseColumnHeightClass =
  'h-[26rem] sm:h-[30rem] md:h-[34rem] lg:h-[38rem] xl:h-[42rem]'

interface AboutShowcaseTileProps {
  image: ShowcaseImage
  onClick?: () => void
  className?: string
}

export function AboutShowcaseTile({ image, onClick, className }: AboutShowcaseTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'block w-full shrink-0 cursor-pointer overflow-hidden rounded-lg p-0 leading-none transition hover:opacity-90',
        className,
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="eager"
        className="pointer-events-none block h-auto w-full"
      />
    </button>
  )
}
