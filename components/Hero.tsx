'use client'
import { useEffect, useRef } from 'react'

const code = `<span class="c">// fast by default</span>
<span class="k">export default function</span> <span class="f">Hero</span>() {
  <span class="k">return</span> (
    &lt;<span class="f">main</span> className=<span class="s">"grid gap-8"</span>&gt;
      &lt;<span class="f">h1</span>&gt;Build it right.&lt;/<span class="f">h1</span>&gt;
      &lt;<span class="f">Image</span> priority src={hero} /&gt;
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
      if (reduce) { el.textContent = '90'; return }
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts + i * 120
        const p = Math.min(Math.max((ts - start) / 1100, 0), 1)
        el.textContent = String(Math.round(90 * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
  }, [])

  return (
    <section className="hero">
      <div className="wrap grid2">
        <div>
          <div className="status"><b></b>Available for new opportunities & projects</div>
          <h1>I Design & Build Modern Websites That  <mark>Make an Impact.</mark></h1>
          <h2 className='marginTop'>Creative Design. Clean Code. Responsive Experiences.</h2>
          <p className="lead">I'm a Frontend Developer and Web Designer specializing in creating modern, responsive, and user-friendly websites. I turn ideas into engaging digital experiences using the latest web technologies, with a strong focus on design, performance, and functionality.</p>
          <div className="cta"><a className="btn main" href="#work">See my projects</a><a className="btn" href="#pricing">Care plans from $29/mo</a></div>
          <ul className="trust"><li>Responsive Design</li><li>Clean Code</li><li>User-Friendly UI</li><li>Website Optimization</li></ul>
        </div>
        <div className="dev" aria-label="Code and Lighthouse scores preview">
          <div className="top"><i></i><i></i><i></i><span>Hero.tsx</span></div>
          <pre dangerouslySetInnerHTML={{ __html: code }} />
          <div className="scores">
            {scores.map((s, i) => (
              <div className="sc" key={s}><div className="ring" ref={el => { refs.current[i] = el }}>0</div><small>{s}</small></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
