import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.2em]',
            light ? 'text-accent-light' : 'text-accent-dark',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-3xl font-semibold md:text-4xl',
          light ? 'text-white' : 'text-primary',
        )}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      {subtitle ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed md:text-lg',
            light ? 'text-white/85' : 'text-text-muted',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
