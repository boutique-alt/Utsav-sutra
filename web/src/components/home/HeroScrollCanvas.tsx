import { forwardRef } from 'react'

export const HeroScrollCanvas = forwardRef<HTMLCanvasElement>(
  function HeroScrollCanvas(_props, ref) {
    return (
      <canvas
        ref={ref}
        className="absolute inset-0 h-full w-full [transform:translateZ(0)]"
        aria-hidden
      />
    )
  },
)
