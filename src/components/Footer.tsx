export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          className="text-xs text-muted"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © {new Date().getFullYear()} Ahmed Elsenosy
        </span>
        <span
          className="text-xs text-muted/40"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Next.js · Tailwind CSS · Vercel
        </span>
      </div>
    </footer>
  );
}
