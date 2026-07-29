import type { ShowcaseImage } from '../../data/aboutShowcase'
import { cn } from '../../lib/utils'

interface AboutGeneralColumnProps {
  images: ShowcaseImage[]
  onImageClick?: (image: ShowcaseImage, index: number) => void
  className?: string
}

export function AboutGeneralColumn({
  images,
  onImageClick,
  className,
}: AboutGeneralColumnProps) {
  return (
    <div
      className={cn(
        'flex h-[420px] flex-col gap-3 sm:h-[480px] md:h-[560px]',
        className,
      )}
    >
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => onImageClick?.(image, index)}
          className="min-h-0 flex-1 cursor-pointer overflow-hidden rounded-2xl bg-background transition hover:opacity-90"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="pointer-events-none h-full w-full object-contain"
          />
        </button>
      ))}
    </div>
  )
}
