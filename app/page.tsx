import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { site, stack, stats, services, jobs, plans, why, testimonials, faqs } from '@/lib/data'

export default function Page() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />

        <section className="stack"><div className="wrap">
          <div className="chips">{stack.map(s => <span key={s}>{s}</span>)}</div>
          <div className="stats">{stats.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
        </div></section>

        <section id="services"><div className="wrap">
          <h2>What I can do for your business</h2>
          <p className="lead">Need a new interface built from scratch, or someone to keep your current site healthy? I take care of the frontend end to end.</p>
          <div className="cards">
            {services.map(s => (
              <div className="card" key={s.title}>
                {s.tag ? <span className="tag">{s.tag}</span> : <div className="ico">{s.icon}</div>}
                <h3>{s.title}</h3><p>{s.text}</p>
                <a className="lnk" href="#contact">Ask about this</a>
              </div>
            ))}
          </div>
        </div></section>

        <section id="work"><div className="wrap">
          <h2>Projects I’ve built</h2>
          <p className="lead">A selection of production interfaces. Replace these sample cards with your own live links and screenshots.</p>
          <Projects />
          <div className="note"><span>Want a private code walkthrough or a demo for a specific technology?</span><a className="btn sm main" href="#contact">Request a private demo</a></div>
        </div></section>

        <section id="experience"><div className="wrap">
          <h2>My Professional Journey</h2>
          <p className="lead">3 Years of Learning, Building & Growing</p>
          <p className="lead">Experience in designing, developing, maintaining and optimizing modern websites and responsive web interfaces.</p>
          <div className="tl">
            {jobs.map(j => (
              <div className="job" key={j.title}>
                <span className="when">{j.when}</span><h3>{j.title}</h3>
                {j.intro && <p className="lead" style={{ margin: 0 }}>{j.intro}</p>}
                <ul>{j.points.map(p => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div></section>

        <section id="pricing"><div className="wrap">
          <h2>Monthly care plans</h2>
          <p className="lead">No long-term contracts. Pause or cancel any time. Need a full build instead? Message me for a milestone-based quote.</p>
          <div className="cards">
            {plans.map(p => (
              <div className={`card price${p.popular ? ' pop' : ''}`} key={p.name}>
                {p.popular && <span className="tag">Most popular</span>}
                <h3>{p.name}</h3>
                <div className="amt">${p.price}<small> / month</small></div>
                <p>{p.desc}</p>
                <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                <a className={`btn${p.popular ? ' main' : ''}`} href="#contact">Choose {p.name.split(' ')[0]}</a>
              </div>
            ))}
          </div>
        </div></section>

        <section id="why"><div className="wrap">
          <h2>Why clients trust me with their business</h2>
          <div className="why">{why.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
        </div></section>


        <section id="faq"><div className="wrap">
          <h2>Frequently asked questions</h2>
          <div className="faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div></section>

        <section id="contact"><div className="wrap"><Contact /></div></section>
      </main>
      <footer><div className="wrap">
        <span>© 2026 {site.name}. All rights reserved.</span>
        <span>Built with Next.js, React and TypeScript.<a href={site.linkedin}>LinkedIn</a><a href={site.github}>GitHub</a></span>
      </div></footer>
    </>
  )
}
