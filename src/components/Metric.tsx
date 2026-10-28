import { useEffect, useRef, useState } from "react";

type MetricProps = {
  target: number;
  label: string;
  suffix?: string;
};

export function Metric({ target, label, suffix = "+" }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [started, target]);

  return (
    <div className="metric" ref={ref}>
      <span className="metric-value">
        {value}
        {suffix && <span className="metric-suffix">{suffix}</span>}
      </span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
