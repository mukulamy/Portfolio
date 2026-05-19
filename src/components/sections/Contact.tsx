import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, MapPin, Globe } from "lucide-react";

const contactLinks = [
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
  //       <path d="M20.52 3.48A11.86 11.86 0 0012 .5C6.2.5 1.5 5.2 1.5 11c0 1.93.5 3.8 1.5 5.46L.5 23l6.7-2A11.5 11.5 0 0012 22.5c5.8 0 10.5-4.7 10.5-10.5 0-3-1.14-5.78-3.98-8.52z" />
  //       <path d="M17.2 14.5c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.36-.05-.5-.05-.13-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.18 0-.38 0-.58 0-.2 0-.52.07-.8.36-.28.28-1.06 1.04-1.06 2.54s1.09 2.96 1.24 3.17c.15.2 2.14 3.28 5.2 4.6 3.06 1.32 3.06.88 3.62.83.56-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.18-.57-.33z" />
  //     </svg>
  //   ),
  //   label: "WhatsApp",
  //   value: "+91 95991 61403",
  //   href: "https://wa.me/919599161403",
  //   desc: "Quick messages on WhatsApp",
  //   color: "hover:border-emerald-500/40 hover:bg-emerald-500/5",
  // },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "mukulyadav3203@gmail.com",
    href: "mailto:mukulyadav3203@gmail.com",
    desc: "Best for project inquiries",
    color: "hover:border-cyan-500/40 hover:bg-cyan-500/5",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "/in/mukulji",
    href: "https://www.linkedin.com/in/mukulji/",
    desc: "Connect professionally",
    color: "hover:border-blue-500/40 hover:bg-blue-500/5",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "@mukulamy",
    href: "https://github.com/mukulamy",
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
              href="https://wa.me/919599161403"
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-cta"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 h-13 px-8 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200/40 group"
              aria-label="Message on WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48A11.86 11.86 0 0012 .5C6.2.5 1.5 5.2 1.5 11c0 1.93.5 3.8 1.5 5.46L.5 23l6.7-2A11.5 11.5 0 0012 22.5c5.8 0 10.5-4.7 10.5-10.5 0-3-1.14-5.78-3.98-8.52z" />
                <path d="M17.2 14.5c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.36-.05-.5-.05-.13-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.18 0-.38 0-.58 0-.2 0-.52.07-.8.36-.28.28-1.06 1.04-1.06 2.54s1.09 2.96 1.24 3.17c.15.2 2.14 3.28 5.2 4.6 3.06 1.32 3.06.88 3.62.83.56-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.18-.57-.33z" />
              </svg>
              Send me a message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
