import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { Metric } from "./components/Metric";
import { Reveal } from "./components/Reveal";
import { practiceAreas } from "./data/practice";

const team = [
  {
    name: "Govind Rao Patil",
    role: "Senior Partner · Litigation",
    bio:
      "Sample: LL.B. (Pune), 22 years at the Bar. Maharashtra & Goa Roll No. MAH/FAKE/2003/0142",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
    alt: "Stock photo: professional in suit (placeholder — not G.R. Patil)",
  },
  {
    name: "Adv. Priya Deshmukh",
    role: "Partner · Corporate",
    bio: "Sample: B.Com, LL.B. Company secretary liaison, FEMA and startup advisory.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
    alt: "Stock photo: professional woman (placeholder)",
  },
  {
    name: "Adv. Sameer Kulkarni",
    role: "Associate · Property",
    bio: "Sample: Conveyancing, RERA, and documentary due diligence for developers.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop",
    alt: "Stock photo: professional man (placeholder)",
  },
];

const testimonials = [
  {
    quote:
      "They explained our options in Marathi and English. The property dispute settled at mediation — we never had to go to trial.",
    footer: "— R.S., Pune",
    note: "(fictional client)",
  },
  {
    quote:
      "Responsive on WhatsApp, clear invoices, and no surprises in court dates. Our vendor recovery matter closed in four months.",
    footer: "— Apex Tools Pvt. Ltd.",
    note: "(fictional company)",
  },
  {
    quote:
      "Sensitive handling of our family matter. Paperwork was thorough and the team always returned calls the same day.",
    footer: "— Anonymous",
    note: "(fictional)",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop",
    alt: "Stock photo: signing documents (placeholder)",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop",
    alt: "Stock photo: handshake (placeholder)",
  },
  {
    src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=900&q=80&auto=format&fit=crop",
    alt: "Stock photo: library shelves (placeholder)",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711862-e3b97375f902?w=900&q=80&auto=format&fit=crop",
    alt: "Stock photo: team at table (placeholder)",
  },
];

