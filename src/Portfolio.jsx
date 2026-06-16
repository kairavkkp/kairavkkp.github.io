import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Menu, X } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE
// ─────────────────────────────────────────────────────────────
const PROFILE = {
  name: "Alex Rivera",
  role: "Full-Stack Engineer",
  blurb:
    "I build reliable web software with a bias for clean interfaces and boring, dependable infrastructure underneath.",
  location: "San Francisco, CA",
  email: "hello@alexrivera.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  available: true,
};

const STACK = [
  "TypeScript", "React", "Node.js", "Python",
  "PostgreSQL", "Go", "AWS", "Docker",
];

const PROJECTS = [
  {
    file: "ledger-api/",
    title: "Ledger API",
    desc: "A double-entry accounting service handling 2M+ transactions/day with strong consistency guarantees and an audit-first data model.",
    tags: ["Go", "PostgreSQL", "gRPC"],
    href: "#",
  },
  {
    file: "atlas-ui/",
    title: "Atlas Design System",
    desc: "A component library and tokens pipeline adopted across six product teams, cutting net-new UI build time roughly in half.",
    tags: ["React", "TypeScript", "Storybook"],
    href: "#",
  },
  {
    file: "drift.py",
    title: "Drift",
    desc: "An open-source schema migration linter that catches unsafe production changes before they ship. ~1.4k stars.",
    tags: ["Python", "CLI", "OSS"],
    href: "#",
  },
  {
    file: "pulse-dash/",
    title: "Pulse",
    desc: "A real-time observability dashboard streaming metrics over WebSockets with sub-second render budgets.",
    tags: ["React", "WebSockets", "D3"],
    href: "#",
  },
];

const EXPERIENCE = [
  {
    range: "2023 — now",
    role: "Senior Software Engineer",
    org: "Northwind Systems",
    note: "Lead engineer on the payments platform. Designed the ledger service and mentored four engineers.",
  },
  {
    range: "2020 — 2023",
    role: "Software Engineer",
    org: "Bright Harbor",
    note: "Built customer-facing dashboards and the internal design system from the ground up.",
  },
  {
    range: "2018 — 2020",
    role: "Junior Developer",
    org: "Cedar Labs",
    note: "Shipped features across the stack on a small, fast-moving product team.",
  },
];

const SECTIONS = [
  { id: "about", label: "about.md" },
  { id: "projects", label: "projects/" },
  { id: "experience", label: "experience.log" },
  { id: "contact", label: "contact()" },
];

// ─────────────────────────────────────────────────────────────

