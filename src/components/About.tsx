import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Cpu, Trophy, Sparkles } from "lucide-react";

const stats = [
  { label: "CGPA", value: "9.24", icon: GraduationCap },
  { label: "Projects Completed", value: "12+", icon: Cpu },
  { label: "Hackathons", value: "2", icon: Trophy },
  { label: "Certifications", value: "8", icon: Sparkles },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Pursuing Physical Design engineer">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm an Electronics & Communication Engineering Graduate at{" "}
            <span className="text-neon font-medium">GIET University</span>, building from the
            transistor up — CMOS layouts in Cadence, RTL in Verilog HDL, FPGA prototypes, and
            connected IoT systems on the ESP32.
          </p>
          <p>
            My obsession is the path from <span className="text-foreground">specification → RTL →
            gates → silicon</span>. I've taped out NAND cells, bridged on-chip protocols like AHB
            and APB, and shipped real-world IoT deployments for smart agriculture and education.
          </p>
          <p>
            Beyond the lab, I lead IoT teams, mentor juniors, <span>  earning the
            District Science Mela Second Prize and SIH Hackathon recognition along the way.</span>
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {["VLSI", "Verilog", "Cadence Virtuoso", "ESP32", "Firebase", "FPGA"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full glass text-xs font-mono text-neon border border-neon/20"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-neon/10 hover:border-neon/40 hover:neon-glow transition-all group"
            >
              <s.icon className="w-7 h-7 text-neon mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
