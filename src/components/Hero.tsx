import { ArrowDown } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CAPABILITIES = [
  {
    label: "RAG Pipelines",
    detail: "Adaptive retrieval, intent routing, answer verification",
  },
  {
    label: "Multi-Agent Systems",
    detail: "LangGraph orchestration, tool-use, state machines",
  },
  {
    label: "LLM Evaluation",
    detail: "RAGAS frameworks, confidence scoring, quality metrics",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-16"
    >
      {/* Accent glow — subtle, not a blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, var(--accent-strong), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative py-16 md:py-24">
        {/* Status line */}
        <div className="animate-fade-up flex items-center gap-2.5 mb-10">
          <span
            className="w-2 h-2 rounded-full bg-success"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            aria-hidden="true"
          />
          <span
            className="text-xs text-text-secondary tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Open to opportunities · Cairo, Egypt
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-1">
          <span
            className="block text-text text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ahmed
          </span>
          <span
            className="block text-text text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Elsenosy
          </span>
        </h1>

        {/* Positioning */}
        <p
          className="animate-fade-up delay-2 mt-6 md:mt-8 text-text-secondary text-base md:text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Generative AI Engineer who ships LLM systems as real
          products — not notebooks. Backend-first with Python,
          FastAPI, and Django.
        </p>

        {/* Capability cards — the signature element */}
        <div className="animate-fade-up delay-3 mt-10 md:mt-12 grid sm:grid-cols-3 gap-3 max-w-2xl">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.label}
              className="group border border-border rounded-lg p-4 hover:border-accent/30 hover:bg-surface transition-all duration-200"
            >
              <h3
                className="text-sm font-semibold text-text mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cap.label}
              </h3>
              <p
                className="text-xs text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {cap.detail}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-5 mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent-strong hover:bg-accent-dim text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore work
            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="https://github.com/AhmedElsenosy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text text-sm font-medium transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-auto" />
    </section>
  );
}
