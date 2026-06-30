import React, { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { AchievementsGallery } from "@/components/AchievementsGallery";

const NAME = "Sakshit Sharma";
const TAGLINE = "Startups · Product · Engineering";
const BIO =
  "I build AI systems and data infrastructure. I've been a founding engineer at multiple AI startups, built data pipelines and ML systems for the City of Ottawa, and lead engineering at Canada's largest student hackathon community. I've spoken at the CDAO Canada conference, Airflow Summit, and Algonquin College, and was an Ottawa semi-finalist at CEOx1DAY. I care about systems that work at scale and problems that matter.";

const SOCIALS = [
  { label: "GitHub",   url: "https://github.com/sakshit2004",                        blank: true  },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sakshitsharma/",            blank: true  },
  { label: "Email",    url: "mailto:sakshit2004@gmail.com",                          blank: false },
];

const NAV = [
  { label: "experience", href: "#experience" },
  { label: "gallery",    href: "#gallery"    },
  { label: "contact",    href: "#contact"    },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Ontopical",
    note: "Got acquired by SOVRA backed by private equity KKR",
    period: "June 2025 – Present",
    description:
      "Built PDF extraction APIs (PyMuPDF + Tesseract OCR), multi-agent LLM pipelines for automated government document collection, full-stack internal tools (Django + React/TypeScript), and Jira-to-Cursor MCP automation that routes tickets to cloud agents end to end.",
    tools:
      "Python, PyMuPDF, Tesseract, Django, React, TypeScript, LLMs, Multi-agent Systems, MCP, Jira, Cursor",
    url: "https://www.linkedin.com/company/ontopical/",
  },
  {
    role: "Founding Product Engineer",
    company: "AIgovsandbox",
    note: "Fully built & launched — shut down after low market demand",
    period: "January 2025 – June 2025",
    description:
      "Set the roadmap and shipped the MVP solo from idea to launch, leading a team of 3. Owned the full-stack build (React/TypeScript on Vercel, FastAPI on AWS) and drove two enterprise deployments without handoffs.",
    tools:
      "Python, FastAPI, React, TypeScript, OpenAI, Pinecone, LangGraph, AWS, Vercel, NLP, LLM, Vector Databases, Prompt Engineering",
    url: "https://www.linkedin.com/company/aigovsandbox/",
  },
  {
    role: "Founding Engineer",
    company: "Xenara AI",
    note: "Pivoted from customer support SaaS to custom AI solutions for businesses",
    period: "November 2024 – June 2025",
    description:
      "Led a team of 5 shipping AI assistant features — embeddings, GPT models, real-time summarization — and a hybrid retrieval pipeline (keyword + vector) that improved chatbot response quality by 60% in production.",
    tools:
      "Python, OpenAI API, GPT models, Vector Embeddings, FastAPI, MongoDB, Pinecone, Docker, AWS, Git/GitHub, Jira",
    url: "https://www.linkedin.com/company/xenara-inc/",
  },
  {
    role: "Data Engineer",
    company: "City of Ottawa",
    note: "Modernizing legacy data infrastructure to cloud-native technology",
    period: "May 2024 – December 2024",
    description:
      "Migrated IBM DataStage ETL to SAP BW/4HANA ($150K in annual licensing savings) and automated Azure DevOps migrations with REST APIs and Bash scripting, cutting licensing costs by $3,500/month.",
    tools:
      "Python, SQL, Bash, IBM DataStage, SAP BW/4HANA, Azure DevOps, Azure Data Factory, Microsoft Fabric, Power BI, REST APIs",
    url: "https://www.linkedin.com/company/city-of-ottawa/",
  },
  {
    role: "Vice President of Software Development",
    company: "Capital Technology Network",
    note: "Largest hackathon in Ottawa & one of the largest in Canada",
    period: "November 2024 – May 2025",
    description:
      "Led 5 developers shipping open-source web apps (TypeScript, React, Tailwind, Vercel), with Cloudflare securing endpoints against scraping.",
    tools:
      "TypeScript, React, Tailwind CSS, Vercel, Cloudflare, GitHub Actions, Open Source",
    url: "https://www.linkedin.com/company/hackthehill/",
  },
  {
    role: "Data Architect",
    company: "Pyralume",
    note: "Built payment infrastructure for a startup",
    period: "January 2025 – April 2025",
    description:
      "Owned money-movement infrastructure end to end — Stripe billing, payment-rail integrations, and webhook-driven reconciliation that automated cash collection for 30 customers.",
    tools:
      "TypeScript, Stripe, Python, PostgreSQL, Webhooks, AWS",
    url: "https://www.linkedin.com/company/pyralume/",
  },
];


export default function Index() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) { toast.error("Enter a valid email."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent!");
      setTimeout(() => setSuccess(false), 3500);
    }, 1200);
  };

  return (
    <div className="page-wrap">

      {/* ── Nav ──────────────────────────────────── */}
      <nav className="top-nav">
        <span className="nav-name">SS</span>
        <div className="nav-links">
          {NAV.map(n => <a key={n.label} href={n.href}>{n.label}</a>)}
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────── */}
      <header className="hero">
        <h1>{NAME}</h1>
        <p className="tagline">{TAGLINE}</p>
        <p className="bio">I love solving hard problems with ambitious people.</p>
        <div className="social-row">
          {SOCIALS.map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <span className="sep">·</span>}
              <a
                href={s.url}
                target={s.blank ? "_blank" : undefined}
                rel={s.blank ? "noopener noreferrer" : undefined}
              >
                {s.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </header>

      <hr className="section-divider" />

      {/* ── Experience ───────────────────────────── */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="exp-entry">
              <div className="exp-header">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-sep">&nbsp;at&nbsp;</span>
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="exp-company">
                  {exp.company}
                </a>
                <span className="exp-period">{exp.period}</span>
              </div>
              {exp.note && <p className="exp-note">{exp.note}</p>}
              <p className="exp-desc">{exp.description}</p>
              <p className="exp-tools">{exp.tools}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Gallery ──────────────────────────────── */}
      <section id="gallery">
        <h2>Gallery</h2>
        <AchievementsGallery />
      </section>

      <hr className="section-divider" />

      {/* ── Contact ──────────────────────────────── */}
      <section id="contact">
        <h2>Contact</h2>
        <p className="contact-intro">
          Reach me at{" "}
          <a href="mailto:sakshit2004@gmail.com">sakshit2004@gmail.com</a>
          {" "}or use the form below.
        </p>

        {success ? (
          <div className="success-msg">
            <CheckCircle size={16} />
            <span>Message sent — I'll be in touch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  type="text"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                rows={5}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="What's on your mind?"
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading
                ? <><Loader2 size={13} className="spin-icon" /> Sending…</>
                : "Send message →"}
            </button>
          </form>
        )}
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-links">
          {SOCIALS.map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <span className="sep">·</span>}
              <a
                href={s.url}
                target={s.blank ? "_blank" : undefined}
                rel={s.blank ? "noopener noreferrer" : undefined}
              >
                {s.label}
              </a>
            </React.Fragment>
          ))}
        </div>
        <p className="footer-copy">© 2025 Sakshit Sharma</p>
      </footer>

    </div>
  );
}
