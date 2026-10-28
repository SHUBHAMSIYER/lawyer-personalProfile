import { useState } from "react";
import type { FormEvent } from "react";
import { Faq } from "./components/Faq";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Metric } from "./components/Metric";
import { ParallaxImage } from "./components/ParallaxImage";
import { Process } from "./components/Process";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollText } from "./components/ScrollText";
import { Spotlight } from "./components/Spotlight";
import { districtOptions, issueAreas, issueCategoryOptions } from "./data/practice";

const marqueeItems = [
  "Property & RERA",
  "Family & Succession",
  "Consumer Disputes",
  "Employment",
  "Cheque Dishonour",
  "Society Redevelopment",
  "Tenancy",
  "Contracts & Notices",
  "MSME Recovery",
] as const;

const services = [
  {
    index: "01",
    title: "Structured intake",
    body: "A confidential review of your situation in plain language, in English, Hindi, or Marathi. We ask focused questions so nothing important is missed.",
  },
  {
    index: "02",
    title: "Legal orientation",
    body: "The options open to you, the likely process, the documents to gather, and realistic next steps. Orientation, not a substitute for full representation.",
  },
  {
    index: "03",
    title: "Counsel introduction",
    body: "Where you need representation, we introduce you to an independent advocate or specialist matched to your district, language, and type of matter.",
  },
];

const steps = [
  {
    index: "01",
    title: "Initial consultation",
    body: "Complimentary, by phone, video, or in person. You describe the matter and we ask the questions that matter.",
  },
  {
    index: "02",
    title: "Assessment",
    body: "We classify the issue and outline the paths: negotiation, the right forum, documentation, or specialist counsel.",
  },
  {
    index: "03",
    title: "Introduction",
    body: "If you need representation, we facilitate an introduction to independent counsel aligned with your district and matter.",
  },
  {
    index: "04",
    title: "Follow-through",
    body: "Optional paid advisory or coordination. Representation is always between you and the counsel you choose to engage.",
  },
];

const testimonials = [
  {
    quote:
      "I did not know whether my builder dispute belonged in RERA or civil court. One conversation gave me a clear route and the right introduction.",
    name: "R.S.",
    place: "Pune",
  },
  {
    quote:
      "They explained everything in Marathi and told us exactly which documents to bring. We stopped guessing and started acting.",
    name: "S.K.",
    place: "Nashik",
  },
  {
    quote:
      "Our vendor recovery matter was routed to a commercial specialist within two days. The process was professional and unhurried.",
    name: "Apex Tools Pvt. Ltd.",
    place: "Thane",
  },
];

const faqs = [
  {
    q: "Is the initial consultation really free?",
    a: "Yes. The first consultation is complimentary and carries no obligation. If you later choose optional paid advisory, or engage counsel we introduce, fees are agreed in writing before any work begins.",
  },
  {
    q: "Is Praxis a law firm?",
    a: "No. Praxis provides legal orientation and facilitates introductions. Representation, court appearances, and legal advice on your specific matter are provided by the independent advocate you choose to engage.",
  },
  {
    q: "How do you decide which counsel to introduce?",
    a: "We consider the type of matter, the forum it is likely to reach, your district, your preferred language, and practical factors such as urgency. You are always free to decline an introduction or choose someone else.",
  },
  {
    q: "Is what I share confidential?",
    a: "Yes. Information you share is used only to understand your matter and arrange an introduction, and is shared with counsel only with your consent.",
  },
  {
    q: "Which parts of Maharashtra do you cover?",
    a: "Consultations are available by phone and video across all districts of Maharashtra, and in person in Pune and Mumbai by appointment.",
  },
];