export default function App() {
  const statementRef = useRef<HTMLElement>(null);
  const [statementActive, setStatementActive] = useState(false);
  const [formNote, setFormNote] = useState<string | null>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const el = statementRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress =
        1 - Math.min(1, Math.max(0, (rect.top + rect.height * 0.5) / viewH));
      setStatementActive(progress > 0.35);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormNote(
      "Thank you. Demo only — connect Formspree or a backend to receive inquiries."
    );
    e.currentTarget.reset();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-orb hero-orb--1" />
            <div className="hero-orb hero-orb--2" />
            <div className="hero-grid" />
            <div className="hero-grain" />
          </div>
          <div className="hero-layout">
            <div className="hero-content">
              <Reveal>
                <p className="hero-eyebrow">G.R. Patil &amp; Associates · Est. 2003</p>
              </Reveal>
              <h1 id="hero-title" className="hero-title">
                <motion.span
                  className="line"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                >
                  <span>Clarity in law.</span>
                </motion.span>
                <motion.span
                  className="line"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                >
                  <span>Confidence in outcome.</span>
                </motion.span>
              </h1>
              <Reveal delay={0.2}>
                <p className="hero-lead">
                  <strong>Sample copy.</strong> Govind Rao Patil and his team represent
                  businesses and families across Pune, Mumbai, and Maharashtra — from contract
                  disputes to property and succession matters.
                </p>
              </Reveal>
              <Reveal className="hero-actions" delay={0.28}>
                <a href="#contact" className="btn btn-primary">Schedule a consultation</a>
                <a href="#practice" className="btn btn-ghost">Explore practice areas</a>
              </Reveal>
            </div>
            <Reveal className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop"
                  alt="Stock photo: modern office interior (placeholder)"
                  width={1200}
                  height={900}
                />
                <p className="image-credit">Demo stock image · Unsplash</p>
              </div>
            </Reveal>
          </div>
          <div className="hero-scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        <section
          ref={statementRef}
          className={`statement${statementActive ? " is-active" : ""}`}
          aria-label="Firm statement"
        >
          <div className="statement-track">
            <p className="statement-text">
              “We do not sell fear — we offer facts, options, and a plan.” — Sample quote
              attributed to Govind R. Patil (fictional demo content).
            </p>
          </div>
        </section>

        <section id="practice" className="section practice">
          <div className="container">
            <Reveal className="section-head">
              <p className="section-eyebrow">Practice areas</p>
              <h2>Where we focus our expertise</h2>
            </Reveal>
            <div className="practice-grid">
              {practiceAreas.map((area) => (
                <Reveal key={area.index} className="practice-card">
                  <div className="practice-card-media">
                    <img src={area.image} alt={area.alt} width={800} height={500} loading="lazy" />
                  </div>
                  <div className="practice-card-body">
                    <span className="card-index">{area.index}</span>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section approach">
          <div className="container approach-layout">
            <Reveal className="approach-copy">
              <p className="section-eyebrow">Our approach</p>
              <h2>Strategy first. Advocacy always.</h2>
              <p>
                Every matter begins with listening. We map facts, risks, and objectives before
                recommending a path — whether negotiation, mediation, or courtroom advocacy.
              </p>
              <ul className="approach-list">
                <li>Transparent fee structures and timelines</li>
                <li>Direct access to senior counsel</li>
                <li>Research-driven arguments and documentation</li>
              </ul>
            </Reveal>
            <Reveal className="approach-visual">
              <div className="metric-stack">
                <Metric target={22} label="Years of practice (sample)" />
                <Metric target={840} label="Matters advised (sample)" />
                <Metric target={18} label="Courts & tribunals (sample)" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="team" className="section team">
          <div className="container">
            <Reveal className="section-head">
              <p className="section-eyebrow">Our team</p>
              <h2>Counsel you can reach directly</h2>
              <p className="section-lead">Fictional profiles and stock portraits for layout demo only.</p>
            </Reveal>
            <div className="team-grid">
              {team.map((member) => (
                <Reveal key={member.name} className="team-card">
                  <img src={member.image} alt={member.alt} width={600} height={750} loading="lazy" />
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" aria-label="Client testimonials">
          <div className="container">
            <Reveal className="section-head">
              <p className="section-eyebrow">Client voices</p>
              <h2>Sample testimonials</h2>
            </Reveal>
            <div className="testimonial-grid">
              {testimonials.map((t) => (
                <Reveal key={t.footer} className="testimonial">
                  <p>“{t.quote}”</p>
                  <footer>
                    {t.footer} <span>{t.note}</span>
                  </footer>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-layout">
            <Reveal className="about-portrait">
              <div className="portrait-frame">
                <img
                  src="https://images.unsplash.com/photo-1505664194779-6beaceb93769?w=800&q=80&auto=format&fit=crop"
                  alt="Stock photo: courthouse columns (placeholder)"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal className="about-copy">
              <p className="section-eyebrow">About the firm</p>
              <h2>G.R. Patil &amp; Associates</h2>
              <p className="about-role">Advocates &amp; Legal Consultants · Pune</p>
              <p>
                <strong>Demo content.</strong> Founded in 2003 as a solo chamber, the practice grew
                into a boutique firm serving corporates, cooperatives, and individuals. We maintain
                a liaison desk in Mumbai (Fort) for High Court matters.
              </p>
              <p>
                Sample credentials: Bar Council of Maharashtra &amp; Goa · Registered office SR No.
                FAKE-BA-8821 · PAN AABCG1234F (illustrative only).
              </p>
              <ul className="about-facts">
                <li>Languages: English, Hindi, Marathi</li>
                <li>Consultation: in-person, video, or phone</li>
                <li>First 30-minute intake: sample fee ₹2,500 + GST</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section gallery" aria-label="Office gallery">
          <Reveal className="gallery-scroll">
            {galleryImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} width={900} height={600} loading="lazy" />
            ))}
          </Reveal>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-layout">
            <div className="contact-intro">
              <Reveal>
                <p className="section-eyebrow">Contact</p>
                <h2>Let’s discuss your matter</h2>
                <p>
                  Share a brief description of your situation. We respond within one business day
                  to schedule a confidential consultation.
                </p>
              </Reveal>
              <Reveal>
                <address className="contact-details">
                  <div>
                    <strong>Pune (main office)</strong>
                    <p>
                      Office 302, Patil Chambers<br />
                      SB Road, Shivajinagar<br />
                      Pune, Maharashtra 411005
                    </p>
                  </div>
                  <div>
                    <strong>Mumbai (liaison)</strong>
                    <p>Chamber 18, High Court Extension<br />Fort, Mumbai 400032</p>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>
                      <a href="tel:+912020001234">+91 20 2000 1234</a> (Pune)<br />
                      <a href="tel:+912220001234">+91 22 2000 1234</a> (Mumbai)
                    </p>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:hello@demo-grpatil.example">hello@demo-grpatil.example</a>
                    </p>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon–Sat, 10:00 – 19:00 IST · Sun by appointment</p>
                  </div>
                </address>
              </Reveal>
              <Reveal className="contact-map">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop"
                  alt="Stock photo: city map aesthetic (placeholder — not a real map)"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
                <p className="image-credit">Replace with Google Maps embed before launch</p>
              </Reveal>
            </div>
            <Reveal>
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label>
                  <span>How can we help?</span>
                  <textarea name="message" rows={4} required />
                </label>
                <button type="submit" className="btn btn-primary btn-full">Send message</button>
                {formNote && <p className="form-note" role="status">{formNote}</p>}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} G.R. Patil &amp; Associates · Demo website.</p>
          <p className="footer-disclaimer">
            All names, bar numbers, phone numbers, and testimonials are fictional samples. Stock
            photos from Unsplash. Not legal advice. Replace with real data before publishing.
          </p>
        </div>
      </footer>
    </>
  );
}
