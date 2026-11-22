'use client'
import { useRef } from 'react'
import { site } from '@/lib/data'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const message = () => {
    const d = new FormData(form.current!)
    return `Hi ${site.name.split(' ')[0]}, I’m ${d.get('n')} (${d.get('e')}). I need help with: ${d.get('t')}.\n\n${d.get('d')}`
  }
  return (
    <div className="contact">
      <div>
        <h2>Let’s build something remarkable together.</h2>
        <p className="lead">Tell me about your website or app. I’ll reply within one hour with a practical plan and a quote.</p>
        <a className="row" href={`https://wa.me/${site.whatsapp}`}><small>WhatsApp</small>+{site.whatsapp}</a>
        <a className="row" href={`mailto:${site.email}`}><small>Email</small>{site.email}</a>
        <a className="row" href={site.linkedin}><small>LinkedIn</small>Connect on LinkedIn</a>
      </div>
      <form ref={form} onSubmit={e => { e.preventDefault(); location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry')}&body=${encodeURIComponent(message())}` }}>
        <label>Your full name<input name="n" required autoComplete="name" /></label>
        <label>Your business email<input name="e" type="email" required autoComplete="email" /></label>
        <label>What do you need?
          <select name="t">
            <option>Monthly website care ($29 – $99/mo)</option>
            <option>New frontend development (React / Next.js)</option>
            <option>Bug fix or performance optimization</option>
            <option>Other project or consultation</option>
          </select>
        </label>
        <label>Project details or website link<textarea name="d" /></label>
        <div className="two">
          <button className="btn main" type="button" onClick={() => { if (form.current!.reportValidity()) window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message())}`, '_blank', 'noopener') }}>Send via WhatsApp</button>
          <button className="btn" type="submit">Send via email</button>
        </div>
      </form>
    </div>
  )
}
