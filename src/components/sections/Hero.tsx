import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Database, Layout } from "lucide-react";
const resumePdf = "/Mukul_software_Web_Dev.pdf";
const profileImage = "/Mukul_Yadav_Web_Software.JPG";

export function Hero() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-8%] w-[55%] h-[60%] rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[25%] h-[25%] rounded-full bg-purple-500/4 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/60 text-xs font-medium text-muted-foreground mb-7 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
              Open to Global &amp; Remote jobs &bull; Freelance
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.05]"
              >
                Mukul Yadav
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg sm:text-xl text-foreground/75 font-medium leading-relaxed mb-4 max-w-md"
            >
              Software Developer building scalable web applications and system interfaces.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm text-muted-foreground mb-10 font-mono tracking-wide"
            >
              React &nbsp;•&nbsp; TypeScript &nbsp;•&nbsp; APIs &nbsp;•&nbsp; Workflow Systems
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                data-testid="button-view-projects"
                className="h-11 px-5 rounded-lg group font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href={resumePdf} download="Mukul_Software_Web_Dev.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  data-testid="button-resume"
                  className="h-11 px-5 rounded-lg font-medium border-border hover:bg-secondary/60"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </Button>
              </a>
              <Button
                onClick={scrollToContact}
                variant="ghost"
                size="lg"
                data-testid="button-contact"
                className="h-11 px-5 rounded-lg font-medium hover:bg-secondary/60"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: profile image only ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-[300px]">

              {/* Glow behind image */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/8 to-transparent blur-3xl pointer-events-none" />

              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                data-testid="img-profile-placeholder"
                className="relative w-full aspect-[3/4] rounded-2xl border border-border/60 bg-card overflow-hidden shadow-2xl"
              >
                {/* Gradient bg inside placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-muted/40 to-secondary/60" />

                <img
                  src={profileImage}
                  alt="Mukul Yadav"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Corner accent brackets */}
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-primary/50 rounded-tl pointer-events-none" />
                <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-primary/50 rounded-tr pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-primary/50 rounded-bl pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-primary/50 rounded-br pointer-events-none" />
              </motion.div>

              {/* ── Floating: Interactive UIs chip ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-16 top-[22%] bg-card/90 backdrop-blur-md border border-border rounded-xl p-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Layout size={17} />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground whitespace-nowrap">Interactive UIs</div>
                  <div className="text-[10px] text-muted-foreground">Canvas & Workflows</div>
                </div>
              </motion.div>

              {/* ── Floating: Data Systems chip ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute -right-16 top-[58%] bg-card/90 backdrop-blur-md border border-border rounded-xl p-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground flex-shrink-0">
                  <Database size={17} />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground whitespace-nowrap">Data Systems</div>
                  <div className="text-[10px] text-muted-foreground">SQL & Optimization</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
