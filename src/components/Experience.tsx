import { motion } from "framer-motion";
import { Award, Code2, Crown, Users } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Award,
    title: "District Science Mela — Second Prize",
    org: "District Level Competition",
    desc: "Recognized for innovative electronics project demonstrating real-world impact.",
  },
  {
    icon: Code2,
    title: "Smart India Hackathon Participation",
    org: "SIH — National Hackathon",
    desc: "Participated in India's flagship hackathon, building a hardware-software solution under 36 hours.",
  },
  {
    icon: Crown,
    title: "Topper of Batch",
    org: "GIET University — ECE Department",
    desc: "Maintained the highest CGPA of 9.38 across the cohort while leading multiple projects.",
  },
  {
    icon: Users,
    title: "IoT Team Lead",
    org: "Engineering Projects Group",
    desc: "Led a multidisciplinary IoT team — owning architecture, firmware reviews and deployment.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience & Achievements">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/40 to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-10 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
            } pl-12 md:pl-0`}
          >
            <div
              className={`absolute top-4 w-4 h-4 rounded-full bg-neon ring-4 ring-background ${
                i % 2 === 0 ? "left-2 md:left-auto md:-right-2" : "left-2 md:-left-2"
              }`}
              style={{ boxShadow: "0 0 16px oklch(0.85 0.2 200)" }}
            />
            <div className="glass rounded-2xl p-6 border border-neon/10 hover:border-neon/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon border border-neon/30">
                  <it.icon className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-neon">{it.org}</span>
              </div>
              <h3 className="font-bold text-lg mb-1">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
