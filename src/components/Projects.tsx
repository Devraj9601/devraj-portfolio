import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import fpga from "@/assets/project-fpga.png";
import wildlife from "@/assets/project-wildlife.png";
import cmos2_1 from "@/assets/project-cmos2_1.png";


const projects = [
  {
    title: "AHB to APB Bridge on FPGA",
    desc: "Verilog implementation of an AMBA AHB-to-APB protocol bridge, synthesized and verified on FPGA with full waveform analysis.",
    tech: ["Verilog", "FPGA", "AMBA", "Vivado"],
    img: fpga,
    codeUrl: "https://github.com/Devraj9601/ahb-to-apb-bridge.git",
    demoUrl: "https://www.linkedin.com/posts/ponnitivalasadevraj-i050431_fpga-vlsi-verilog-ugcPost-7462492724563456000-DbV2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFByRoQBYq2PXDN6TOw5FUIH-UE8MyITrmw"
    
  } ,

  {
    title: "Wildlife Safety System",
    desc: "Built a smart safety system using sensors and alerts to warn vehicles about animals crossing roads.",
    tech: ["Arduino", "IR Sensor", "C++"],
    img: wildlife,
    codeUrl: "https://github.com/Devraj9601/Wildlife-safety-system.git",
    demoUrl: "https://www.linkedin.com/posts/ponnitivalasadevraj-i050431_innovation-wildlifeconservation-iot-ugcPost-7288233162348941316-9Gq0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFByRoQBYq2PXDN6TOw5FUIH-UE8MyITrmw",
  },

   {
    title: "CMOS Based 2:1 multiplexer with XOR Gate fault detection",
    desc: "Designed a CMOS 2:1 multiplexer with integrated XOR-based fault detection, validated through truth table, schematic design and simulation for reliable digital switching.",
    tech: ["cadence virtuoso", "CMOS", "Digital Logic", "Multiplexer", "Fault Detection"],
    img: cmos2_1,
    codeUrl: "https://github.com/Devraj9601/CMOS-Based-2-1-multiplexer-with-XOR-Gate-fault-detection.git",
   // demoUrl: "https://www.linkedin.com/posts/ponnitivalasadevraj-i050431_innovation-wildlifeconservation-iot-ugcPost-7288233162348941316-9Gq0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFByRoQBYq2PXDN6TOw5FUIH-UE8MyITrmw",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      subtitle="From silicon-level layouts to cloud-connected systems."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-2xl overflow-hidden border border-neon/10 hover:border-neon/50 hover:neon-glow transition-all flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-neon/10 text-neon border border-neon/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-2 border-t border-border">
                <a
                  href={p.codeUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass text-xs hover:text-neon hover:neon-border transition-all"
                >
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
                <a
                  href={p.demoUrl || "#"}
                  target={p.demoUrl ? "_blank" : undefined}
                  rel={p.demoUrl ? "noreferrer" : undefined}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neon/10 text-neon text-xs border border-neon/30 hover:bg-neon hover:text-primary-foreground transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
