import { useCallback, useEffect, useRef, useState } from 'react'
import { useMotionValue } from 'framer-motion'
import {
  drawHeroFrame,
  drawHeroFrameBlend,
  getHeroFrameSetKey,
  HERO_BREAKPOINT_PX,
  HERO_FRAME_SETS,
  type HeroFrameSet,
  type HeroFrameSetKey,
} from '../lib/heroFrames'

const FRAME_EPSILON = 0.0003
const WHEEL_STEP = 0.00085
const TOUCH_STEP = 0.0011
const DONE = 0.999

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n))
}

const FRAME_BATCH_SIZE = 8

async function loadFrameSet(
  frameSet: HeroFrameSet,
  onFirstFrame?: (frames: HTMLImageElement[]) => void,
) {
  const frames: HTMLImageElement[] = new Array(frameSet.frameCount)

  const loadOne = (index: number) =>
    new Promise<void>((resolve) => {
      const image = new Image()
      image.decoding = 'async'
      image.fetchPriority = index === 0 ? 'high' : 'low'
      image.src = frameSet.src(index)
      image.onload = () => {
        frames[index] = image
        resolve()
      }
      image.onerror = () => resolve()
    })

  await loadOne(0)
  onFirstFrame?.(frames)

  for (let i = 1; i < frameSet.frameCount; i += FRAME_BATCH_SIZE) {
    const end = Math.min(i + FRAME_BATCH_SIZE, frameSet.frameCount)
    await Promise.all(
      Array.from({ length: end - i }, (_, offset) => loadOne(i + offset)),
    )
  }

  return frames
}

export function useScrollScrubFrames(
  _containerRef: React.RefObject<HTMLElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const framesRef = useRef<HTMLImageElement[]>([])
  const frameCountRef = useRef(0)
  const activeSetRef = useRef<HeroFrameSetKey | null>(null)
  const [isReady, setIsReady] = useState(false)
  const progressRef = useRef(0)
  const lastExactFrame = useRef(-1)
  const touchYRef = useRef<number | null>(null)
  const scrollYProgress = useMotionValue(0)

  const draw = useCallback(
    (progress: number, force = false) => {
      const canvas = canvasRef.current
      const frames = framesRef.current
      const count = frameCountRef.current
      if (!canvas || count === 0) return

      const p = clamp(progress)
      const exact = p * (count - 1)
      if (!force && Math.abs(exact - lastExactFrame.current) < FRAME_EPSILON) return

      const a = Math.min(count - 1, Math.floor(exact))
      const b = Math.min(count - 1, a + 1)
      const blend = exact - a
      const imgA = frames[a]
      const imgB = frames[b]
      if (!imgA?.complete) return

      lastExactFrame.current = exact
      if (blend <= 0.001 || a === b || !imgB?.complete) {
        drawHeroFrame(canvas, imgA)
        return
      }
      drawHeroFrameBlend(canvas, imgA, imgB, blend)
    },
    [canvasRef],
  )

  const setProgress = useCallback(
    (next: number) => {
      const p = clamp(next)
      progressRef.current = p
      scrollYProgress.set(p)
      draw(p)

      if (p < DONE) {
        document.documentElement.classList.add('hero-scrubbing')
        window.scrollTo(0, 0)
      } else {
        document.documentElement.classList.remove('hero-scrubbing')
      }
    },
    [draw, scrollYProgress],
  )

  const loadActiveSet = useCallback(
    async (setKey: HeroFrameSetKey) => {
      const frameSet = HERO_FRAME_SETS[setKey]
      if (activeSetRef.current === setKey && framesRef.current.length > 0) return

      setIsReady(false)
      lastExactFrame.current = -1
      const frames = await loadFrameSet(frameSet, (partialFrames) => {
        framesRef.current = partialFrames
        frameCountRef.current = frameSet.frameCount
        activeSetRef.current = setKey
        setIsReady(true)
        draw(progressRef.current, true)
      })
      framesRef.current = frames
      frameCountRef.current = frameSet.frameCount
      activeSetRef.current = setKey
      setIsReady(true)
      draw(progressRef.current, true)
    },
    [draw],
  )

  useEffect(() => {
    let cancelled = false
    void (async () => {
      if (cancelled) return
      await loadActiveSet(getHeroFrameSetKey())
    })()

    const media = window.matchMedia(`(min-width: ${HERO_BREAKPOINT_PX}px)`)
    const onChange = () => void loadActiveSet(getHeroFrameSetKey())
    media.addEventListener('change', onChange)
    return () => {
      cancelled = true
      media.removeEventListener('change', onChange)
    }
  }, [loadActiveSet])

  useEffect(() => {
    document.documentElement.classList.add('hero-scrubbing')
    window.scrollTo(0, 0)

    const onWheel = (event: WheelEvent) => {
      const p = progressRef.current

      if (event.deltaY > 0) {
        if (p < DONE) {
          event.preventDefault()
          event.stopImmediatePropagation()
          setProgress(p + event.deltaY * WHEEL_STEP)
          return
        }
        return
      }

      if (window.scrollY <= 2 && p > 0) {
        event.preventDefault()
        event.stopImmediatePropagation()
        setProgress(p + event.deltaY * WHEEL_STEP)
      }
    }

    const onTouchStart = (event: TouchEvent) => {
      touchYRef.current = event.touches[0]?.clientY ?? null
    }

    const onTouchMove = (event: TouchEvent) => {
      if (touchYRef.current === null) return
      const y = event.touches[0]?.clientY
      if (y === undefined) return
      const delta = touchYRef.current - y
      touchYRef.current = y
      const p = progressRef.current

      if (delta > 0 && p < DONE) {
        event.preventDefault()
        setProgress(p + delta * TOUCH_STEP)
        return
      }

      if (delta < 0 && window.scrollY <= 2 && p > 0) {
        event.preventDefault()
        setProgress(p + delta * TOUCH_STEP)
      }
    }

    const onScroll = () => {
      if (progressRef.current < DONE && window.scrollY > 0) {
        window.scrollTo(0, 0)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      const p = progressRef.current
      if (['ArrowDown', 'PageDown', ' '].includes(event.key) && p < DONE) {
        event.preventDefault()
        setProgress(p + (event.key === 'PageDown' ? 0.1 : 0.04))
      }
      if (['ArrowUp', 'PageUp'].includes(event.key) && window.scrollY <= 2 && p > 0) {
        event.preventDefault()
        setProgress(p - (event.key === 'PageUp' ? 0.1 : 0.04))
      }
    }

    const onResize = () => draw(progressRef.current, true)

    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true, capture: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false, capture: true })
    window.addEventListener('scroll', onScroll, { passive: false })
    window.addEventListener('keydown', onKeyDown, { capture: true })
    window.addEventListener('resize', onResize)

    return () => {
      document.documentElement.classList.remove('hero-scrubbing')
      window.removeEventListener('wheel', onWheel, true)
      window.removeEventListener('touchstart', onTouchStart, true)
      window.removeEventListener('touchmove', onTouchMove, true)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('resize', onResize)
    }
  }, [draw, setProgress])

  return { scrollYProgress, isReady, progressRef }
}
