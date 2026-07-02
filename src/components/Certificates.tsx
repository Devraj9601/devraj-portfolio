import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Section } from "./Section";
import irjet from "@/assets/certificates/irjet.jpg";
import cttc from "@/assets/certificates/cttc.png";
import blockchain from "@/assets/certificates/blockchain.png";
import eccic from "@/assets/certificates/eccic.png";
import mela from "@/assets/certificates/mela.jpg";
import workshop from "@/assets/certificates/workshop.png";
import rtlnptel from "@/assets/certificates/rtlnptel.png";
import pd_intern from "@/assets/certificates/pd_intern.png";

const certificates = [
  {
    title: "publication Certificate",
    issuer: "IRJET",
    date: "April 2024",
    description: "Paper on 12v DC to 220v AC inverter.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/06_IRJET-publication.jpg",
    image: irjet,
    
  },
  {
    title: "VLSI",
    issuer: "Central Tool Room and Training Centre, Bhubaneswar",
    date: "June 2024",
    description: "Basic circuit design using cmos, layout, and verification using industry-standard tools.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/01_CTTC%20internship.pdf",
    image: cttc,
  },
  {
    title: "Blockchain and its applications certificate",
    issuer: "NPTEL",
    date: "July 2024",
    description: "Completed an NPTEL course on Blockchain Technology, gaining knowledge of decentralized systems, cryptography, smart contracts, consensus mechanisms, and secure digital transactions.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/NPTEL/01_NPTEL%20Blockchain%20and%20its%20Applications.pdf",
    image: blockchain,
  
  },
  {
    title: "Yuva Utsav India @ 2047 – Certificate of Merit",
    issuer: "Nehru Yuva Kendra Rayagada in association with Ministry of Youth Affairs and Sports, Government of India",
    date: "January 2025",
    description: "Awarded for presenting the “Wildlife Safety System” project and securing 2nd position in the district-level Science Mela (Solo) competition.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/5616beea552716b6dbb3fe4687e23090ce46baf6/Science%20mela.jpg",
    image: mela,
  },
  {
    title: "VLSI Design Engineer Skill Competency Certificate",
    issuer: "Electronics Sector Skills Council of India (ESSCI) Recognized by NCVET",
    date: "August 2025",
    description: "Covers the fundamentals of VLSI design, semiconductor circuits, chip design flow, CMOS technology, and hardware design concepts.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/02_ESSCI%20VLSI.pdf",
    image: eccic,
  },
  {
    title: "VLSI Physical Design using Synopsys Tools Workshop Certificate",
    issuer: "VLSIGURU",
    date: "August 2025",
    description: "Hands-on workshop covering VLSI physical design flow using Synopsys tools.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/04_PD_workshop.pdf",
    image: workshop,
  },
  {
    title: "VLSI Design Flow RTL to GDS certificate",
    issuer: "NPTEL",
    date: "October 2025",
    description: "Covers the complete VLSI chip design flow from RTL design to GDSII generation.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/NPTEL/02_VLSI%20Design%20Flow_%20RTL%20to%20GDS.pdf",
    image: rtlnptel,
  
  },
  {
    title: "Hands on Training Program on Full custom and Semi custom IC Design using Cadence EDA Tools certificate",
    issuer: "GIET University",
    date: "October 2025",
    description: "Hands-on training on full custom and semi-custom IC design using Cadence EDA tools.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/03_internship-certificate.jpg",
    image: pd_intern,
  },
];

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Achievements"
      title="Certificates & Awards"
      subtitle="Professional certifications and recognitions earned through dedicated learning."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => {
          return (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl border border-neon/10 hover:border-neon/50 hover:neon-glow transition-all p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center text-neon border border-neon/20 group-hover:neon-glow transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-neon uppercase tracking-widest">{cert.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors flex-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
              <p className="text-sm leading-6 text-foreground mb-6 flex-1">{cert.description}</p>

              <a
                href={cert.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-neon/10 text-neon text-sm font-medium border border-neon/30 hover:bg-neon hover:text-primary-foreground transition-all"
              >
                <FileText className="w-4 h-4" /> Preview Certificate
              </a>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
