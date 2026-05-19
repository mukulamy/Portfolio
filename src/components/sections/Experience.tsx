import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Exicom",
    logo: "/Exicom.jpg",
    logoColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    role: "Software Engineer",
    from: "Feb 2026",
    to: "Present",
    location: "Gurugram, India",
    color: "from-cyan-500/20 to-blue-500/10",
    accentBorder: "border-cyan-500/30",
    highlights: [
      { metric: "4 min → 20s", label: "deployment time" },
      { metric: "Zero downtime", label: "production deployments" },
    ],
    bullets: [
      "Built a firmware flasher application that cut deployment time from 4 minutes to 20 seconds",
      "Developed web interfaces for controller systems including an interactive canvas UI",
      "Optimized production deployments and integrated APIs using IIS and SQL Server",
      "Engineered real-time controller monitoring interfaces with complex state management",
    ],
  },
  {
    id: 2,
    company: "Apeejay Education",
    logo: "/Apeejay",
    logoColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    role: "Junior Software Developer",
    from: "July 2022",
    to: "Feb 2026",
    location: "Gurugram, Haryana",
    color: "from-violet-500/20 to-purple-500/10",
    accentBorder: "border-violet-500/30",
    highlights: [
      { metric: "~40%", label: "fewer API calls" },
      { metric: "Multi-module", label: "component system" },
    ],
    bullets: [
      "Engineered scalable ERP and LMS systems with complex role-based task management workflows",
      "Re-architected data fetching patterns reducing API calls by approximately 40%",
      "Established a reusable component library accelerating feature delivery across modules",
      "Developed student management, operations, and learning module interfaces end-to-end",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-1/4 right-[-10%] w-[35%] h-[50%] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">Work history</p>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl font-display font-bold text-foreground">Experience</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 mb-2" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl border ${exp.accentBorder} bg-card overflow-hidden hover:shadow-xl transition-all duration-500`}
            >
              {/* Top accent strip */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${exp.color} opacity-80`} />
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">

                  {/* Logo + Title block */}
                  <div className="flex items-start gap-4">
                    {/* Company logo badge */}
                    <div className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${exp.logoColor}`}>
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-0.5">{exp.role}</h3>
                      <p className="text-base font-semibold text-primary mb-2">{exp.company}</p>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.from} — {exp.to}
                        </span>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Metric pills */}
                  <div className="flex gap-3 flex-wrap flex-shrink-0">
                    {exp.highlights.map((h) => (
                      <div key={h.label} className="text-center px-4 py-2 rounded-xl bg-secondary/60 border border-border/50">
                        <div className="text-base font-display font-bold text-foreground">{h.metric}</div>
                        <div className="text-[10px] text-muted-foreground">{h.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 ml-16">
                  {exp.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.06, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