function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-shown" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pf-root">
      <style>{CSS}</style>

      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => go("about")}>
            <span className="brand-name">{PROFILE.name}</span>
            <span className="brand-meta">~/portfolio</span>
          </button>

          <nav className="nav-links" aria-label="Sections">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className={`nav-link ${active === s.id ? "active" : ""}`}
                onClick={() => go(s.id)}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="nav-mobile">
            {SECTIONS.map((s) => (
              <button key={s.id} className="nav-mobile-link" onClick={() => go(s.id)}>
                {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="wrap">
        {/* HERO / ABOUT */}
        <section id="about" className="hero">
          <Reveal>
            <p className="mono eyebrow">
              {PROFILE.available && <span className="dot" />}
              {PROFILE.available ? "available for work" : "currently heads-down"}
              <span className="sep">·</span>
              {PROFILE.location}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="hero-title">
              {PROFILE.name}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="hero-role mono">{PROFILE.role}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className="hero-blurb">{PROFILE.blurb}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => go("projects")}>
                View work <ArrowUpRight size={16} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("contact")}>
                Get in touch
              </button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="stack">
              <span className="mono stack-label">// stack</span>
              <ul className="stack-list">
                {STACK.map((t) => (
                  <li key={t} className="mono stack-item">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <Reveal as="header" className="section-head">
            <span className="mono section-index">projects/</span>
            <h2 className="section-title">Selected work</h2>
          </Reveal>

          <div className="grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <a className="card" href={p.href}>
                  <div className="card-top">
                    <span className="mono card-file">{p.file}</span>
                    <ArrowUpRight size={18} className="card-arrow" />
                  </div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.desc}</p>
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t} className="mono tag">{t}</li>
                    ))}
                  </ul>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <Reveal as="header" className="section-head">
            <span className="mono section-index">experience.log</span>
            <h2 className="section-title">Where I've worked</h2>
          </Reveal>

          <ol className="timeline">
            {EXPERIENCE.map((e, i) => (
              <Reveal as="li" key={e.org} className="tl-item" delay={i * 60}>
                <span className="mono tl-range">{e.range}</span>
                <div className="tl-body">
                  <h3 className="tl-role">
                    {e.role} <span className="tl-org">· {e.org}</span>
                  </h3>
                  <p className="tl-note">{e.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <Reveal as="header" className="section-head">
            <span className="mono section-index">contact()</span>
            <h2 className="section-title">Let's talk</h2>
          </Reveal>

          <Reveal>
            <p className="contact-lead">
              Have something you're building, or a role you think I'd be good for?
              The fastest way to reach me is email.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="contact-links">
              <a className="contact-row" href={`mailto:${PROFILE.email}`}>
                <Mail size={18} />
                <span>{PROFILE.email}</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
              <a className="contact-row" href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
              <a className="contact-row" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <span className="mono">© {new Date().getFullYear()} {PROFILE.name}</span>
          <span className="mono footer-built">built with React</span>
        </footer>
      </main>
    </div>
  );
}

const CSS = `

.pf-root {
  --bg: #FAFAF7;
  --surface: #FFFFFF;
  --ink: #18181B;
  --muted: #6B6B73;
  --faint: #9A9AA1;
  --line: #E7E7E1;
  --accent: #2B50EC;
  --accent-soft: #EDF0FE;

  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 450;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}
.pf-root *,
.pf-root *::before,
.pf-root *::after { box-sizing: border-box; }

.mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .6s cubic-bezier(.22,.61,.36,1), transform .6s cubic-bezier(.22,.61,.36,1);
}
.reveal.is-shown { opacity: 1; transform: none; }

/* NAV */
.nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(250,250,247,.82);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  max-width: 880px; margin: 0 auto;
  padding: 16px 28px;
  display: flex; align-items: center; justify-content: space-between;
}
.brand { display: flex; flex-direction: column; align-items: flex-start; gap: 1px; background: none; border: 0; cursor: pointer; padding: 0; }
.brand-name { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 15px; letter-spacing: -.01em; color: var(--ink); }
.brand-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--faint); }
.nav-links { display: flex; gap: 4px; }
.nav-link {
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  color: var(--muted); background: none; border: 0; cursor: pointer;
  padding: 6px 10px; border-radius: 7px; transition: color .2s, background .2s;
}
.nav-link:hover { color: var(--ink); background: rgba(0,0,0,.04); }
.nav-link.active { color: var(--accent); }
.nav-toggle { display: none; background: none; border: 0; color: var(--ink); cursor: pointer; padding: 4px; }
.nav-mobile { display: flex; flex-direction: column; padding: 8px 20px 16px; border-top: 1px solid var(--line); }
.nav-mobile-link { font-family: 'JetBrains Mono', monospace; font-size: 15px; text-align: left; background: none; border: 0; color: var(--ink); padding: 12px 8px; cursor: pointer; border-radius: 7px; }
.nav-mobile-link:hover { background: rgba(0,0,0,.04); }

.wrap { max-width: 880px; margin: 0 auto; padding: 0 28px; }

/* HERO */
.hero { padding: 96px 0 88px; border-bottom: 1px solid var(--line); }
.eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--muted); margin: 0 0 28px;
  letter-spacing: .01em;
}
.eyebrow .sep { color: var(--line); }
.dot { width: 7px; height: 7px; border-radius: 50%; background: #1FB873; box-shadow: 0 0 0 3px rgba(31,184,115,.16); }
.hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(44px, 9vw, 80px);
  font-weight: 600; letter-spacing: -.035em; line-height: 1.02;
  margin: 0; color: var(--ink);
}
.hero-role { font-size: 15px; color: var(--accent); margin: 14px 0 0; letter-spacing: .02em; }
.hero-blurb { font-size: 19px; line-height: 1.55; color: var(--ink); max-width: 30em; margin: 26px 0 0; }
.hero-actions { display: flex; gap: 12px; margin-top: 34px; flex-wrap: wrap; }

.btn {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: 'Inter', sans-serif; font-size: 14.5px; font-weight: 500;
  padding: 11px 18px; border-radius: 9px; cursor: pointer;
  border: 1px solid transparent; transition: transform .15s, background .2s, border-color .2s;
}
.btn:active { transform: translateY(1px); }
.btn-primary { background: var(--ink); color: #fff; }
.btn-primary:hover { background: #000; }
.btn-ghost { background: transparent; color: var(--ink); border-color: var(--line); }
.btn-ghost:hover { border-color: var(--ink); }

.stack { margin-top: 56px; }
.stack-label { display: block; font-size: 12px; color: var(--faint); margin-bottom: 12px; }
.stack-list { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 0; }
.stack-item {
  font-size: 12.5px; color: var(--muted);
  border: 1px solid var(--line); background: var(--surface);
  padding: 5px 11px; border-radius: 20px;
}

/* SECTIONS */
.section { padding: 80px 0; border-bottom: 1px solid var(--line); }
.section-head { margin-bottom: 40px; }
.section-index { display: block; font-size: 12.5px; color: var(--faint); margin-bottom: 10px; }
.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(26px, 4.5vw, 34px); font-weight: 600;
  letter-spacing: -.02em; margin: 0; color: var(--ink);
}

/* PROJECTS */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.card {
  display: flex; flex-direction: column;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; padding: 24px; text-decoration: none; color: inherit;
  transition: transform .2s cubic-bezier(.22,.61,.36,1), border-color .2s, box-shadow .2s;
}
.card:hover { transform: translateY(-3px); border-color: #D8D8D1; box-shadow: 0 12px 30px -18px rgba(0,0,0,.25); }
.card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.card-file { font-size: 12.5px; color: var(--accent); }
.card-arrow { color: var(--faint); transition: transform .2s, color .2s; }
.card:hover .card-arrow { transform: translate(2px,-2px); color: var(--ink); }
.card-title { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 600; letter-spacing: -.015em; margin: 0 0 8px; }
.card-desc { font-size: 14.5px; color: var(--muted); line-height: 1.6; margin: 0 0 18px; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; padding: 0; margin: 0; }
.tag { font-size: 11.5px; color: var(--muted); background: var(--bg); border: 1px solid var(--line); padding: 3px 9px; border-radius: 6px; }

/* TIMELINE */
.timeline { list-style: none; padding: 0; margin: 0; }
.tl-item {
  display: grid; grid-template-columns: 130px 1fr; gap: 24px;
  padding: 26px 0; border-top: 1px solid var(--line);
}
.tl-item:first-child { border-top: 0; padding-top: 0; }
.tl-range { font-size: 12.5px; color: var(--faint); padding-top: 3px; }
.tl-role { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 600; letter-spacing: -.01em; margin: 0 0 6px; }
.tl-org { color: var(--muted); font-weight: 400; }
.tl-note { font-size: 14.5px; color: var(--muted); margin: 0; max-width: 42em; }

/* CONTACT */
.contact-lead { font-size: 18px; color: var(--ink); max-width: 30em; margin: 0 0 28px; }
.contact-links { display: flex; flex-direction: column; gap: 2px; }
.contact-row {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 4px; border-bottom: 1px solid var(--line);
  text-decoration: none; color: var(--ink); font-size: 15.5px;
  transition: padding .2s, color .2s;
}
.contact-row:hover { padding-left: 12px; color: var(--accent); }
.contact-row .row-arrow { margin-left: auto; color: var(--faint); transition: transform .2s; }
.contact-row:hover .row-arrow { transform: translate(2px,-2px); color: var(--accent); }

/* FOOTER */
.footer { display: flex; justify-content: space-between; padding: 32px 0 48px; }
.footer .mono { font-size: 12px; color: var(--faint); }

/* FOCUS */
.pf-root a:focus-visible, .pf-root button:focus-visible {
  outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 6px;
}

@media (max-width: 680px) {
  .nav-links { display: none; }
  .nav-toggle { display: inline-flex; }
  .grid { grid-template-columns: 1fr; }
  .tl-item { grid-template-columns: 1fr; gap: 8px; }
  .hero { padding: 64px 0 64px; }
  .section { padding: 60px 0; }
}

@media (prefers-reduced-motion: reduce) {
  .pf-root * { transition: none !important; animation: none !important; }
}
`;
