import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";
import { Section } from "./Section";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "60uWDDewVFDo5SBYZ";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_96q2pq1";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_1xfdmwn";
const EMAILJS_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID || "template_1xfdmwn";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendError, setSendError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSendError(null);
    setLoading(true);

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setSendError("EmailJS is not configured. Please add your public key, service ID, and template ID to the environment variables.");
      setLoading(false);
      return;
    }

    try {
      const cleanedName = name.trim();
      const cleanedEmail = email.trim();
      const cleanedSubject = subject.trim() || "(No subject)";
      const cleanedMessage = message.trim();

      const sendParams = {
        name: cleanedName,
        email: cleanedEmail,
        from_name: cleanedName,
        from_email: cleanedEmail,
        subject: cleanedSubject,
        message: cleanedMessage,
      };

      // Primary notification email to you
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        sendParams,
        EMAILJS_PUBLIC_KEY,
      );

      // Optional auto-reply to the visitor — only fires if a distinct
      // reply template is actually configured, to avoid resending the
      // same template with mismatched variables (which fails silently).
      if (EMAILJS_REPLY_TEMPLATE_ID && EMAILJS_REPLY_TEMPLATE_ID !== EMAILJS_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_REPLY_TEMPLATE_ID,
          {
            name: cleanedName,
            email: cleanedEmail,
            to_name: cleanedName,
            to_email: cleanedEmail,
            from_name: "Ponnitivalasa Devraj",
          },
          EMAILJS_PUBLIC_KEY,
        );
      }

      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("EmailJS submit error:", error);
      const messageText = error instanceof Error ? error.message : "Unknown error";
      setSendError(`Failed to submit message. ${messageText}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's build the future"
      subtitle="Open to internships, research collaborations and full-time VLSI roles."
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
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon text-primary-foreground font-medium neon-glow group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className={`w-4 h-4 transition-transform ${sent ? "translate-x-2 -translate-y-2" : "group-hover:translate-x-1"}`} />
            {loading ? "Sending..." : sent ? "Message sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        {sendError ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-destructive/10 p-4 text-sm text-destructive-foreground col-span-1 md:col-span-2"
          >
            {sendError}
          </motion.div>
        ) : null}
      </div>
    </Section>
  );
}