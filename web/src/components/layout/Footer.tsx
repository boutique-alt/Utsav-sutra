import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { InstagramIcon } from '../shared/InstagramIcon'
import { siteConfig } from '../../data/site'
import { partners } from '../../data/partners'

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Utsav Sutra Event"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-accent/40"
            />
            <div>
              <p className="font-display text-lg tracking-wide text-accent">UTSAV SUTRA</p>
              <p className="text-[10px] tracking-[0.25em] text-accent-light/70 uppercase">
                Event
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{siteConfig.tagline}</p>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light"
          >
            <InstagramIcon size={16} />
            {siteConfig.contact.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ['/', 'Home'],
              ['/services', 'Services'],
              ['/gallery', 'Gallery'],
              ['/about', 'About'],
              ['/book-us', 'Book Us Now'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {siteConfig.contact.phonesDisplay.map((phone, i) => (
              <li key={phone}>
                <a
                  href={`tel:${siteConfig.contact.phones[i]}`}
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Phone size={14} />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <Mail size={14} />
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">Partners</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {partners.map((p) => (
              <li key={p.id}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {p.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Utsav Sutra Event. All rights reserved.
      </div>
    </footer>
  )
}
