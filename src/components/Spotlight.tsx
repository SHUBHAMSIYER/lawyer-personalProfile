import type { HTMLAttributes, PointerEvent } from "react";

export function Spotlight({ className = "", children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div className={`spotlight ${className}`} onPointerMove={onPointerMove} {...rest}>
      {children}
    </div>
  );
}
