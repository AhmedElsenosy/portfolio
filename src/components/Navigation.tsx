"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14 md:h-16">
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <div className="w-7 h-7 rounded-md bg-accent-strong/15 border border-accent-strong/25 flex items-center justify-center group-hover:bg-accent-strong/25 transition-colors">
            <span
              className="text-accent text-xs font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AE
            </span>
          </div>
          <span
            className="hidden sm:block text-xs text-muted tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            / engineer
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] text-text-secondary hover:text-text transition-colors font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-text-secondary hover:text-accent transition-colors"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed inset-0 top-14 bg-void/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 pt-10 gap-7" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-text hover:text-accent transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
