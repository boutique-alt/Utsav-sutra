import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

interface PopularSearchCardProps {
  to: string
  image: string
  title: string
  imageFocus?: 'left' | 'right' | 'center'
}

export function PopularSearchCard({
  to,
  image,
  title,
  imageFocus = 'center',
}: PopularSearchCardProps) {
  const isBannerCrop = imageFocus !== 'center'

  return (
    <Link to={to} className="group block w-[140px] shrink-0 sm:w-[160px] md:w-[180px]">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition group-hover:border-accent group-hover:shadow-md">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={cn(
            'transition duration-300 group-hover:scale-105',
            isBannerCrop
              ? 'absolute top-0 h-full w-[200%] max-w-none object-cover'
              : 'h-full w-full object-cover',
          )}
          style={isBannerCrop ? { left: imageFocus === 'right' ? '-100%' : '0' } : undefined}
        />
      </div>
      <p className="mt-2.5 text-sm leading-snug text-primary transition group-hover:text-accent-dark">
        {title}
      </p>
    </Link>
  )
}
