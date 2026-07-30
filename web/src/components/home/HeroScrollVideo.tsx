import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValueEvent, useTransform } from 'framer-motion'
import { useScrollScrubFrames } from '../../hooks/useScrollScrubFrames'
import { Hero } from './Hero'
import { HeroScrollCanvas } from './HeroScrollCanvas'
import { HeroScrollContent } from './HeroScrollContent'
import { HeroScrollHint } from './HeroScrollHint'

export function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [videoDone, setVideoDone] = useState(false)
  const { scrollYProgress, isReady } = useScrollScrubFrames(containerRef, canvasRef)

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.95], [1, 0])
  const [showHint, setShowHint] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setVideoDone(value >= 0.999)
  })

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(media.matches)
    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    return hintOpacity.on('change', (value) => setShowHint(value > 0.05))
  }, [hintOpacity])

  if (prefersReducedMotion) {
    return <Hero />
  }

  return (
    <>
      <section
        ref={containerRef}
        className={
          videoDone
            ? 'relative -mt-16 h-dvh w-full sm:-mt-20'
            : 'fixed inset-x-0 top-16 bottom-0 z-40 w-full sm:top-20'
        }
      >
        <div className="relative h-full w-full overflow-hidden">
          {!isReady && (
            <img
              src="/images/hero-bg.png"
              alt=""
              aria-hidden
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}

          <HeroScrollCanvas ref={canvasRef} />

          <div
            className="absolute inset-0 bg-gradient-to-r from-primary-dark/75 via-primary-dark/35 to-transparent max-md:opacity-45"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-primary-dark/20 max-md:from-primary-dark/90 max-md:via-primary-dark/35 max-md:to-primary-dark/30"
            aria-hidden
          />

          <motion.div className="absolute inset-0" style={{ opacity: contentOpacity }}>
            <HeroScrollContent />
          </motion.div>
          <HeroScrollHint visible={showHint && !videoDone} />
        </div>
      </section>

      {!videoDone && <div className="h-dvh w-full" aria-hidden />}
    </>
  )
}
