import { motion } from "framer-motion";
import { Section } from "./Section";
import verilog from "../assets/verilog.jpeg";
import sv from "../assets/sv.jpeg";
import RTL from "../assets/rtl.png";
import github from "../assets/github.jpeg";
import vivado from "../assets/vivado.jpeg";
import Synopsys from "../assets/synopsys.jpeg";
import c from "../assets/c.png";
import cmos from "../assets/cmos.jpg";
import cadence from "../assets/cadence.png";
import PD from "../assets/PD.png";
import STA from "../assets/STA.jpeg";
import python from "../assets/python.png";
import office from "../assets/office.jpeg";
import Linux from "../assets/Linux.jpeg";
import wos from "../assets/wos.png";
import copilot from "../assets/copilot.jpeg";
import codex from "../assets/codex.jpeg";
import ps from "../assets/ps.jpg";
import bug from "../assets/bug.png";
import vscode from "../assets/vscode.jpg";



const skills = [
  { name: "Verilog HDL", image: verilog },
  { name: "SystemVerilog", image: sv },
  { name: "RTL Design", image: RTL },
  { name: "Github", image: github },
  { name: "Xilinx Vivado", image: vivado },
  { name: "Synopsys Tools", image: Synopsys },
  { name: "C, C++", image: c },
  { name: "CMOS VLSI", image: cmos },
  { name: "Cadence Virtuoso", image: cadence },
  { name: "Physical Design (RTL To GDSII)", image: PD },
  { name: "Static Timing Analysis (STA)", image: STA },
  { name: "Python", image: python },
  { name: "Ms Office", image: office },
  { name: "Linux", image: Linux },
  { name: "Windows OS", image: wos},
  { name: "GitHub Copilot", image: copilot},
  { name: "OpenAI Codex", image: codex },
  { name: "Problem Solving",image: ps },
  { name: "Debugging", image: bug },
  { name: "VS Code", image: vscode},
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="Skills & Tooling"
      subtitle="From gate-level design to cloud-connected firmware."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-neon/10 bg-background/40 p-4 text-center shadow-[0_20px_60px_rgba(0,255,255,0.05)] transition-all hover:border-neon/40 hover:bg-background/70"
          >
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-neon/10 shadow-neon/10 transition-all group-hover:scale-105">
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-3xl text-neon">{skill.icon}</span>
              )}
            </div>
            <p className="text-base font-semibold text-foreground">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
