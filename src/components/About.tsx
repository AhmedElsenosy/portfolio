export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[11px] uppercase tracking-[0.15em] text-accent font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            About
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-text mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Engineer first, then AI.
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left: structured data */}
          <div className="space-y-6">
            {[
              { label: "Focus", value: "Generative AI · LLM Applications" },
              { label: "Stack", value: "Python · FastAPI · Django" },
              { label: "Studying", value: "B.Sc. AI — Kafrelsheikh University" },
              { label: "Based in", value: "Cairo, Egypt" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-border pl-4">
                <dt
                  className="text-[11px] uppercase tracking-[0.12em] text-muted mb-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}
                </dt>
                <dd
                  className="text-sm text-text font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </div>

          {/* Right: narrative */}
          <div
            className="space-y-5 text-text-secondary leading-relaxed text-[15px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <p>
              I&apos;m a Generative AI Engineer with a backend development background.
              My work focuses on building real-world LLM applications — from
              Retrieval-Augmented Generation pipelines to multi-agent systems using
              LangGraph, with proper evaluation through frameworks like RAGAS.
            </p>
            <p>
              A strong foundation in Python, FastAPI, and Django means I take AI
              systems beyond a notebook and ship them as working products — designing
              the API layer, wiring up orchestration, and making sure model outputs
              hold up under evaluation.
            </p>
            <p>
              Currently completing the Digital Egypt Pioneers Initiative (DEPI) — AI
              &amp; Data Science track with the Microsoft Machine Learning Engineer
              program. I&apos;m also planning a 10-month AI graduation capstone with a
              5-person team, focused on Arabic education and AI-powered interview
              coaching.
            </p>
            <p className="text-muted">
              Outside of engineering — chess almost daily, a growing interest in
              Arabic NLP, and a belief that AI tools should have real social impact.
            </p>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
