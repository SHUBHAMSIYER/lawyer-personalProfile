import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Vertical travel as a percentage of the image height; keep at or below 10 to stay within the overscan. */
  strength?: number;
  eager?: boolean;
};

export function ParallaxImage({ src, alt, className = "", strength = 10, eager = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`parallax ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={reduceMotion ? undefined : { y }}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
