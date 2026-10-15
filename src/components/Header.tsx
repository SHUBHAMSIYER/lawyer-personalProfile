import { useEffect, useState } from "react";

const links = [
  { href: "#practice", label: "Practice" },
  { href: "#team", label: "Team" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Consult", cta: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#" className="logo" aria-label="G.R. Patil home">
          <span className="logo-mark">GR</span>
          <span className="logo-text">Patil</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.cta ? "nav-cta" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile"
        hidden={!mobileOpen}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
