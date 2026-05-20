import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiPostgresql, SiGit, SiFigma, SiPostman } from "react-icons/si";
import { Server, Globe, Cpu, Database, Code2 } from "lucide-react";

type SkillItem = { name: string; icon?: React.ReactNode };
type SkillGroup = { category: string; icon: React.ReactNode; color: string; items: SkillItem[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: <Globe className="w-4 h-4" />,
    color: "text-cyan-400",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML / CSS", icon: <SiHtml5 /> },
    ],
  },
  {
    category: "Backend Integration",
    icon: <Server className="w-4 h-4" />,
    color: "text-violet-400",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "REST APIs" },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  // {
  //   category: "Systems",
  //   icon: <Cpu className="w-4 h-4" />,
  //   color: "text-amber-400",
  //   items: [
  //     { name: "IIS" },
  //     // { name: "Windows Server" },
  //     // { name: "Controller Systems" },
  //   ],
  // },
  {
    category: "Database",
    icon: <Database className="w-4 h-4" />,
    color: "text-emerald-400",
    items: [
      { name: "SQL Server" },
      { name: "MySQL"},
      { name: "MongoDB", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Tools",
    icon: <SiGit size={16} />,
    color: "text-orange-400",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "VS Code", icon: <Code2 /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] rounded-t-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">What I work with</p>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl font-display font-bold text-foreground">Technical Arsenal</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 mb-2" />
          </div>
          <p className="text-muted-foreground mt-3 max-w-md text-sm">
            Tools and technologies I use to ship production software.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-border/70 bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`${group.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {group.icon}
                </div>
                <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/70 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all cursor-default"
                  >
                    {skill.icon && (
                      <span className={`text-sm ${group.color} opacity-80`}>{skill.icon}</span>
                    )}
                    <span className="text-xs font-medium text-foreground/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
