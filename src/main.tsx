import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
