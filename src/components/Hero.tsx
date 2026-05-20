import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, FolderGit2, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.png";

const roles = ["ECE Graduate", "VLSI Enthusiast", "Physical Design Learner" , "AI in VLSI Explorer"];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i % roles.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 grid-bg">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-neon mb-6">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            Available for VLSI opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">P. Devraj</span>
          </h1>

          <div className="text-2xl md:text-3xl font-display font-medium text-muted-foreground mb-6 h-10">
            <span className="text-neon">{typed}</span>
            <span className="text-neon animate-blink ml-1">|</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Exploring the intersection of Artificial Intelligence and VLSI for 
            next-generation computing
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon text-primary-foreground font-medium neon-glow"
            >
              <FolderGit2 className="w-4 h-4" /> View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-foreground/90 hover:text-neon transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </motion.button>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Devraj9601" },
              { icon: Linkedin, href: "https://linkedin.com/in/ponnitivalasadevraj-i050431" },
              { icon: Mail, href: "devrajp994@gmail.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-neon hover:neon-border transition-all"
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-neon to-accent rounded-full blur-3xl opacity-40 animate-glow" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-neon via-accent to-neon-soft animate-glow">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
              <img
                src={profile}
                alt="P. Devraj — Aspiring Physical Design Engineer with ECE Background"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
