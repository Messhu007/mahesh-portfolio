import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { site, skillCategories, stats, services, jobs, why, faqs } from '@/lib/data'

export default function Page() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />

        {/* About Me Section */}
        <section id="about">
          <div className="wrap">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>Designing Experiences. Developing Solutions.</h2>
            <div className="grid2" style={{ alignItems: 'start', marginTop: '26px' }}>
              <div>
                <p className="lead" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginTop: 0, marginBottom: '16px' }}>
                  I'm a passionate Web Designer and Frontend Developer with 3 years of experience in creating modern websites and interactive web interfaces.
                </p>
                <p style={{ color: 'var(--muted)', lineHeight: '1.75', marginBottom: '16px' }}>
                  My journey in web development has helped me build strong skills in frontend technologies, responsive design, website customization, and performance optimization. I enjoy transforming creative ideas and design concepts into functional, visually appealing, and user-friendly websites.
                </p>
                <p style={{ color: 'var(--muted)', lineHeight: '1.75' }}>
                  From developing websites from scratch to maintaining existing platforms, I focus on delivering quality work with great attention to detail.
                </p>
              </div>
              <div className="cards" style={{ marginTop: 0, gap: '14px' }}>
                <div className="card" style={{ padding: '18px 22px' }}>
                  <h3>🎨 Design First</h3>
                  <p>Creating visually appealing, modern, and user-friendly interfaces.</p>
                </div>
                <div className="card" style={{ padding: '18px 22px' }}>
                  <h3>⚡ Development Focused</h3>
                  <p>Writing clean, structured, and reusable code with modern frontend standards.</p>
                </div>
                <div className="card" style={{ padding: '18px 22px' }}>
                  <h3>📱 Responsive Always</h3>
                  <p>Ensuring smooth and consistent experiences across all mobile, tablet, and desktop screens.</p>
                </div>
                <div className="card" style={{ padding: '18px 22px' }}>
                  <h3>🚀 Continuous Learning</h3>
                  <p>Staying curious, exploring modern frameworks, and continuously improving my skills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="stack" style={{ paddingTop: '64px' }}>
          <div className="wrap">
            <span className="eyebrow">MY TECH STACK</span>
            <h2>Technologies I Work With</h2>
            <p className="lead">
              I use modern web technologies and tools to design, develop, and maintain responsive digital experiences.
            </p>
            <div
              className="skill-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px',
                marginTop: '32px',
              }}
            >
              {skillCategories.map(cat => (
                <div key={cat.title} className="card" style={{ padding: '22px' }}>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '10px' }}>{cat.title}</h3>
                  <div className="chips" style={{ gap: '8px' }}>
                    {cat.skills.map(s => (
                      <span key={s} style={{ padding: '6px 12px', fontSize: '.88rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="stats" style={{ marginTop: '36px' }}>
              {stats.map(([n, l]) => (
                <div className="stat" key={l}>
                  <b>{n}</b>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="work">
          <div className="wrap">
            <span className="eyebrow">MY RECENT WORK</span>
            <h2>Projects That Showcase My Work</h2>
            <p className="lead">
              A selection of website design and frontend development projects that demonstrate my technical skills, creativity, and practical experience.
            </p>
            <Projects />
            <div className="note">
              <span>Want a private code walkthrough or a demo for a specific project?</span>
              <a className="btn sm main" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience">
          <div className="wrap">
            <span className="eyebrow">MY JOURNEY</span>
            <h2>Experience That Builds Expertise</h2>
            <p className="lead">
              With 3 years of experience in web design and frontend development, I have worked on creating, maintaining, and improving websites across different business domains.
            </p>
            <div className="tl">
              {jobs.map(j => (
                <div className="job" key={j.title}>
                  <span className="when">{j.when}</span>
                  <h3>{j.title}</h3>
                  {j.intro && (
                    <p className="lead" style={{ margin: 0, fontWeight: 600, color: 'var(--ink)' }}>
                      {j.intro}
                    </p>
                  )}
                  <ul>
                    {j.points.map(p => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Expertise Section */}
        <section id="services">
          <div className="wrap">
            <span className="eyebrow">WHAT I DO</span>
            <h2>Turning Ideas Into Digital Experiences</h2>
            <p className="lead">
              I combine creative design and frontend development to build websites that look great, work smoothly, and deliver a better user experience.
            </p>
            <div className="cards">
              {services.map(s => (
                <div className="card" key={s.title}>
                  {s.tag ? <span className="tag">{s.tag}</span> : <div className="ico">{s.icon}</div>}
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a className="lnk" href="#contact">
                    Discuss this service →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section id="why">
          <div className="wrap">
            <span className="eyebrow">MY STRENGTHS</span>
            <h2>What I Bring to Every Project</h2>
            <p className="lead">
              A reliable blend of technical skill, creative attention to detail, and a collaborative mindset.
            </p>
            <div className="why">
              {why.map(([t, d]) => (
                <div key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <div className="wrap">
            <span className="eyebrow">QUESTIONS &amp; ANSWERS</span>
            <h2>Frequently Asked Questions</h2>
            <p className="lead">Quick answers to common questions about my skills, workflows, and experience.</p>
            <div className="faq" style={{ marginTop: '24px' }}>
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="wrap">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div>
            <b>{site.name}</b> · Web Designer &amp; Frontend Developer
            <p style={{ marginTop: '4px', fontSize: '.84rem' }}>
              © 2026 {site.name}. All rights reserved. Designed &amp; Developed with Passion.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="#home">Back to top ↑</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.resume} download="Mahesh_Nagar_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
