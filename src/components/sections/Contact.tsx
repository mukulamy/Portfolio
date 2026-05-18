import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, MapPin, Globe } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "hello@mukulyadav.dev",
    href: "mailto:hello@mukulyadav.dev",
    desc: "Best for project inquiries",
    color: "hover:border-cyan-500/40 hover:bg-cyan-500/5",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "/in/mukul-yadav",
    href: "https://linkedin.com",
    desc: "Connect professionally",
    color: "hover:border-blue-500/40 hover:bg-blue-500/5",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "@mukul-yadav",
    href: "https://github.com",
    desc: "See the code",
    color: "hover:border-violet-500/40 hover:bg-violet-500/5",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-t-full bg-primary/6 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-md overflow-hidden"
        >
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="p-8 md:p-14">
            {/* Header */}
            <div className="mb-12">
              <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
                Let's build something<br />
                <span className="text-primary">worth shipping.</span>
              </h2>
              <p className="text-foreground/65 max-w-lg text-base leading-relaxed">
                Open to new opportunities — full-time, remote, freelance, or consulting.
                If you have an interesting problem to solve, I want to hear about it.
              </p>
            </div>

            {/* Availability chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { icon: <Globe className="w-3.5 h-3.5" />, label: "Remote — worldwide" },
                { icon: <MapPin className="w-3.5 h-3.5" />, label: "Open to relocate" },
                { icon: <Mail className="w-3.5 h-3.5" />, label: "Freelance available" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/50 text-xs font-medium text-muted-foreground"
                >
                  <span className="text-primary">{chip.icon}</span>
                  {chip.label}
                </div>
              ))}
            </div>

            {/* Contact cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-testid={`link-contact-${link.label.toLowerCase()}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className={`group block rounded-xl border border-border/60 bg-secondary/30 p-5 transition-all duration-300 ${link.color}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{link.icon}</span>
                    <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">{link.label}</span>
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1 truncate">{link.value}</div>
                  <div className="text-xs text-muted-foreground">{link.desc}</div>
                </motion.a>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.a
              href="mailto:hello@mukulyadav.dev"
              data-testid="link-contact-cta"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 h-13 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 group"
            >
              <Mail className="w-4 h-4" />
              Send me a message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
