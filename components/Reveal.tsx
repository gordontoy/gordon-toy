"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content in a div that fades/slides in when scrolled into view.
 * Renders as a <div>, so it can carry grid layout classes
 * (e.g. <Reveal className="about-grid">) without an extra wrapper.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOn(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} reveal${on ? " on" : ""}`.trim()}>
      {children}
    </div>
  );
}
