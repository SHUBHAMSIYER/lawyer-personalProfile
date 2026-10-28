import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "./Reveal";

type Step = { index: string; title: string; body: string };

export function Process({ steps }: { steps: readonly Step[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="timeline" ref={listRef}>
      <div className="timeline-rail" aria-hidden="true">
        <motion.div className="timeline-fill" style={{ scaleY }} />
      </div>
      {steps.map((s) => (
        <Reveal key={s.index} className="timeline-step">
          <span className="timeline-node" aria-hidden="true">{s.index}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
