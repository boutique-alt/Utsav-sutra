import { useEffect, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { InstagramIcon } from '../components/shared/InstagramIcon'
import { siteConfig } from '../data/site'
import { services } from '../data/services'
import { Button } from '../components/shared/Button'

export function BookUs() {
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    setName(params.get('name') || '')
    setPhone(params.get('phone') || '')
    setService(params.get('service') || '')
  }, [params])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const message = [
      'Utsav Sutra — Wedding Enquiry',
      '',
      `Consultation request from ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Email: ${form.get('email') || '-'}`,
      `Service: ${form.get('service') || '-'}`,
      `Guests: ${params.get('guests') || form.get('guests') || '-'}`,
      `Budget hint: ${params.get('budget') || form.get('budget') || '-'}`,
      `Message: ${form.get('message') || '-'}`,
    ].join('\n')

    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setStatus('success')
  }

  return (
    <>
      <section className="bg-brand-gradient py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl text-accent md:text-5xl">Book Us Now</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Book your free consultation. We Plan. You Celebrate.
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <h2 className="font-display text-2xl text-primary">Get in Touch</h2>
            <div className="space-y-4 text-sm">
              {siteConfig.contact.phonesDisplay.map((p, i) => (
                <a
                  key={p}
                  href={`tel:${siteConfig.contact.phones[i]}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 hover:border-accent"
                >
                  <Phone size={18} className="text-accent-dark" />
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 hover:border-accent"
              >
                <Mail size={18} className="text-accent-dark" />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 hover:border-accent"
              >
                <InstagramIcon size={18} className="text-accent-dark" />
                {siteConfig.contact.instagramHandle}
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-primary">Full Name *</label>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-primary">Phone *</label>
                <input
                  name="phone"
                  required
                  pattern="[6-9][0-9]{9}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-primary">Email</label>
              <input
                name="email"
                type="email"
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-primary">Service Interest</label>
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-primary">Guest Count</label>
                <input
                  name="guests"
                  defaultValue={params.get('guests') || ''}
                  className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-primary">Budget</label>
                <input
                  name="budget"
                  defaultValue={params.get('budget') || ''}
                  className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-primary">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-accent"
                placeholder="Tell us about your wedding..."
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit via WhatsApp
            </Button>

            {status === 'success' ? (
              <p className="text-center text-sm text-primary">
                WhatsApp opened with your request. Thank you!
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  )
}
