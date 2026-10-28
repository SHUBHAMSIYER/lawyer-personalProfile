import type { PointerEvent } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const headline = ["A legal matter,", "a clear path forward."];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 120]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--hx", `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty("--hy", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="hero" aria-labelledby="hero-title" onPointerMove={onPointerMove}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-spot" />
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-layout">
        <motion.div className="hero-content" style={reduceMotion ? undefined : { y: contentY, opacity: fade }}>
          <motion.p
            className="hero-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="pulse-dot" aria-hidden="true" />
            Now accepting consultations across Maharashtra
          </motion.p>

          <h1 id="hero-title" className="hero-title">
            {headline.map((line, li) => (
              <span key={line} className="line">
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    className={`word${li === 1 ? " word--accent" : ""}`}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.9, ease, delay: 0.15 + li * 0.25 + wi * 0.07 }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            Praxis helps individuals and businesses understand what kind of legal help they
            need, then introduces them to independent counsel suited to the issue, district, and
            language. Your initial consultation is complimentary.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.85 }}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              Schedule initial consultation
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#process" className="btn btn-ghost btn-lg">See how it works</a>
          </motion.div>

          <motion.ul
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <li><strong>Free</strong> first consultation</li>
            <li><strong>3</strong> languages</li>
            <li><strong>36</strong> districts reachable</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
        >
          <div className="hero-frame">
            <motion.img
              src="/images/hero-columns.jpg"
              alt="Classical stone columns of a court building"
              style={reduceMotion ? undefined : { y: imageY }}
              fetchPriority="high"
            />
            <div className="hero-frame-shade" />
          </div>

          <div className="glass-chip chip--top">
            <span className="chip-label">Initial consultation</span>
            <span className="chip-value">Complimentary</span>
          </div>
          <div className="glass-chip chip--bottom">
            <span className="chip-label">We speak</span>
            <span className="chip-value">English · हिंदी · मराठी</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
