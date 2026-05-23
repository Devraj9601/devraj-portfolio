import { motion } from "framer-motion";
import { Section } from "./Section";
import GIETU from "@/assets/gietu.jpg";
import schoolImage from "@/assets/education-school.svg";

const education = [
  {
    institution: "GIET University",
    degree: "B.Tech in Electronics & Communication Engineering",
    date: "2022 — 2026",
    description: "Passionate about learning VLSI, digital electronics, FPGA development, and integrating Agentic AI into next-generation hardware and semiconductor projects.",    
    score: "CGPA: 9.24",
    image: GIETU,
  },
  {
    institution: "Maharshi Gurukul Higher Secondary School",
    degree: "Intermediate — Science Stream",
    date: "2020 — 2022",
    description: "Completed higher secondary education on Physics, Chemistry, Mathematics, Biology, English, Odia.",
    score: "Percentage: 88.6%",
    image: schoolImage,
  },
  {
    institution: "Jagannath Public School",
    degree: "Matriculation",
    date: "2019 — 2020",
    description: "Studied at Jagannath Public School Gunupur; completed Class 10 board certification through ST Xavier High School.",
    score: "Percentage: 86.6%",
    image: schoolImage,
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Background"
      title="Education"
      subtitle="A foundation built on engineering, technology and real-world system design."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {education.map((entry, index) => (
          <motion.article
            key={entry.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl border border-neon/10 overflow-hidden hover:border-neon/40 hover:neon-glow transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={entry.image}
                alt={`${entry.institution} image`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            </div>
            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-neon font-mono mb-2">{entry.date}</div>
              <p className="text-sm text-muted-foreground mb-2">{entry.institution}</p>
              <h3 className="text-xl font-semibold text-foreground">{entry.degree}</h3>
              <p className="mt-4 text-sm leading-6 text-foreground">{entry.description}</p>
              {entry.score ? (
                <p className="mt-3 text-sm font-semibold text-neon"><span className="mr-2">✓</span>{entry.score}</p>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
