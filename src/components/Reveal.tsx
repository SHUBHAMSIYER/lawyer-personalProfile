import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ children, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
