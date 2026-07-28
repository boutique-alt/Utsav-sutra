import { siteConfig } from '../../data/site'
import { WhatsAppIcon } from '../shared/WhatsAppIcon'

const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  "Hi Utsav Sutra, I'd like to inquire about wedding planning.",
)}`

export function WhatsAppFloat() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 transition hover:scale-110 md:right-7 md:bottom-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
      <WhatsAppIcon className="relative" size={28} />
    </a>
  )
}
