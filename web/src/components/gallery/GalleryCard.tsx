import { Images } from 'lucide-react'
import type { GalleryAlbum } from '../../data/content'
import { cn } from '../../lib/utils'

interface GalleryCardProps {
  album: GalleryAlbum
  onClick: () => void
  className?: string
}

export function GalleryCard({ album, onClick, className }: GalleryCardProps) {
  const imageCount = album.images.length

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        className,
      )}
    >
      <img
        src={album.cover}
        alt={album.title}
        loading="lazy"
        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
      />

      {imageCount > 1 && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-white">
          <Images className="h-3.5 w-3.5" aria-hidden />
          {imageCount}
        </span>
      )}
    </button>
  )
}
