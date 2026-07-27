import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201017798979",
    icon: MessageCircle,
    cta: "Send a message",
    accent: "group-hover:text-success group-hover:border-success/30",
  },
  {
    label: "Email",
    href: "mailto:ahmedelsenosy487@gmail.com",
    icon: Mail,
    cta: "ahmedelsenosy487@gmail.com",
    accent: "group-hover:text-accent group-hover:border-accent/30",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-elsenosy/",
    icon: LinkedinIcon,
    cta: "Connect",
    accent: "group-hover:text-accent group-hover:border-accent/30",
  },
  {
    label: "GitHub",
    href: "https://github.com/AhmedElsenosy",
    icon: GithubIcon,
    cta: "View repositories",
    accent: "group-hover:text-text group-hover:border-text/20",
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[11px] uppercase tracking-[0.15em] text-accent font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Contact
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-text mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s connect.
        </h2>
        <p
          className="text-text-secondary mb-12 max-w-md text-[15px]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Open to GenAI roles, collaborations, and conversations about
          building LLM systems that work in production.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
          {CONTACTS.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className={`group flex items-center gap-4 p-4 rounded-xl border border-border transition-all duration-200 hover:bg-surface ${c.accent}`}
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0 group-hover:border-current/20 transition-colors">
                  <Icon size={18} className="text-text-secondary group-hover:text-current transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className="block text-sm font-semibold text-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.label}
                  </span>
                  <span
                    className="block text-xs text-muted truncate"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {c.cta}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted group-hover:text-current transition-colors shrink-0"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
