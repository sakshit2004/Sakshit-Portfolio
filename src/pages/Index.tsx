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
  { label: "built",   href: "#built"   },
  { label: "reading", href: "#reading" },
  { label: "writing", href: "#writing" },
  { label: "gallery", href: "#gallery" },
  { label: "contact", href: "#contact" },
];

const BUILDS = [
  {
    title: "Government document pipeline",
    where: "Ontopical → Sovra (KKR)",
    url: "https://www.linkedin.com/company/ontopical/",
    tag: "acquired",
    what:
      "15 people were hand-extracting fields from RFPs, bids and council minutes. I'm rebuilding it as a cheapest-first pipeline: a classifier trained on 15 years of their labelled work, then regex → BM25 → vectors, with an LLM only on the last few chunks.",
    result: "Target: ~10¢ per notice. Ontopical was acquired by Sovra (KKR-backed) along the way.",
  },
  {
    title: "Multi-agent AI governance scorer",
    where: "AIgovsandbox",
    url: "https://www.linkedin.com/company/aigovsandbox/",
    tag: "0→1 · shut down",
    what:
      "Scored enterprise AI projects against NIST, the EU AI Act and other frameworks — one retrieval agent per framework, an intake agent routing client documents between them.",
    result: "Shipped two enterprise deployments, then shut it down: governance was a nice-to-have. Lesson: prove demand before writing code.",
  },
  {
    title: "Support bot retrieval",
    where: "Xenara AI",
    url: "https://www.linkedin.com/company/xenara-inc/",
    tag: "founding eng · pivoted",
    what:
      "Hybrid keyword + vector retrieval for a B2B support bot where a wrong answer was worse than no answer.",
    result: "Well-funded competitors got there first; the company pivoted to custom AI work.",
  },
  {
    title: "Billing & reconciliation",
    where: "Pyralume",
    url: "https://www.linkedin.com/company/pyralume/",
    tag: "payments",
    what: "Stripe billing, payment-rail integrations and webhook-driven reconciliation.",
    result: "30 customers billed and reconciled without anyone chasing invoices.",
  },
];

const ALSO = [
  { label: "City of Ottawa — data eng, $150K/yr in licensing cut", url: "https://www.linkedin.com/company/city-of-ottawa/" },
  { label: "Hack the Hill — engineering lead",                    url: "https://www.linkedin.com/company/hackthehill/"   },
];

// TODO: replace the placeholder entries below with real books.
const BOOKS = [
  { title: "Book title", author: "Author", take: "One line on what stuck with you." },
  { title: "Book title", author: "Author", take: "" },
];

// TODO: replace the placeholder entries below with real articles.
const ARTICLES = [
  { title: "Article title", date: "2025", url: "#" },
  { title: "Article title", date: "2025", url: "#" },
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

      {/* ── Built ────────────────────────────────── */}
      <section id="built">
        <h2>Things I've built</h2>
        <div className="build-list">
          {BUILDS.map(b => (
            <div key={b.title} className="build-entry">
              <div className="build-header">
                <span className="build-title">{b.title}</span>
                <span className="build-tag">{b.tag}</span>
              </div>
              <a href={b.url} target="_blank" rel="noopener noreferrer" className="build-where">
                {b.where}
              </a>
              <p className="build-what">{b.what}</p>
              <p className="build-result">→ {b.result}</p>
            </div>
          ))}
        </div>
        <p className="build-also">
          Also:{" "}
          {ALSO.map((x, i) => (
            <React.Fragment key={x.label}>
              {i > 0 && <span className="sep"> · </span>}
              <a href={x.url} target="_blank" rel="noopener noreferrer">{x.label}</a>
            </React.Fragment>
          ))}
        </p>
      </section>

      <hr className="section-divider" />

      {/* ── Reading ──────────────────────────────── */}
      <section id="reading">
        <h2>Reading</h2>
        <ul className="plain-list">
          {BOOKS.map((book, i) => (
            <li key={i}>
              <span className="item-title">{book.title}</span>
              <span className="item-meta"> — {book.author}</span>
              {book.take && <p className="item-note">{book.take}</p>}
            </li>
          ))}
        </ul>
      </section>

      <hr className="section-divider" />

      {/* ── Writing ──────────────────────────────── */}
      <section id="writing">
        <h2>Writing</h2>
        <ul className="plain-list">
          {ARTICLES.map((article, i) => (
            <li key={i} className="article-row">
              <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
              <span className="item-date">{article.date}</span>
            </li>
          ))}
        </ul>
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
