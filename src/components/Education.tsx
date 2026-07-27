interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  description?: string;
  type: "education" | "experience" | "volunteering";
}

const TIMELINE: TimelineEntry[] = [
  {
    period: "2023 – 2027",
    title: "B.Sc. Artificial Intelligence",
    org: "Kafrelsheikh University",
    type: "education",
  },
  {
    period: "Oct 2025 – Jul 2026",
    title: "AI & Data Science Track — Microsoft ML Engineer",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    type: "education",
  },
  {
    period: "Jul – Sep 2025",
    title: "Back-End Intern",
    org: "IN General Startup · On-site",
    description:
      "Built the Edu-System-Management backend (50+ REST APIs) as part of a 2-person team.",
    type: "experience",
  },
  {
    period: "Nov 2024 – Apr 2025",
    title: "Backend Developer & Workshop Instructor",
    org: "KFS Volunteering Student Clubs",
    description:
      "Taught C++ fundamentals to 30+ students and helped promote IEEE initiatives.",
    type: "volunteering",
  },
];

const TYPE_CONFIG: Record<string, { label: string; color: string }> = {
  education: { label: "EDU", color: "text-accent border-accent/30" },
  experience: { label: "WORK", color: "text-success border-success/30" },
  volunteering: { label: "VOL", color: "text-text-secondary border-text-secondary/30" },
};

export default function Education() {
  return (
    <section id="background" aria-labelledby="bg-heading" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[11px] uppercase tracking-[0.15em] text-accent font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Background
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        <h2
          id="bg-heading"
          className="text-3xl md:text-4xl font-bold text-text mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Education &amp; experience.
        </h2>

        <div className="space-y-0">
          {TIMELINE.map((entry, i) => {
            const config = TYPE_CONFIG[entry.type];
            return (
              <div
                key={i}
                className="group relative grid md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-6 border-b border-border first:pt-0 last:border-0"
              >
                {/* Date + badge */}
                <div className="flex items-center md:items-start gap-3 md:flex-col md:gap-2">
                  <span
                    className="text-xs text-muted whitespace-nowrap"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {entry.period}
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-[0.15em] px-1.5 py-0.5 border rounded font-medium ${config.color}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-base font-semibold text-text mb-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    className="text-sm text-text-secondary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {entry.org}
                  </p>
                  {entry.description && (
                    <p
                      className="text-sm text-muted mt-2 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {entry.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
