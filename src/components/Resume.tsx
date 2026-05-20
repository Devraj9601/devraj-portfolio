import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Section } from "./Section";
import resumePdf from "@/assets/resume.pdf";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Credentials"
      title="Resume"
      subtitle="Get the full breakdown of my education, projects and certifications."
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass-strong rounded-3xl p-8 md:p-12 border border-neon/20 hover:neon-glow transition-all"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-40 rounded-xl bg-gradient-to-br from-neon/20 to-accent/10 border border-neon/30 flex items-center justify-center shrink-0">
            <FileText className="w-12 h-12 text-neon" />
            <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-md bg-neon text-primary-foreground text-[10px] font-mono font-bold">
              PDF
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">P. Devraj — Resume 2026</h3>
            <p className="text-sm text-muted-foreground mb-6">
              ECE • VLSI / FPGA / RTL Design / IoT
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={resumePdf}
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon text-primary-foreground font-medium neon-glow"
              >
                <Download className="w-4 h-4" /> Download PDF
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-neon/30 hover:neon-border transition-all"
              >
                <Eye className="w-4 h-4" /> Preview
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
