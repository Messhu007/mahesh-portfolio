'use client'
import { useRef } from 'react'
import { site } from '@/lib/data'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const message = () => {
    const d = new FormData(form.current!)
    return `Hi ${site.name.split(' ')[0]}, I’m ${d.get('n')} (${d.get('e')}). Regarding: ${d.get('t')}.\n\n${d.get('d')}`
  }
  return (
    <div className="contact">
      <div>
        <span className="eyebrow" style={{ color: 'var(--hi)' }}>LET’S CONNECT</span>
        <h2 style={{ color: '#fff', marginTop: '4px' }}>Have an Opportunity? Let’s Talk!</h2>
        <p className="lead">
          I'm always interested in connecting with companies, recruiters, and teams looking for a creative Web Designer and Frontend Developer. If you're looking for someone who can build responsive websites, develop modern interfaces, and maintain high-quality web experiences, I'd love to connect.
        </p>
        <a className="row" href={`mailto:${site.email}`}>
          <small>Email</small>{site.email}
        </a>
        <a className="row" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          <small>LinkedIn</small>Connect on LinkedIn
        </a>
        <a className="row" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <small>WhatsApp</small>+{site.whatsapp}
        </a>
        <a className="row" href={site.resume} download="Mahesh_Nagar_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <small>Resume</small>Download Resume (PDF)
        </a>
      </div>
      <form
        ref={form}
        onSubmit={e => {
          e.preventDefault()
          location.href = `mailto:${site.email}?subject=${encodeURIComponent('Opportunity / Project inquiry')}&body=${encodeURIComponent(message())}`
        }}
      >
        <label>
          Your full name
          <input name="n" required autoComplete="name" placeholder="John Doe" />
        </label>
        <label>
          Your email
          <input name="e" type="email" required autoComplete="email" placeholder="john@example.com" />
        </label>
        <label>
          Regarding
          <select name="t">
            <option>Job / Full-time Opportunity (Web Designer / Frontend)</option>
            <option>Frontend Development (React.js / Next.js)</option>
            <option>Website Design &amp; UI Development</option>
            <option>WordPress Customization &amp; Maintenance</option>
            <option>Other Opportunity or Consultation</option>
          </select>
        </label>
        <label>
          Message / Project details
          <textarea name="d" placeholder="Tell me about the role, project, or requirements..." />
        </label>
        <div className="two">
          <button
            className="btn main"
            type="button"
            onClick={() => {
              if (form.current!.reportValidity()) {
                window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message())}`, '_blank', 'noopener')
              }
            }}
          >
            Send via WhatsApp
          </button>
          <button className="btn" type="submit">
            Send via email
          </button>
        </div>
      </form>
    </div>
  )
}
