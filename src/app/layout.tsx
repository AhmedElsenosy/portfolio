import type { Metadata } from "next";
import { Outfit, DM_Sans, Fira_Code } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ahmed Elsenosy — Generative AI Engineer",
  description:
    "Generative AI Engineer building production LLM applications — RAG pipelines, multi-agent systems with LangGraph, evaluation with RAGAS. Backend-first approach with Python, FastAPI, and Django.",
  keywords: [
    "Generative AI",
    "LLM Engineer",
    "RAG",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Ahmed Elsenosy",
  ],
  authors: [{ name: "Ahmed Elsenosy" }],
  creator: "Ahmed Elsenosy",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ahmed Elsenosy — Generative AI Engineer",
    description:
      "Building production LLM applications — RAG pipelines, multi-agent systems, and evaluation frameworks shipped as real products.",
    siteName: "Ahmed Elsenosy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Elsenosy — Generative AI Engineer",
    description:
      "Building production LLM applications — RAG pipelines, multi-agent systems, and evaluation frameworks shipped as real products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${firaCode.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
