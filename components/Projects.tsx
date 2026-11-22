'use client'
import { useState } from 'react'
import { projects, filters } from '@/lib/data'

export default function Projects() {
  const [active, setActive] = useState('all')
  return (
    <>
      <div className="tabs" role="group" aria-label="Filter projects">
        {filters.map(([id, label]) => (
          <button key={id} aria-pressed={active === id} onClick={() => setActive(id)}>{label}</button>
        ))}
      </div>
      <div className="proj">
        {projects.filter(p => active === 'all' || p.cat === active).map(p => (
          <article className="pj" key={p.title}>
            <div className="shot" style={{ background: p.bg }}><i></i><i></i><i></i></div>
            <div className="in">
              <span className="meta">{p.meta}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
              <a href={p.url} target="_blank" rel="noopener noreferrer">Visit live site</a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
