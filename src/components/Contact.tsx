import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendError, setSendError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSendError(null);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error("Could not send message");
      }

      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
      setSendError("Failed to send message. Please try again.");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's build the future"
      subtitle="Open to internships, research collaborations and full-time VLSI / FPGA roles."
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {[{ 
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
},
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-4 border border-neon/10 hover:border-neon/40 hover:neon-glow transition-all group"
            >
              <span className="w-11 h-11 rounded-xl bg-neon/10 flex items-center justify-center text-neon border border-neon/30 group-hover:scale-110 transition-transform">
                <c.icon className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 md:p-8 border border-neon/20 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all"
            />
          </div>
          <input
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all"
          />
          <textarea
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-neon focus:outline-none focus:neon-glow transition-all resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon text-primary-foreground font-medium neon-glow group"
          >
            <Send className={`w-4 h-4 transition-transform ${sent ? "translate-x-2 -translate-y-2" : "group-hover:translate-x-1"}`} />
            {sent ? "Message sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        {sendError ? (
          <div className="rounded-xl bg-destructive/10 p-4 text-sm text-destructive-foreground">{sendError}</div>
        ) : null}
      </div>
    </Section>
  );
}
