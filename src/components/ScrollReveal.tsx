"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  /** Which side the section slides in from */
  from?: Direction;
  className?: string;
}

export default function ScrollReveal({
  children,
  from = "right",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — show immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // If the section is already in view on mount (e.g. page loaded mid-scroll
    // or user jumped here via a hash link), reveal it immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    // threshold: 0 — trigger as soon as ANY part of the section enters the
    // viewport. A ratio-based threshold breaks on sections taller than the
    // screen, since e.g. 12% of them can never be visible at once.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${from === "left" ? "reveal-from-left" : "reveal-from-right"} ${
        visible ? "is-revealed" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
