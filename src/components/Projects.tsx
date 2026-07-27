import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  date: string;
  stack: string[];
  bullets: string[];
  github?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "RAG Customer Support Chatbot",
    date: "Mar 2026",
    stack: [
      "FastAPI", "ChromaDB", "Groq (Llama 3.3 70B)", "PostgreSQL",
      "Redis", "Next.js", "Whisper", "ElevenLabs",
    ],
    bullets: [
      "Adaptive RAG pipeline with LLM-based intent routing, query rewriting, confidence scoring, and answer verification.",
      "Voice-enabled chatbot: Whisper STT + ElevenLabs TTS, Google OAuth 2.0 with Redis-backed sessions, real-time feedback collection.",
      "MLOps: Prometheus metrics, MLflow experiment tracking, Streamlit admin dashboard for response-quality analysis.",
    ],
    github: "https://github.com/AhmedElsenosy",
    featured: true,
  },
  {
    title: "Edu-System-Management",
    date: "Jul – Sep 2025",
    stack: ["FastAPI", "MongoDB", "Socket.IO"],
    bullets: [
      "50+ REST APIs for an educational management system with real-time biometric attendance (ZKTeco) via Socket.IO.",
      "Exam pipeline: OpenCV bubble-sheet detection, PDF conversion, ArUco marker support.",
      "Optimized for 5,000+ students — compound indexing, pagination, bulk operations.",
    ],
  },
  {
    title: "Xtra Blog",
    date: "Feb 2026",
    stack: ["Python", "Django", "SQLite"],
    bullets: [
      "Full CRUD blog with custom auth, password management, comment moderation, and media upload.",
      "Tags, full-text search, related posts, pagination — responsive UI.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[11px] uppercase tracking-[0.15em] text-accent font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Projects
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold text-text mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Things I&apos;ve built.
        </h2>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={`group rounded-xl border p-6 md:p-8 transition-all duration-200 ${
                project.featured
                  ? "border-accent/20 bg-accent-strong/[0.03] hover:border-accent/35"
                  : "border-border bg-surface/50 hover:border-border-light hover:bg-surface"
              }`}
            >
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="text-lg md:text-xl font-semibold text-text"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span
                        className="text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full font-medium"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <span
                    className="text-xs text-muted"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.date}
                  </span>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors shrink-0"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <ExternalLink size={12} />
                    Source
                  </a>
                )}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] text-text-secondary bg-void/60 border border-border rounded-md"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2" role="list">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[14px] text-text-secondary leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="text-accent/50 mt-0.5 shrink-0" aria-hidden="true">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
