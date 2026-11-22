'use client'
import { useEffect, useRef } from 'react'
import { site } from '@/lib/data'

const code = `<span class="c">// modern & responsive by default</span>
<span class="k">export default function</span> <span class="f">Portfolio</span>() {
  <span class="k">return</span> (
    &lt;<span class="f">main</span> className=<span class="s">"creative-developer"</span>&gt;
      &lt;<span class="f">h1</span>&gt;Design. Build. Deliver.&lt;/<span class="f">h1</span>&gt;
      &lt;<span class="f">Experience</span> years={<span class="s">3</span>} /&gt;
    &lt;/<span class="f">main</span>&gt;
  )
}`
const scores = ['Performance', 'Accessibility', 'Best practices', 'SEO']

export default function Hero() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches
    refs.current.forEach((el, i) => {
      if (!el) return
      if (reduce) {
        el.textContent = '95'
        return
      }
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts + i * 120
        const p = Math.min(Math.max((ts - start) / 1100, 0), 1)
        el.textContent = String(Math.round(95 * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
  }, [])

  return (
    <section className="hero">
      <div className="wrap grid2">
        <div>
          <div className="status">
            <b></b>Available for New Opportunities
          </div>
          <h1>
            Creative Web Designer &amp; <mark>Frontend Developer</mark>
          </h1>
          <h2 className="marginTop">Turning Ideas Into Beautiful, Responsive &amp; High-Performing Websites.</h2>
          <p className="lead">
            I'm <b>{site.name}</b>, a Web Designer and Frontend Developer with 3 years of experience in designing and developing modern, responsive, and user-friendly websites. I specialize in creating engaging user interfaces, building responsive web experiences, and transforming design concepts into functional websites using modern frontend technologies. With a strong focus on clean code, creative design, performance, and usability, I love building digital experiences that make an impact.
          </p>
          <div className="cta">
            <a className="btn main" href="#work">
              Explore My Work
            </a>
            <a
              className="btn"
              href={site.resume}
              download="Mahesh_Nagar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </a>
            <a className="btn" href="#contact">
              Let’s Connect
            </a>
          </div>
          <ul className="trust">
            <li>Creative UI Design</li>
            <li>Responsive Development</li>
            <li>Clean &amp; Maintainable Code</li>
            <li>Website Performance</li>
          </ul>
        </div>
        <div className="dev" aria-label="Code and Lighthouse scores preview">
          <div className="top">
            <i></i>
            <i></i>
            <i></i>
            <span>Portfolio.tsx</span>
          </div>
          <pre dangerouslySetInnerHTML={{ __html: code }} />
          <div className="scores">
            {scores.map((s, i) => (
              <div className="sc" key={s}>
                <div
                  className="ring"
                  ref={el => {
                    refs.current[i] = el
                  }}
                >
                  0
                </div>
                <small>{s}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
