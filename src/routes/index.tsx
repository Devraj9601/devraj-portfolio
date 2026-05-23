import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Experience } from "@/components/Experience";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { Particles } from "@/components/Particles";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "P. Devraj — ECE Student | VLSI, FPGA & IoT Engineer" },
      {
        name: "description",
        content:
          "Portfolio of P. Devraj — Electronics & Communication Engineering student specializing in VLSI, FPGA, RTL Design, Physical Design and IoT. View projects, skills and resume.",
      },
      { property: "og:title", content: "P. Devraj — VLSI / FPGA / IoT Portfolio" },
      { property: "og:description", content: "ECE Student • VLSI & FPGA Enthusiast • RTL Design • IoT Developer." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

export function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <CursorGlow />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
