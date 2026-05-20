import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">P.Devraj</span>
            <span className="text-neon">.</span>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground max-w-xl">
            <p>🚀 Grow. Innovate. Help others rise.</p>
            <p>😊 Keep learning • Keep building • Keep smiling.</p>
            <p className="text-xs text-muted-foreground/80">© 2026 — Thanks for visiting my portfolio. Discover elegant VLSI craftsmanship, bold FPGA projects, and forward-thinking hardware ideas.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:devraj@example.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-neon hover:neon-border transition-all"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-neon text-primary-foreground flex items-center justify-center neon-glow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
