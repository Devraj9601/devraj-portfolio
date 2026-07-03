import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, FolderGit2, Mail, Github, Linkedin, GraduationCap, Cpu, Trophy, Sparkles, ExternalLink, FileText, Award, Code2, Crown, Users, Download, Eye, MapPin, Send, ArrowUp } from "lucide-react";
const appCss = "/assets/styles-DHn9wdDc.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];
function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -80 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass-strong py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-7xl px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => go("home"), className: "font-display font-bold text-xl tracking-tight" }),
          /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => go(l.id),
              className: `relative px-4 py-2 text-sm transition-colors ${active === l.id ? "text-neon" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                l.label,
                active === l.id && /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    layoutId: "nav-active",
                    className: "absolute inset-x-3 -bottom-0.5 h-0.5 bg-neon rounded-full",
                    style: { boxShadow: "0 0 12px oklch(0.85 0.2 200)" }
                  }
                )
              ]
            }
          ) }, l.id)) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => go("contact"),
              className: "hidden lg:inline-flex px-5 py-2 rounded-full glass border border-neon/40 text-sm font-medium hover:neon-glow transition-all",
              children: "Hire Me"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "lg:hidden text-neon", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.ul,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "lg:hidden glass-strong mt-3 mx-6 rounded-2xl overflow-hidden",
            children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => go(l.id),
                className: `w-full text-left px-6 py-3 ${active === l.id ? "text-neon bg-white/5" : "text-muted-foreground"}`,
                children: l.label
              }
            ) }, l.id))
          }
        ) })
      ]
    }
  );
}
const profile = "/assets/profile-CKKcGWaH.png";
const roles = ["ECE Graduate", "VLSI Enthusiast", "Physical Design Learner", "AI in VLSI Explorer"];
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
      del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}
function Hero() {
  const typed = useTyping();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-28 pb-16 px-6 grid-bg", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-32 w-96 h-96 bg-neon/20 rounded-full blur-3xl animate-float" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float",
        style: { animationDelay: "2s" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-neon mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-neon animate-pulse" }),
              "Available for VLSI opportunities"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-[1.05] mb-4", children: [
              "Hi, I'm ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Ponntitvalasa Devraj" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-2xl md:text-3xl font-display font-medium text-muted-foreground mb-6 h-10", children: [
              /* @__PURE__ */ jsx("span", { className: "text-neon", children: typed }),
              /* @__PURE__ */ jsx("span", { className: "text-neon animate-blink ml-1", children: "|" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed", children: "Exploring the intersection of Artificial Intelligence and VLSI for next-generation computing" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-10", children: [
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.97 },
                  onClick: () => go("projects"),
                  className: "group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon text-primary-foreground font-medium neon-glow",
                  children: [
                    /* @__PURE__ */ jsx(FolderGit2, { className: "w-4 h-4" }),
                    " View Projects"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.97 },
                  onClick: () => go("contact"),
                  className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-foreground/90 hover:text-neon transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                    " Contact Me"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: [
              { icon: Github, href: "https://github.com/Devraj9601" },
              { icon: Linkedin, href: "https://linkedin.com/in/ponnitivalasadevraj-i050431" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=devrajp994@gmail.com" }
            ].map((s, i) => /* @__PURE__ */ jsx(
              motion.a,
              {
                href: s.href,
                target: "_blank",
                rel: "noreferrer",
                whileHover: { y: -4, scale: 1.1 },
                className: "w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-neon hover:neon-border transition-all",
                children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5" })
              },
              i
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.85 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.2 },
          className: "relative mx-auto",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-neon to-accent rounded-full blur-3xl opacity-40 animate-glow" }),
            /* @__PURE__ */ jsx("div", { className: "relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-neon via-accent to-neon-soft animate-glow", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full overflow-hidden border-4 border-background", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: profile,
                alt: "Ponntitvalasa Devraj — Aspiring Physical Design Engineer with ECE Background",
                width: 768,
                height: 768,
                className: "w-full h-full object-cover"
              }
            ) }) })
          ]
        }
      )
    ] })
  ] });
}
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsx("section", { id, className: "relative py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "mb-14 text-center",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-block text-xs font-mono tracking-[0.3em] text-neon mb-3 uppercase", children: [
            "// ",
            eyebrow
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: title }) }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: subtitle })
        ]
      }
    ),
    children
  ] }) });
}
const stats = [
  { label: "CGPA", value: "9.24", icon: GraduationCap },
  { label: "Projects Completed", value: "4+", icon: Cpu },
  { label: "Hackathons", value: "2", icon: Trophy },
  { label: "Certifications", value: "8", icon: Sparkles }
];
function About() {
  return /* @__PURE__ */ jsx(Section, { id: "about", eyebrow: "About Me", title: "Aspiring Physical Design Engineer", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "space-y-5 text-muted-foreground leading-relaxed",
        children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "I'm an Electronics & Communication Engineering Graduate at",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-neon font-medium", children: "GIET University" }),
            ", building from the transistor up — CMOS layouts in Cadence, RTL in Verilog HDL, FPGA prototypes, and connected IoT systems on the ESP32."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "My obsession is the path from ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "specification → RTL → gates → silicon" }),
            ". I've taped out NAND cells, bridged on-chip protocols like AHB and APB, and shipped real-world IoT deployments for smart agriculture and education."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Beyond the lab, I lead IoT teams, mentor juniors, ",
            /* @__PURE__ */ jsx("span", { children: "  earning the District Science Mela Second Prize and SIH Hackathon recognition along the way." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-4", children: ["VLSI", "Verilog", "Cadence Virtuoso", "ESP32", "Firebase", "FPGA"].map((t) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "px-3 py-1 rounded-full glass text-xs font-mono text-neon border border-neon/20",
              children: t
            },
            t
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "glass rounded-2xl p-6 border border-neon/10 hover:border-neon/40 hover:neon-glow transition-all group",
        children: [
          /* @__PURE__ */ jsx(s.icon, { className: "w-7 h-7 text-neon mb-3 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-gradient font-display", children: s.value }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) });
}
const verilog = "/assets/verilog-D9WYiN5x.jpeg";
const sv = "/assets/sv-BtRGxY63.jpeg";
const RTL = "/assets/rtl-Do1ubq6O.png";
const github = "/assets/github-Bxlw2N1R.jpeg";
const vivado = "/assets/vivado-CE2_rlMY.jpeg";
const Synopsys = "/assets/synopsys-BCmdj9qa.jpeg";
const c = "/assets/c-B4xusQIE.png";
const cmos = "/assets/cmos-BS1mf_hH.jpg";
const cadence = "/assets/cadence-DRzPQrIS.png";
const PD = "/assets/PD-BF3rarbP.png";
const STA = "/assets/STA-Cm4oNhUC.jpeg";
const python = "/assets/python-BlHPfwTl.png";
const office = "data:image/jpeg;base64,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";
const Linux = "/assets/Linux-YbKhlWwX.jpeg";
const wos = "/assets/wos-BMHKEtr9.png";
const copilot = "/assets/copilot-BodfCOL4.jpeg";
const codex = "/assets/codex-jewtq3mF.jpeg";
const ps = "/assets/ps-6lDjKhKn.jpg";
const bug = "/assets/bug-DyafwdlE.png";
const vscode = "/assets/vscode-BJ3LlNxC.jpg";
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
  { name: "Windows OS", image: wos },
  { name: "GitHub Copilot", image: copilot },
  { name: "OpenAI Codex", image: codex },
  { name: "Problem Solving", image: ps },
  { name: "Debugging", image: bug },
  { name: "VS Code", image: vscode }
];
function Skills() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Tech Stack",
      title: "Skills & Tooling",
      subtitle: "From gate-level design to cloud-connected firmware.",
      children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: skills.map((skill, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.04 },
          whileHover: { y: -6 },
          className: "group rounded-3xl border border-neon/10 bg-background/40 p-4 text-center shadow-[0_20px_60px_rgba(0,255,255,0.05)] transition-all hover:border-neon/40 hover:bg-background/70",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-neon/10 shadow-neon/10 transition-all group-hover:scale-105", children: skill.image ? /* @__PURE__ */ jsx(
              "img",
              {
                src: skill.image,
                alt: skill.name,
                className: "h-full w-full object-cover"
              }
            ) : null }),
            /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground", children: skill.name })
          ]
        },
        skill.name
      )) })
    }
  );
}
const GIETU = "/assets/gietu-CoXQpiqz.jpg";
const jps_school = "/assets/JPS-DYcIhkCi.png";
const education = [
  {
    institution: "GIET University",
    degree: "B.Tech in Electronics & Communication Engineering",
    date: "2022 — 2026",
    description: "Passionate about learning VLSI, digital electronics, FPGA development, and integrating Agentic AI into next-generation hardware and semiconductor projects.",
    score: "CGPA: 9.24",
    image: GIETU
  },
  {
    institution: "Maharshi Gurukul Higher Secondary School",
    degree: "Intermediate — Science Stream",
    date: "2020 — 2022",
    description: "Completed higher secondary education on Physics, Chemistry, Mathematics, Biology, English, Odia.",
    score: "Percentage: 88.6%",
    image: GIETU
  },
  {
    institution: "Jagannath Public School",
    degree: "Matriculation",
    date: "2019 — 2020",
    description: "Studied at Jagannath Public School Gunupur; completed Class 10 board certification through ST Xavier High School.",
    score: "Percentage: 86.6%",
    image: jps_school
  }
];
function Education() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "education",
      eyebrow: "Academic Background",
      title: "Education",
      subtitle: "A foundation built on engineering, technology and real-world system design.",
      children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 lg:grid-cols-3", children: education.map((entry, index) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "group glass rounded-2xl border border-neon/10 overflow-hidden hover:border-neon/40 hover:neon-glow transition-all transform-gpu hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: entry.image,
                  alt: `${entry.institution} image`,
                  loading: "lazy",
                  className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-neon font-mono mb-2", children: entry.date }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: entry.institution }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground", children: entry.degree }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-6 text-foreground", children: entry.description }),
              entry.score ? /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm font-semibold text-neon", children: [
                /* @__PURE__ */ jsx("span", { className: "mr-2", children: "✓" }),
                entry.score
              ] }) : null
            ] })
          ]
        },
        entry.institution
      )) })
    }
  );
}
const fpga = "/assets/project-fpga-B8a1p8Hr.png";
const wildlife = "/assets/project-wildlife-DMsbMn4i.png";
const cmos2_1 = "/assets/project-cmos2_1-DvH6bg49.png";
const projects = [
  {
    title: "AHB to APB Bridge on FPGA",
    desc: "Verilog implementation of an AMBA AHB-to-APB protocol bridge, synthesized and verified on FPGA with full waveform analysis.",
    tech: ["Verilog", "FPGA", "AMBA", "Vivado"],
    img: fpga,
    codeUrl: "https://github.com/Devraj9601/ahb-to-apb-bridge.git",
    demoUrl: "https://www.linkedin.com/posts/ponnitivalasadevraj-i050431_fpga-vlsi-verilog-ugcPost-7462492724563456000-DbV2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFByRoQBYq2PXDN6TOw5FUIH-UE8MyITrmw"
  },
  {
    title: "Wildlife Safety System",
    desc: "Built a smart safety system using sensors and alerts to warn vehicles about animals crossing roads.",
    tech: ["Arduino", "IR Sensor", "C++"],
    img: wildlife,
    codeUrl: "https://github.com/Devraj9601/Wildlife-safety-system.git",
    demoUrl: "https://www.linkedin.com/posts/ponnitivalasadevraj-i050431_innovation-wildlifeconservation-iot-ugcPost-7288233162348941316-9Gq0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFByRoQBYq2PXDN6TOw5FUIH-UE8MyITrmw"
  },
  {
    title: "CMOS Based 2:1 multiplexer with XOR Gate fault detection",
    desc: "Designed a CMOS 2:1 multiplexer with integrated XOR-based fault detection, validated through truth table, schematic design and simulation for reliable digital switching.",
    tech: ["cadence virtuoso", "CMOS", "Digital Logic", "Multiplexer", "Fault Detection"],
    img: cmos2_1,
    codeUrl: "https://github.com/Devraj9601/CMOS-Based-2-1-multiplexer-with-XOR-Gate-fault-detection.git"
    // demoUrl: "https://www.linkedin.com/posts/ponnitivalasadevraj-i050431_innovation-wildlifeconservation-iot-ugcPost-7288233162348941316-9Gq0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFByRoQBYq2PXDN6TOw5FUIH-UE8MyITrmw",
  }
];
function Projects() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "projects",
      eyebrow: "Selected Work",
      title: "Projects",
      subtitle: "From silicon-level layouts to cloud-connected systems.",
      children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          whileHover: { y: -8 },
          className: "group glass rounded-2xl overflow-hidden border border-neon/10 hover:border-neon/50 hover:neon-glow transition-all flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: p.img,
                  alt: p.title,
                  loading: "lazy",
                  width: 800,
                  height: 600,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 group-hover:text-neon transition-colors", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 flex-1", children: p.desc }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: p.tech.map((t) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-neon/10 text-neon border border-neon/20",
                  children: t
                },
                t
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2 border-t border-border", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: p.codeUrl || "#",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass text-xs hover:text-neon hover:neon-border transition-all",
                    children: [
                      /* @__PURE__ */ jsx(Github, { className: "w-3.5 h-3.5" }),
                      " Code"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: p.demoUrl || "#",
                    target: p.demoUrl ? "_blank" : void 0,
                    rel: p.demoUrl ? "noreferrer" : void 0,
                    className: "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neon/10 text-neon text-xs border border-neon/30 hover:bg-neon hover:text-primary-foreground transition-all",
                    children: [
                      /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" }),
                      " Demo"
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        p.title
      )) })
    }
  );
}
const irjet = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const cttc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const blockchain = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const eccic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const mela = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const workshop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const rtlnptel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const pd_intern = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBAgEF6ykAAAAASUVORK5CYII=";
const certificates = [
  {
    title: "publication Certificate",
    issuer: "IRJET",
    date: "April 2024",
    description: "Paper on 12v DC to 220v AC inverter.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/06_IRJET-publication.jpg",
    image: irjet
  },
  {
    title: "VLSI",
    issuer: "Central Tool Room and Training Centre, Bhubaneswar",
    date: "June 2024",
    description: "Basic circuit design using cmos, layout, and verification using industry-standard tools.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/01_CTTC%20internship.pdf",
    image: cttc
  },
  {
    title: "Blockchain and its applications certificate",
    issuer: "NPTEL",
    date: "July 2024",
    description: "Completed an NPTEL course on Blockchain Technology, gaining knowledge of decentralized systems, cryptography, smart contracts, consensus mechanisms, and secure digital transactions.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/NPTEL/01_NPTEL%20Blockchain%20and%20its%20Applications.pdf",
    image: blockchain
  },
  {
    title: "Yuva Utsav India @ 2047 – Certificate of Merit",
    issuer: "Nehru Yuva Kendra Rayagada in association with Ministry of Youth Affairs and Sports, Government of India",
    date: "January 2025",
    description: "Awarded for presenting the “Wildlife Safety System” project and securing 2nd position in the district-level Science Mela (Solo) competition.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/5616beea552716b6dbb3fe4687e23090ce46baf6/Science%20mela.jpg",
    image: mela
  },
  {
    title: "VLSI Design Engineer Skill Competency Certificate",
    issuer: "Electronics Sector Skills Council of India (ESSCI) Recognized by NCVET",
    date: "August 2025",
    description: "Covers the fundamentals of VLSI design, semiconductor circuits, chip design flow, CMOS technology, and hardware design concepts.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/02_ESSCI%20VLSI.pdf",
    image: eccic
  },
  {
    title: "VLSI Physical Design using Synopsys Tools Workshop Certificate",
    issuer: "VLSIGURU",
    date: "August 2025",
    description: "Hands-on workshop covering VLSI physical design flow using Synopsys tools.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/04_PD_workshop.pdf",
    image: workshop
  },
  {
    title: "VLSI Design Flow RTL to GDS certificate",
    issuer: "NPTEL",
    date: "October 2025",
    description: "Covers the complete VLSI chip design flow from RTL design to GDSII generation.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/NPTEL/02_VLSI%20Design%20Flow_%20RTL%20to%20GDS.pdf",
    image: rtlnptel
  },
  {
    title: "Hands on Training Program on Full custom and Semi custom IC Design using Cadence EDA Tools certificate",
    issuer: "GIET University",
    date: "October 2025",
    description: "Hands-on training on full custom and semi-custom IC design using Cadence EDA tools.",
    previewUrl: "https://github.com/Devraj9601/certificates/blob/d69643a795df5166e00a848918b2a0d7bcc9712c/internships-and-workshops/03_internship-certificate.jpg",
    image: pd_intern
  }
];
function Certificates() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "certificates",
      eyebrow: "Achievements",
      title: "Certificates & Awards",
      subtitle: "Professional certifications and recognitions earned through dedicated learning.",
      children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: certificates.map((cert, i) => {
        return /* @__PURE__ */ jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.08 },
            whileHover: { y: -8 },
            className: "group glass rounded-2xl border border-neon/10 hover:border-neon/50 hover:neon-glow transition-all p-6 flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center text-neon border border-neon/20 group-hover:neon-glow transition-all", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-neon uppercase tracking-widest", children: cert.date })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 group-hover:text-neon transition-colors flex-1", children: cert.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: cert.issuer }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-6 text-foreground mb-6 flex-1", children: cert.description }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: cert.previewUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-neon/10 text-neon text-sm font-medium border border-neon/30 hover:bg-neon hover:text-primary-foreground transition-all",
                  children: [
                    /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                    " Preview Certificate"
                  ]
                }
              )
            ]
          },
          cert.title
        );
      }) })
    }
  );
}
const items = [
  {
    icon: Award,
    title: "District Science Mela — Second Prize",
    org: "District Level Competition",
    desc: "Recognized for innovative electronics project demonstrating real-world impact."
  },
  {
    icon: Code2,
    title: "Smart India Hackathon Participation",
    org: "SIH — National Hackathon",
    desc: "Participated in India's flagship hackathon, building a hardware-software solution under 36 hours."
  },
  {
    icon: Crown,
    title: "Topper of Batch",
    org: "GIET University — ECE Department",
    desc: "Maintained the highest CGPA of 9.38 across the cohort while leading multiple projects."
  },
  {
    icon: Users,
    title: "IoT Team Lead",
    org: "Engineering Projects Group",
    desc: "Led a multidisciplinary IoT team — owning architecture, firmware reviews and deployment."
  }
];
function Experience() {
  return /* @__PURE__ */ jsx(Section, { id: "experience", eyebrow: "Journey", title: "Experience & Achievements", children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/40 to-transparent" }),
    items.map((it, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: `relative mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-0`,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute top-4 w-4 h-4 rounded-full bg-neon ring-4 ring-background ${i % 2 === 0 ? "left-2 md:left-auto md:-right-2" : "left-2 md:-left-2"}`,
              style: { boxShadow: "0 0 16px oklch(0.85 0.2 200)" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 border border-neon/10 hover:border-neon/40 transition-all", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon border border-neon/30", children: /* @__PURE__ */ jsx(it.icon, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-neon", children: it.org })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-1", children: it.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: it.desc })
          ] })
        ]
      },
      it.title
    ))
  ] }) });
}
const resumePdf = "/assets/resume-CwFgBSWt.pdf";
function Resume() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "resume",
      eyebrow: "Credentials",
      title: "Resume",
      subtitle: "Get the full breakdown of my education, projects and certifications.",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "max-w-3xl mx-auto glass-strong rounded-3xl p-8 md:p-12 border border-neon/20 hover:neon-glow transition-all",
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-32 h-40 rounded-xl bg-gradient-to-br from-neon/20 to-accent/10 border border-neon/30 flex items-center justify-center shrink-0", children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-12 h-12 text-neon" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2 px-2 py-1 rounded-md bg-neon text-primary-foreground text-[10px] font-mono font-bold", children: "PDF" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-1", children: "Ponntitvalasa Devraj — Resume 2026" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "ECE • VLSI / FPGA / RTL Design / IoT" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center md:justify-start", children: [
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.97 },
                    href: resumePdf,
                    download: true,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon text-primary-foreground font-medium neon-glow",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                      " Download PDF"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.97 },
                    href: resumePdf,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-neon/30 hover:neon-border transition-all",
                    children: [
                      /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" }),
                      " Preview"
                    ]
                  }
                )
              ] })
            ] })
          ] })
        }
      )
    }
  );
}
const WEB3FORMS_KEY = "e4b59deb-2f56-439a-889d-328aff39d7b2";
function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendError, setSendError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setSendError(null);
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || "New Portfolio Message",
          message: `Subject: ${subject.trim() || "(No subject)"}
---
${message.trim()}`,
          from_name: "Ponnitivalasa Devraj Portfolio",
          botcheck: ""
        })
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSent(false), 3e3);
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setSendError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "contact",
      eyebrow: "Get In Touch",
      title: "Let's build the future",
      subtitle: "Open to internships, research collaborations and full-time VLSI roles.",
      children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "space-y-4",
            children: [
              {
                icon: Mail,
                label: "Email",
                value: "devrajp994@gmail.com",
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=devrajp994@gmail.com"
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "/in/ponnitivalasadevraj-i050431",
                href: "https://www.linkedin.com/in/ponnitivalasadevraj-i050431/"
              },
              {
                icon: Github,
                label: "GitHub",
                value: "@Devraj9601",
                href: "https://github.com/Devraj9601"
              },
              {
                icon: MapPin,
                label: "Based in",
                value: "Gunupur, Odisha, India"
              }
            ].map((c2) => {
              const content = /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { className: "w-11 h-11 rounded-xl bg-neon/10 flex items-center justify-center text-neon border border-neon/30 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(c2.icon, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: c2.label }),
                  /* @__PURE__ */ jsx("div", { className: "font-medium", children: c2.value })
                ] })
              ] });
              return c2.href ? /* @__PURE__ */ jsx(
                "a",
                {
                  href: c2.href,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex items-center gap-4 glass rounded-2xl p-4 border border-neon/10 hover:border-neon/40 hover:neon-glow transition-all group",
                  children: content
                },
                c2.label
              ) : /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex items-center gap-4 glass rounded-2xl p-4 border border-neon/10 transition-all",
                  children: content
                },
                c2.label
              );
            })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            onSubmit,
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "glass-strong rounded-2xl p-6 md:p-8 border border-neon/20 space-y-4",
            children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", name: "botcheck", style: { display: "none" } }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    value: name,
                    onChange: (event) => setName(event.target.value),
                    placeholder: "Your name",
                    className: "w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    type: "email",
                    value: email,
                    onChange: (event) => setEmail(event.target.value),
                    placeholder: "Email address",
                    className: "w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  value: subject,
                  onChange: (event) => setSubject(event.target.value),
                  placeholder: "Subject",
                  className: "w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all"
                }
              ),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  required: true,
                  value: message,
                  onChange: (event) => setMessage(event.target.value),
                  rows: 5,
                  placeholder: "Tell me about your project or opportunity...",
                  className: "w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all resize-none"
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  type: "submit",
                  disabled: loading,
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon text-black hover:bg-neon/90 transition-all disabled:cursor-not-allowed disabled:opacity-70",
                  children: [
                    loading ? "Sending..." : "Send message",
                    /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
                  ]
                }
              ),
              sendError ? /* @__PURE__ */ jsx("div", { className: "text-sm text-destructive", children: sendError }) : sent ? /* @__PURE__ */ jsx("div", { className: "text-sm text-emerald-400", children: "Message sent successfully!" }) : null
            ]
          }
        )
      ] })
    }
  );
}
function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("footer", { className: "relative border-t border-border py-10 px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display font-bold text-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "P.Devraj" }),
          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm text-muted-foreground max-w-xl", children: [
          /* @__PURE__ */ jsx("p", { children: "🚀 Grow. Innovate. Help others rise." }),
          /* @__PURE__ */ jsx("p", { children: "😊 Keep learning • Keep building • Keep smiling." }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/80", children: "© 2026 — Thanks for visiting my portfolio. Discover elegant VLSI craftsmanship, bold FPGA projects, and forward-thinking hardware ideas." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [
        { icon: Github, href: "https://github.com" },
        { icon: Linkedin, href: "https://linkedin.com" },
        { icon: Mail, href: "mailto:devraj@example.com" }
      ].map((s, i) => /* @__PURE__ */ jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noreferrer",
          className: "w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-neon hover:neon-border transition-all",
          children: /* @__PURE__ */ jsx(s.icon, { className: "w-4 h-4" })
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(
      motion.button,
      {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-neon text-primary-foreground flex items-center justify-center neon-glow",
        "aria-label": "Scroll to top",
        children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-5 h-5" })
      }
    ) })
  ] });
}
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "pointer-events-none fixed inset-0 z-[100] hidden md:block",
      style: {
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, oklch(0.85 0.2 200 / 0.08), transparent 70%)`
      }
    }
  );
}
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.4
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 220, 255, ${0.4 + p.r * 0.2})`;
        ctx.shadowColor = "rgba(120, 220, 255, 0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(120, 220, 255, ${0.15 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref, className: "fixed inset-0 -z-10 opacity-60" });
}
function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsx(
    motion.div,
    {
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
      className: "fixed inset-0 z-[200] flex items-center justify-center bg-background",
      children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { rotate: 360 },
            transition: { duration: 1.4, repeat: Infinity, ease: "linear" },
            className: "w-16 h-16 mx-auto rounded-full border-2 border-neon/20 border-t-neon",
            style: { boxShadow: "0 0 30px oklch(0.85 0.2 200 / 0.4)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 font-mono text-sm text-neon tracking-[0.3em]", children: [
          "INITIALIZING",
          /* @__PURE__ */ jsx("span", { className: "animate-blink", children: "_" })
        ] })
      ] })
    }
  ) });
}
const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ponntitvalasa Devraj — ECE Student | VLSI, FPGA & IoT Engineer" },
      {
        name: "description",
        content: "Portfolio of Ponntitvalasa Devraj — Electronics & Communication Engineering student specializing in VLSI, FPGA, RTL Design, Physical Design and IoT. View projects, skills and resume."
      },
      { property: "og:title", content: "Ponntitvalasa Devraj — VLSI / FPGA / IoT Portfolio" },
      { property: "og:description", content: "ECE Student • VLSI & FPGA Enthusiast • RTL Design • IoT Developer." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  })
});
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(CursorGlow, {}),
    /* @__PURE__ */ jsx(Particles, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Education, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Certificates, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Resume, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
