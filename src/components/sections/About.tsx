import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Zap, GitMerge, BarChart2 } from "lucide-react";

const highlights = [
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: "System Architecture",
    desc: "ERP, LMS, and workflow engines built for scale",
  },
  {
    icon: <Cpu className="w-5 h-5 text-primary" />,
    title: "Controller Interfaces",
    desc: "Firmware tools and interactive canvas UIs",
  },
  {
    icon: <Code2 className="w-5 h-5 text-primary" />,
    title: "Reusable Architecture",
    desc: "Component systems and API optimization patterns",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Performance First",
    desc: "Reduced API calls by ~40%, 4 min → 20s deployment",
  },
  {
    icon: <GitMerge className="w-5 h-5 text-primary" />,
    title: "Role-Based Systems",
    desc: "Access control, lifecycle tracking & routing flows",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    title: "Data-Heavy UIs",
    desc: "Dashboards synthesizing large datasets efficiently",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-[-10%] w-[35%] h-[60%] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">Background</p>
            <h2 className="text-4xl font-display font-bold text-foreground mb-8 leading-tight">
              Building systems that<br />
              <span className="text-primary">actually ship.</span>
            </h2>

            <div className="space-y-5 text-base text-foreground/75 leading-relaxed">
              <p>
                I build robust, scalable frontend systems and complex system interfaces.
                My experience centers on developing ERP platforms, LMS applications, workflow
                engines, and controller-system interfaces where performance and architecture matter.
              </p>
              <p>
                Rather than just assembling components, I focus on creating reusable architecture,
                optimizing API integrations, and crafting interfaces that handle complex data states
                efficiently — from interactive canvas UIs for logic builders to role-based routing
                systems and large-dataset dashboards.
              </p>
              <p>
                My stack is React, TypeScript, Node.js, and SQL Server — connected via tightly
                integrated REST APIs and deployed on production infrastructure.
              </p>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["React", "TypeScript", "Node.js", "SQL Server", "REST APIs"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-border/60 bg-secondary/50 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — 3×2 highlight cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group p-5 rounded-xl border border-border/70 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  {h.icon}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{h.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
