import { useState, type FormEvent } from 'react'
import { siteConfig } from '../../data/site'
import { services } from '../../data/services'
import { SectionHeading } from '../shared/SectionHeading'
import { Button } from '../shared/Button'

const budgetOptions = [
  'Under ₹2 Lakh',
  '₹2 – 5 Lakh',
  '₹5 – 12 Lakh',
  '₹12 – 25 Lakh',
  '₹25 Lakh+',
  'Prefer to discuss',
]

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const message = [
      'Utsav Sutra — Wedding Enquiry',
      '',
      `New inquiry from ${name}`,
      `Phone: ${phone}`,
      `Email: ${data.get('email') || '-'}`,
      `Date: ${data.get('eventDate') || '-'}`,
      `Location: ${data.get('location') || '-'}`,
      `Budget: ${data.get('budget') || '-'}`,
      `Offerings: ${selectedServices.join(', ') || '-'}`,
      `Details: ${data.get('message') || '-'}`,
    ].join('\n')

    const wa = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(wa, '_blank', 'noopener,noreferrer')
    setStatus('success')
    form.reset()
    setSelectedServices([])
  }

  return (
    <section className="section-pad bg-primary text-white">
      <div className="container-page">
        <SectionHeading
          light
          eyebrow="Contact Us"
          title="Ready to Plan Your Dream Wedding?"
          subtitle="Tell us about your celebration — we’ll create a personalized plan for you."
        />

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-12 max-w-3xl space-y-5 rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name *" name="name" required />
            <Field label="Phone Number *" name="phone" required pattern="[6-9][0-9]{9}" />
            <Field label="Email Address" name="email" type="email" />
            <Field label="Event Date" name="eventDate" type="date" />
            <Field label="Event Location" name="location" />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-accent-light">Budget Range</label>
              <select
                name="budget"
                className="w-full rounded-xl border border-white/20 bg-primary-dark px-4 py-3 outline-none focus:border-accent"
              >
                <option value="">Select budget range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium text-accent-light">Offerings Required</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <label
                  key={s.id}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(s.title)}
                    onChange={() => toggleService(s.title)}
                    className="accent-accent"
                  />
                  {s.title}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-accent-light">Additional Details</label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border border-white/20 bg-primary-dark px-4 py-3 outline-none focus:border-accent"
              placeholder="Tell us about your wedding vision..."
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Get Free Quote via WhatsApp
          </Button>

          {status === 'success' ? (
            <p className="text-center text-sm text-accent-light">
              WhatsApp opened with your inquiry. We’ll respond soon!
            </p>
          ) : null}

          <p className="text-center text-xs text-white/50">
            Or call {siteConfig.contact.phonesDisplay.join(' / ')} · {siteConfig.contact.email}
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  pattern,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  pattern?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-accent-light">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        pattern={pattern}
        className="w-full rounded-xl border border-white/20 bg-primary-dark px-4 py-3 outline-none focus:border-accent"
      />
    </div>
  )
}