export default function App() {
  const [formNote, setFormNote] = useState<string | null>(null);
  const year = new Date().getFullYear();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormNote(
      "Thank you. This is a demo form: no data was sent. Connect Formspree, Cal.com, or a backend to receive requests."
    );
    e.currentTarget.reset();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <Header />

      <main id="main">
        <Hero />

        <Marquee items={marqueeItems} />

        <section id="services" className="section">
          <div className="container">
            <Reveal className="section-head">
              <p className="section-eyebrow">Services</p>
              <h2>
                Advisory first. <em>Counsel when you need representation.</em>
              </h2>
            </Reveal>
            <div className="service-grid">
              {services.map((s, i) => (
                <Reveal key={s.index} delay={i * 0.08}>
                  <Spotlight className="card service-card">
                    <span className="card-index">{s.index}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-band" aria-label="Our purpose">
          <ParallaxImage src="/images/band-library.jpg" alt="" className="band-bg" />
          <div className="band-shade" />
          <div className="container">
            <ScrollText
              className="statement-text"
              text="Nobody should have to guess which lawyer, forum, or process fits their problem. We provide the orientation, then the introduction."
            />
          </div>
        </section>

        <section id="process" className="section">
          <div className="container process-layout">
            <div className="process-aside">
              <Reveal className="section-head">
                <p className="section-eyebrow">How we work</p>
                <h2>
                  A defined process, <em>from first call to next step.</em>
                </h2>
              </Reveal>
              <Reveal>
                <ParallaxImage
                  src="/images/process-justice.jpg"
                  alt="Statue of Lady Justice holding scales"
                  className="process-image"
                  strength={6}
                />
              </Reveal>
            </div>
            <Process steps={steps} />
          </div>
          <div className="container">
            <div className="metric-row">
              <Metric target={36} label="Districts reachable by phone and video" suffix="" />
              <Metric target={40} label="Independent counsel in network (sample figure)" />
              <Metric target={500} label="Intakes completed (sample figure)" />
            </div>
          </div>
        </section>

        <section id="issues" className="section section--alt">
          <div className="container">
            <Reveal className="section-head section-head--row">
              <div>
                <p className="section-eyebrow">Issue areas</p>
                <h2>
                  Matters we help <em>you navigate.</em>
                </h2>
              </div>
              <p className="section-lead">
                Not sure where yours fits? Choose “General / Not Sure” and we will classify it
                for you.
              </p>
            </Reveal>
            <div className="issue-grid">
              {issueAreas.map((area, i) => (
                <Reveal key={area.index} delay={(i % 3) * 0.08}>
                  <article className="issue-card">
                    <img src={area.image} alt={area.alt} loading="lazy" decoding="async" />
                    <div className="issue-shade" />
                    <div className="issue-body">
                      <span className="card-index">{area.index}</span>
                      <h3>{area.title}</h3>
                      <div className="issue-more">
                        <div>
                          <p>{area.description}</p>
                          <p className="issue-next">{area.nextStep}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-layout">
            <Reveal>
              <ParallaxImage
                src="/images/about-gateway.jpg"
                alt="Gateway of India, Mumbai, reflected in rainwater"
                className="about-image"
                strength={8}
              />
            </Reveal>
            <Reveal className="about-copy">
              <p className="section-eyebrow">About Praxis</p>
              <h2>
                Built for Maharashtra. <em>Built on clarity.</em>
              </h2>
              <p>
                Praxis exists for people who should not have to guess which advocate or forum fits
                their problem. We focus on orientation and connection, so you can act with
                clarity and without wasted visits.
              </p>
              <p>
                Counsel we introduce are independent professionals. You engage them directly, on
                their terms, and you remain free to choose someone else.
              </p>
              <ul className="about-facts">
                <li>
                  <strong>Complimentary</strong>
                  <span>initial consultation</span>
                </li>
                <li>
                  <strong>English · हिंदी · मराठी</strong>
                  <span>consultation languages</span>
                </li>
                <li>
                  <strong>Phone, video, in person</strong>
                  <span>Pune and Mumbai by appointment</span>
                </li>
                <li>
                  <strong>Independent counsel</strong>
                  <span>no obligation to engage</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section section--alt" aria-label="Client testimonials">
          <div className="container">
            <Reveal className="section-head">
              <p className="section-eyebrow">Client voices</p>
              <h2>
                Clarity, <em>in their words.</em>
              </h2>
              <p className="section-lead">Sample testimonials for layout. Replace with real, consented quotes before launch.</p>
            </Reveal>
            <div className="testimonial-grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <Spotlight className="card testimonial">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <p>{t.quote}</p>
                    <footer>
                      <span className="avatar" aria-hidden="true">{t.name.charAt(0)}</span>
                      <span>
                        <strong>{t.name}</strong>
                        <small>{t.place}</small>
                      </span>
                    </footer>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container faq-layout">
            <Reveal className="section-head">
              <p className="section-eyebrow">FAQ</p>
              <h2>
                Questions, <em>answered plainly.</em>
              </h2>
              <p className="section-lead">
                Anything else? Ask during your initial consultation. It costs nothing.
              </p>
            </Reveal>
            <Reveal>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </section>

        <section className="cta-band" aria-label="Book a consultation">
          <ParallaxImage src="/images/cta-towers.jpg" alt="" className="band-bg" />
          <div className="band-shade band-shade--strong" />
          <Reveal className="container cta-inner">
            <h2>
              Speak with us <em>before you decide.</em>
            </h2>
            <p>One conversation can save months of the wrong process.</p>
            <a href="#contact" className="btn btn-primary btn-lg">
              Schedule initial consultation
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </section>

        <section id="contact" className="section">
          <div className="container contact-layout">
            <div className="contact-intro">
              <Reveal>
                <p className="section-eyebrow">Initial consultation</p>
                <h2>
                  Tell us what happened. <em>We'll take it from there.</em>
                </h2>
                <p>
                  Share a brief, confidential summary of your matter. We respond within one
                  business day to confirm a time.
                </p>
              </Reveal>
              <Reveal className="contact-card">
                <img src="/images/contact-mumbai.jpg" alt="Heritage municipal building in Mumbai" loading="lazy" decoding="async" />
                <address className="contact-details">
                  <div>
                    <strong>Locations</strong>
                    <p>Pune and Mumbai by appointment · phone and video statewide</p>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+910000000000">+91 00000 00000</a> (sample)</p>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:consult@praxis-legal.example">consult@praxis-legal.example</a></p>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon–Sat, 10:00 – 19:00 IST</p>
                  </div>
                </address>
              </Reveal>
            </div>
            <Reveal>
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <label>
                    <span>Full name</span>
                    <input type="text" name="name" required autoComplete="name" />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input type="tel" name="phone" required autoComplete="tel" />
                  </label>
                </div>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <div className="form-row">
                  <label>
                    <span>District</span>
                    <select name="district" required defaultValue="">
                      <option value="" disabled>Select</option>
                      {districtOptions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Language</span>
                    <select name="language" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                    </select>
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>Issue category</span>
                    <select name="category" required defaultValue="">
                      <option value="" disabled>Select</option>
                      {issueCategoryOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Urgency</span>
                    <select name="urgency" defaultValue="General enquiry">
                      <option>General enquiry</option>
                      <option>Deadline within 30 days</option>
                      <option>Deadline within 7 days</option>
                    </select>
                  </label>
                </div>
                <label>
                  <span>Brief description</span>
                  <textarea name="message" rows={4} required placeholder="What happened, and what outcome are you hoping for?" />
                </label>
                <label className="check">
                  <input type="checkbox" name="ack" required />
                  <small>
                    I understand the initial consultation is for orientation and routing. Legal
                    representation, if needed, is with independent counsel I choose to engage.
                  </small>
                </label>
                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  Request initial consultation
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
                {formNote && <p className="form-note" role="status">{formNote}</p>}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="logo-glyph" aria-hidden="true">P</span>
            <div>
              <strong>Praxis Legal Advisory</strong>
              <p>Legal orientation and counsel introductions across Maharashtra.</p>
            </div>
          </div>
          <nav className="footer-col" aria-label="Footer">
            <strong>Explore</strong>
            <a href="#services">Services</a>
            <a href="#process">How we work</a>
            <a href="#issues">Issue areas</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-col">
            <strong>Contact</strong>
            <a href="mailto:consult@praxis-legal.example">consult@praxis-legal.example</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <span>Mon–Sat, 10:00 – 19:00 IST</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {year} Praxis Legal Advisory</p>
          <p className="footer-disclaimer">
            Praxis Legal Advisory provides legal information and orientation and facilitates
            introductions to independent legal professionals. It is not a law firm. The initial
            consultation does not create an advocate–client relationship with any network counsel.
            Nothing on this website is legal advice. Demo build: contact details, figures, and
            testimonials are samples. Photography from Unsplash.
          </p>
        </div>
      </footer>
    </>
  );
}
