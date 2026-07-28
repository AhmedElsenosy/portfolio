import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal from="right">
          <About />
        </ScrollReveal>
        <ScrollReveal from="left">
          <Projects />
        </ScrollReveal>
        <ScrollReveal from="right">
          <Skills />
        </ScrollReveal>
        <ScrollReveal from="left">
          <Education />
        </ScrollReveal>
        <ScrollReveal from="right">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
