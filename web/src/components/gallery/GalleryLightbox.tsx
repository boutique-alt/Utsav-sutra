import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryAlbum } from '../../data/content'
import { cn } from '../../lib/utils'

interface GalleryLightboxProps {
  album: GalleryAlbum | null
  activeIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({
  album,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const images = album?.images ?? []
  const hasMultiple = images.length > 1
  const activeImage = images[activeIndex]

  useEffect(() => {
    if (!album) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasMultiple) {
        onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
      }
      if (event.key === 'ArrowRight' && hasMultiple) {
        onNavigate(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [album, activeIndex, hasMultiple, images.length, onClose, onNavigate])

  return (
    <AnimatePresence>
      {album && activeImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={album.title}
        >
          <button
            type="button"
            className="absolute inset-0 bg-primary-dark/85 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close gallery"
          />

          <motion.div
            className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border bg-header px-4 py-3 md:px-6">
              <div>
                <h2 className="font-display text-lg text-primary md:text-xl">{album.title}</h2>
                {hasMultiple && (
                  <p className="text-sm text-text-muted">
                    {activeIndex + 1} of {images.length}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-primary transition hover:bg-primary/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-[50vh] items-center justify-center bg-background-alt p-4 md:min-h-[60vh] md:p-8">
              <img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[65vh] w-full object-contain"
              />

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
                    }
                    className="absolute left-3 rounded-full bg-surface/95 p-2 text-primary shadow-md transition hover:bg-accent hover:text-primary-dark md:left-6"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigate(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
                    }
                    className="absolute right-3 rounded-full bg-surface/95 p-2 text-primary shadow-md transition hover:bg-accent hover:text-primary-dark md:right-6"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {hasMultiple && (
              <div className="flex gap-2 overflow-x-auto border-t border-border bg-surface p-4">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => onNavigate(index)}
                    className={cn(
                      'h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition md:h-20 md:w-20',
                      index === activeIndex
                        ? 'border-accent ring-2 ring-accent/30'
                        : 'border-border opacity-70 hover:opacity-100',
                    )}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
