'use client'
import { useEffect } from 'react'
import { site } from '@/lib/data'

const links = [['services','Services'],['work','Projects'],['experience','Experience'],['why','Why me'],['faq','FAQ']]

export default function Header() {
  useEffect(() => {
    try { const t = localStorage.getItem('theme'); if (t) document.documentElement.setAttribute('data-theme', t) } catch {}
  }, [])
  const toggle = () => {
    const r = document.documentElement
    const cur = r.getAttribute('data-theme')
    const dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches
    const next = dark ? 'light' : 'dark'
    r.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch {}
  }
  return (
    <header>
      <div className="wrap bar">
        <a className="logo" href="#home"><i>{site.initials}</i>{site.name}</a>
        <nav aria-label="Main">{links.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <button id="theme" onClick={toggle} aria-label="Toggle light and dark theme">◐</button>
        <a className="btn sm" href={site.resume} download="Mahesh_Nagar_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="btn main sm" href="#contact">Let’s talk</a>
      </div>
    </header>
  )
}
