import { useState } from 'react'
import type { ShowcaseImage } from '../../data/aboutShowcase'
import {
  AboutShowcaseTile,
  aboutShowcaseColumnHeightClass,
  aboutShowcaseSlideGapClass,
} from './AboutShowcaseTile'
import { cn } from '../../lib/utils'

interface AboutImageSlideColumnProps {
  images: ShowcaseImage[]
  direction?: 'up' | 'down'
  onImageClick?: (image: ShowcaseImage, index: number) => void
  className?: string
}

export function AboutImageSlideColumn({
  images,
  direction = 'up',
  onImageClick,
  className,
}: AboutImageSlideColumnProps) {
  const [paused, setPaused] = useState(false)
  const loopImages = [...images, ...images]

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-background',
        aboutShowcaseColumnHeightClass,
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={cn(
          'flex flex-col',
          aboutShowcaseSlideGapClass,
          direction === 'up' ? 'about-slide-up' : 'about-slide-down',
          paused && 'about-slide-paused',
        )}
      >
        {loopImages.map((image, index) => {
          const sourceIndex = index % images.length

          return (
            <AboutShowcaseTile
              key={`${image.src}-${index}`}
              image={image}
              onClick={() => onImageClick?.(images[sourceIndex], sourceIndex)}
            />
          )
        })}
      </div>
    </div>
  )
}
