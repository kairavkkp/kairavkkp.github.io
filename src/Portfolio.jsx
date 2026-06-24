import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Menu,
  X,
  Download,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE
// ─────────────────────────────────────────────────────────────
const PROFILE = {
  name: "Kairav Pithadia",
  role: "Backend & DevOps Engineer",
  blurb:
    "6+ years building scalable async systems on AWS. Specialized in document processing pipelines, event-driven architectures, and AI-powered automation.",
  location: "Ahmedabad, Gujarat, India",
  email: "kairavpithadia13@gmail.com",
  github: "https://github.com/kairavkkp",
  linkedin: "https://linkedin.com/in/kairav-pithadia",
  twitter: "https://x.com/Kairavk",
  resume: "/Kairav_Resume_2026_1.pdf",
  available: true,
};

const STACK = [
  "Python",
  "Go",
  "JavaScript",
  "React",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Terraform",
];

const PROJECTS = [
  {
    file: "merge-pdf/",
    title: "Merge-PDF",
    desc: "CLI tool in Python using PyMuPDF for merging PDFs, EPUBs, and images with customisations. 21K+ downloads on PyPI.",
    tags: ["Python", "PyMuPDF", "CLI", "OSS"],
    href: "https://github.com/kairavkkp/merge-pdf",
  },
  {
    file: "doc-engine/",
    title: "Async Document Engine",
    desc: "Asynchronous invoice processing engine using AWS Step Functions and SQS, processing 500k+ invoices within the first few months at Lighthouz AI.",
    tags: ["AWS Step Functions", "SQS", "Python"],
  },
  {
    file: "classify-extract/",
    title: "Classify-Extract-Audit",
    desc: "End-to-end pipeline using AWS Textract and GPT-4o/4.1 to automate data extraction and logic-based auditing for unstructured carrier documents.",
    tags: ["AWS Textract", "GPT-4o", "Python"],
  },
  {
    file: "invoice-pipeline/",
    title: "Invoice Pipeline",
    desc: "Scalable processing pipelines that reduced invoice handling time from days to minutes — a 99.83% improvement — at Savor Operations.",
    tags: ["Django", "AWS Lambda", "Terraform"],
  },
];

const EXPERIENCE = [
  {
    range: "Dec 2024 — Feb 2026",
    role: "Sr. Full Stack Engineer",
    org: "Lighthouz AI Inc.",
    note: "Architected an async document engine processing 500k+ invoices. Built a Classify-Extract-Audit pipeline with Textract and GPT-4o/4.1. Reduced delivery-to-payment cycle by 24+ hours for brokers and enabled same-day payment for factoring firms.",
  },
  {
    range: "Oct 2022 — Aug 2024",
    role: "Lead Backend Engineer",
    org: "Savor Operations",
    note: "Reduced invoice processing time by 99.83%. Managed cloud infrastructure across multiple AWS accounts with Terraform. Automated CI/CD pipelines via GitHub Actions and built AI integrations using OpenAI models.",
  },
  {
    range: "Oct 2020 — Sept 2022",
    role: "Senior Software Engineer",
    org: "Cilans Systems Pvt. Ltd.",
    note: "Led migration from monolith to microservices for Costa Coffee's Storefront using NestJS, TypeScript, KafkaJS, and GraphQL. Delivered scalable backend solutions across multiple client projects.",
  },
  {
    range: "Jan 2020 — Jul 2020",
    role: "Deep Learning Research Intern",
    org: "CSE, IIT Bombay",
    note: "Document text parsing using OCR and deep learning for E-KYC. Built image-based classifiers for detecting document types.",
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
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
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
      { rootMargin: "-45% 0px -50% 0px" },
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
              <button
                key={s.id}
                className="nav-mobile-link"
                onClick={() => go(s.id)}
              >
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
              {PROFILE.available
                ? "available for work"
                : "currently heads-down"}
              <span className="sep">·</span>
              {PROFILE.location}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="hero-title">{PROFILE.name}</h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="hero-role mono">{PROFILE.role}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className="hero-blurb">{PROFILE.blurb}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => go("projects")}
              >
                View work <ArrowUpRight size={16} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("contact")}>
                Get in touch
              </button>
              <a
                className="btn btn-ghost"
                href={PROFILE.resume}
                download="Kairav_Pithadia_Resume.pdf"
              >
                Resume <Download size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="stack">
              <span className="mono stack-label">// stack</span>
              <ul className="stack-list">
                {STACK.map((t) => (
                  <li key={t} className="mono stack-item">
                    {t}
                  </li>
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
            {PROJECTS.map((p, i) => {
              const Tag = p.href ? "a" : "div";
              const linkProps = p.href
                ? { href: p.href, target: "_blank", rel: "noreferrer" }
                : {};
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <Tag className="card" {...linkProps}>
                    <div className="card-top">
                      <span className="mono card-file">{p.file}</span>
                      {p.href && (
                        <ArrowUpRight size={18} className="card-arrow" />
                      )}
                    </div>
                    <h3 className="card-title">{p.title}</h3>
                    <p className="card-desc">{p.desc}</p>
                    <ul className="tags">
                      {p.tags.map((t) => (
                        <li key={t} className="mono tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </Tag>
                </Reveal>
              );
            })}
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
              Have something you're building, or a role you think I'd be good
              for? The fastest way to reach me is email.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="contact-links">
              <a className="contact-row" href={`mailto:${PROFILE.email}`}>
                <Mail size={18} />
                <span>{PROFILE.email}</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
              <a
                className="contact-row"
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
              <a
                className="contact-row"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
              <a
                className="contact-row"
                href={PROFILE.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={18} />
                <span>X / Twitter</span>
                <ArrowUpRight size={16} className="row-arrow" />
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <span className="mono">
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          {/* <span className="mono footer-built">built with React</span> */}
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
a.card:hover { transform: translateY(-3px); border-color: #D8D8D1; box-shadow: 0 12px 30px -18px rgba(0,0,0,.25); }
.card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.card-file { font-size: 12.5px; color: var(--accent); }
.card-arrow { color: var(--faint); transition: transform .2s, color .2s; }
a.card:hover .card-arrow { transform: translate(2px,-2px); color: var(--ink); }
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
