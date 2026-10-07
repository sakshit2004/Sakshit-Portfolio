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
  { label: "writing", href: "#writing" },
  { label: "reading", href: "#reading" },
  { label: "gallery", href: "#gallery" },
  { label: "contact", href: "#contact" },
];

const MY_ARTICLES = [
  {
    title: "Thoughts on Decision Models: JEV, KEV, etc.",
    url: "https://www.linkedin.com/pulse/thoughts-decision-models-jev-kev-etc-sakshit-sharma-jaaac/",
  },
];

const BOOKS = [
  {
    title: "Zero to One",
    author: "Peter Thiel",
    note: "Build something new, not a copy — and aim for a monopoly on a problem nobody else sees.",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    note: "Build, measure, learn. Test demand before you build the whole thing.",
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    note: "Nike's founder on the years of near-bankruptcy before anyone knew the name.",
  },
  {
    title: "Elon Musk",
    author: "Ashlee Vance",
    note: "How Tesla and SpaceX were built — and what that level of intensity costs.",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    note: "Taste, focus and product obsession, warts and all.",
  },
];

const ESSAYS = [
  { title: "Do Things That Don't Scale",     author: "Paul Graham", url: "https://paulgraham.com/ds.html"           },
  { title: "Startup = Growth",               author: "Paul Graham", url: "https://paulgraham.com/growth.html"       },
  { title: "Schlep Blindness",               author: "Paul Graham", url: "https://paulgraham.com/schlep.html"       },
  { title: "Default Alive or Default Dead?", author: "Paul Graham", url: "https://paulgraham.com/aord.html"         },
  { title: "Founder Mode",                   author: "Paul Graham", url: "https://paulgraham.com/foundermode.html"  },
  { title: "How to Do Great Work",           author: "Paul Graham", url: "https://paulgraham.com/greatwork.html"    },
  { title: "How to Get Startup Ideas",       author: "Paul Graham", url: "https://paulgraham.com/startupideas.html" },
  { title: "Why to Not Not Start a Startup", author: "Paul Graham", url: "https://paulgraham.com/notnot.html"       },
  { title: "The Only Thing That Matters",    author: "Marc Andreessen", url: "https://pmarchive.com/guide_to_startups_part4.html" },
  { title: "Services: The New Software",     author: "Julien Bek, Sequoia", url: "https://sequoiacap.com/article/services-the-new-software" },
  { title: "How To Be Successful",           author: "Sam Altman",  url: "https://blog.samaltman.com/how-to-be-successful" },
  { title: "Startup Playbook",               author: "Sam Altman",  url: "https://playbook.samaltman.com/" },
  { title: "Fast",                           author: "Patrick Collison", url: "https://patrickcollison.com/fast" },
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

      {/* ── Writing ──────────────────────────────── */}
      <section id="writing">
        <h2>Writing</h2>
        <ul className="plain-list">
          {MY_ARTICLES.map(article => (
            <li key={article.url}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <hr className="section-divider" />

      {/* ── Reading ──────────────────────────────── */}
      <section id="reading">
        <h2>Books I recommend</h2>
        <ul className="plain-list">
          {BOOKS.map(book => (
            <li key={book.title}>
              <span className="item-title">{book.title}</span>
              <span className="item-meta"> — {book.author}</span>
              <p className="item-note">{book.note}</p>
            </li>
          ))}
        </ul>

        <h2 className="subsection-heading">Essays I recommend</h2>
        <ul className="plain-list">
          {ESSAYS.map(essay => (
            <li key={essay.url}>
              <a href={essay.url} target="_blank" rel="noopener noreferrer">{essay.title}</a>
              <span className="item-meta"> — {essay.author}</span>
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
