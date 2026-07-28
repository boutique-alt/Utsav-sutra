export const HERO_BREAKPOINT_PX = 1024

export type HeroFrameSetKey = 'mobile' | 'desktop'

export type HeroFrameSet = {
  key: HeroFrameSetKey
  frameCount: number
  src: (index: number) => string
}

export const HERO_FRAME_SETS: Record<HeroFrameSetKey, HeroFrameSet> = {
  mobile: {
    key: 'mobile',
    frameCount: 144,
    src: (index) =>
      `/videos/hero-frames-mobile/frame_${String(index + 1).padStart(4, '0')}.jpg`,
  },
  desktop: {
    key: 'desktop',
    frameCount: 192,
    src: (index) =>
      `/videos/hero-frames-desktop/frame_${String(index + 1).padStart(4, '0')}.jpg`,
  },
}

export function getHeroFrameSetKey(): HeroFrameSetKey {
  if (typeof window === 'undefined') return 'mobile'
  return window.matchMedia(`(min-width: ${HERO_BREAKPOINT_PX}px)`).matches
    ? 'desktop'
    : 'mobile'
}

export function getHeroFrameSet(): HeroFrameSet {
  return HERO_FRAME_SETS[getHeroFrameSetKey()]
}

function getMaxScroll(container: HTMLElement) {
  return Math.max(0, container.offsetTop + container.offsetHeight - window.innerHeight)
}

export function getHeroScrollProgress(container: HTMLElement) {
  const maxScroll = getMaxScroll(container)
  if (maxScroll <= 0) return 1

  const traveled = Math.min(Math.max(window.scrollY - container.offsetTop, 0), maxScroll)
  return traveled / maxScroll
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  const imageRatio = image.naturalWidth / image.naturalHeight
  const canvasRatio = width / height
  let drawWidth = width
  let drawHeight = height
  let offsetX = 0
  let offsetY = 0

  if (imageRatio > canvasRatio) {
    drawWidth = height * imageRatio
    offsetX = (width - drawWidth) / 2
  } else {
    drawHeight = width / imageRatio
    const isSmallScreen = width < 768
    offsetY = isSmallScreen
      ? (height - drawHeight) / 2
      : (height - drawHeight) * 0.12
  }

  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
}

function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const dpr = window.devicePixelRatio || 1
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  return { ctx, width, height }
}

export function drawHeroFrame(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
) {
  const setup = setupCanvas(canvas)
  if (!setup) return

  const { ctx, width, height } = setup
  ctx.globalAlpha = 1
  ctx.clearRect(0, 0, width, height)
  drawCover(ctx, image, width, height)
}

export function drawHeroFrameBlend(
  canvas: HTMLCanvasElement,
  imageA: HTMLImageElement,
  imageB: HTMLImageElement,
  blend: number,
) {
  const setup = setupCanvas(canvas)
  if (!setup) return

  const { ctx, width, height } = setup
  ctx.clearRect(0, 0, width, height)

  ctx.globalAlpha = 1
  drawCover(ctx, imageA, width, height)

  if (blend > 0.001 && imageB !== imageA) {
    ctx.globalAlpha = blend
    drawCover(ctx, imageB, width, height)
  }

  ctx.globalAlpha = 1
}
