import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { Button } from '../shared/Button'
import { cn } from '../../lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Offerings' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/book-us', label: 'Book Us Now' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full overflow-hidden transition-shadow duration-500 ease-in-out',
        scrolled ? 'shadow-lg shadow-primary-dark/20' : 'border-b border-accent/25 shadow-sm shadow-primary/5',
      )}
    >
      <div className="absolute inset-0 bg-header" aria-hidden />
      <div
        className={cn(
          'absolute inset-0 bg-brand-gradient transition-opacity duration-500 ease-in-out',
          scrolled ? 'opacity-100' : 'opacity-0',
        )}
        aria-hidden
      />

      <div className="relative z-10">
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Utsav Sutra Event"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-accent/50 md:h-14 md:w-14"
            />
            <div className="leading-tight">
              <p
                className={cn(
                  'font-display text-sm font-semibold tracking-wide transition-colors duration-500 md:text-base',
                  scrolled ? 'text-accent' : 'text-primary-dark',
                )}
              >
                UTSAV SUTRA
              </p>
              <p
                className={cn(
                  'text-[10px] tracking-[0.25em] uppercase transition-colors duration-500',
                  scrolled ? 'text-accent-light/80' : 'text-primary/70',
                )}
              >
                Event
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.slice(0, -1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-500 ease-in-out',
                    isActive
                      ? scrolled
                        ? 'bg-accent/15 text-accent'
                        : 'bg-primary/10 text-primary-dark'
                      : scrolled
                        ? 'text-white/85 hover:text-accent'
                        : 'text-text hover:text-primary',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/book-us" size="sm" className="ml-2">
              Book Us Now
            </Button>
          </nav>

          <button
            type="button"
            className={cn(
              'rounded-lg p-2 transition-colors duration-500 lg:hidden',
              scrolled ? 'text-accent' : 'text-primary-dark',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open ? (
          <div
            className={cn(
              'border-t transition-colors duration-500 ease-in-out lg:hidden',
              scrolled ? 'border-white/10' : 'border-accent/20',
            )}
          >
            <nav className="container-page flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors duration-500 ease-in-out',
                      isActive
                        ? scrolled
                          ? 'bg-accent/15 text-accent'
                          : 'bg-primary/10 text-primary-dark'
                        : scrolled
                          ? 'text-white/90'
                          : 'text-text',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <p
                className={cn(
                  'mt-2 px-4 text-xs transition-colors duration-500 ease-in-out',
                  scrolled ? 'text-white/50' : 'text-text-muted',
                )}
              >
                {siteConfig.tagline}
              </p>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
