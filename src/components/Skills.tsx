const SKILL_GROUPS = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Django", "Django REST Framework", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    category: "AI / GenAI",
    items: [
      "PyTorch", "TensorFlow", "Scikit-learn", "LLMs", "RAG",
      "RAGAS", "LangChain", "LangGraph", "Vector Databases",
      "Agentic AI", "Prompt Engineering",
    ],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Linux", "Docker", "Azure"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[11px] uppercase tracking-[0.15em] text-accent font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Skills
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold text-text mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tools of the trade.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <h3
                className="text-[11px] uppercase tracking-[0.12em] text-muted mb-4 pb-2 border-b border-border"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-1.5 text-[13px] text-text-secondary border border-border rounded-md hover:border-accent/30 hover:text-text transition-all duration-150"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
