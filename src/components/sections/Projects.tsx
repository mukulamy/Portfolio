import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, GitBranch, Database, ImageIcon, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";

interface ProjectImage {
  src?: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  tags: string[];
  problem: string;
  contribution: string;
  impact: string;
  icon: React.ReactNode;
  images: ProjectImage[];
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "erp",
    title: "ERP & LMS Systems",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    problem: "Disparate legacy systems for student management, operations, and learning modules caused data silos and operational friction.",
    contribution: "Architected scalable, role-based frontend systems integrated with heavily optimized backend APIs.",
    impact: "Unified operations into cohesive platforms, improving data visibility and reducing administrative overhead.",
    icon: <Database className="w-6 h-6" />,
    accentColor: "from-emerald-500/20 to-teal-500/10",
    images: [
      { label: "ERP dashboard — operations overview" },
      { label: "LMS course management" },
      { label: "Student records & reporting" },
    ],
  },
    {
    id: "plc",
    title: "PLC Logic Builder",
    tags: ["React", "TypeScript", "Canvas API", "REST APIs"],
    problem: "Controller systems required complex manual configuration that was error-prone and unapproachable for non-technical operators.",
    contribution: "Built an interactive visual programming interface using drag-and-drop logic blocks on a workflow canvas.",
    impact: "Abstracted complex controller logic into intuitive visual workflows, improving configuration speed and accuracy.",
    icon: <Layers className="w-6 h-6" />,
    accentColor: "from-cyan-500/20 to-blue-500/10",
    images: [
      { label: "Canvas overview — drag-and-drop logic blocks" },
      { label: "Block configuration panel" },
      { label: "Live simulation mode" },
    ],
  },
  {
    id: "tms",
    title: "Task Management System",
    tags: ["React", "Node.js", "SQL Server", "REST APIs"],
    problem: "Teams lacked a centralized system for role-based task routing and real-time lifecycle tracking.",
    contribution: "Developed a Jira-style workflow engine with custom state machines, role-based access control, and real-time UI updates.",
    impact: "Streamlined operational workflows and established clear accountability and tracking across the organization.",
    icon: <GitBranch className="w-6 h-6" />,
    accentColor: "from-violet-500/20 to-purple-500/10",
    images: [
      { label: "Board view — task lifecycle" },
      { label: "Role-based access control panel" },
      { label: "Analytics dashboard" },
    ],
  },
];

function ProjectImageGallery({
  project,
  onOpenLightbox,
}: {
  project: Project;
  onOpenLightbox: (index: number) => void;
}) {
  const [activeImg, setActiveImg] = useState(0);

  const navigate = (dir: number) => {
    setActiveImg((c) => (c + dir + project.images.length) % project.images.length);
  };

  return (
    <div className="w-full group">
      {/* Main image frame */}
      <div
        className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer"
        onClick={() => onOpenLightbox(activeImg)}
      >
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-9 bg-muted/60 border-b border-border/60 flex items-center px-3 z-10 backdrop-blur-sm">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-[#FF5F57] transition-colors duration-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-[#FFBD2E] transition-colors duration-300 delay-75" />
            <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-[#28C840] transition-colors duration-300 delay-150" />
          </div>
          <div className="mx-auto text-[10px] font-mono text-muted-foreground/60 bg-background/40 px-3 py-0.5 rounded border border-border/40">
            {project.id}.app / screenshot-{activeImg + 1}
          </div>
        </div>

        {/* Image content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`absolute inset-0 pt-9 bg-gradient-to-br ${project.accentColor} flex flex-col items-center justify-center gap-4`}
          >
            {project.images[activeImg].src ? (
              <img
                src={project.images[activeImg].src}
                alt={project.images[activeImg].label}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.accentColor} border border-border/50 flex items-center justify-center text-primary shadow-sm group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500`}>
                  {project.icon}
                </div>
                <div className="text-center px-8">
                  <p className="text-xs font-mono text-muted-foreground/60">{project.images[activeImg].label}</p>
                  <p className="text-[10px] text-muted-foreground/35 mt-1">click to expand • add your screenshots here</p>
                </div>

                {/* Decorative mock UI lines */}
                <div className="absolute left-6 top-14 right-6 space-y-1.5 opacity-30 pointer-events-none">
                  <div className="h-1.5 rounded-full bg-secondary w-3/4" />
                  <div className="h-1.5 rounded-full bg-secondary w-1/2" />
                </div>
                <div className="absolute right-6 bottom-6 w-32 h-20 rounded-lg border border-border/40 bg-secondary/20 opacity-30 pointer-events-none" />
              </>
            )}

            {/* Expand hint */}
            <div className="absolute top-11 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground/60 bg-background/60 backdrop-blur-sm px-2 py-1 rounded border border-border/40">
                <ExternalLink size={10} /> expand
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows on hover */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-background/70 border border-border/50 hover:bg-background shadow-md backdrop-blur-sm"
            >
              <ChevronLeft size={14} className="text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-background/70 border border-border/50 hover:bg-background shadow-md backdrop-blur-sm"
            >
              <ChevronRight size={14} className="text-foreground" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-3">
        {project.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`flex-1 h-10 rounded-md border overflow-hidden transition-all duration-200 relative ${
              i === activeImg
                ? "border-primary/60 shadow-sm shadow-primary/20"
                : "border-border/50 hover:border-border opacity-60 hover:opacity-100"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} flex items-center justify-center gap-1`}>
              <ImageIcon size={10} className="text-muted-foreground/60" />
              <span className="text-[9px] font-mono text-muted-foreground/50 hidden sm:block truncate px-1">{img.label.split("—")[0].trim()}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export function Projects() {
  const [lightbox, setLightbox] = useState<{ projectId: string; index: number } | null>(null);

  const activeLightboxProject = lightbox
    ? projects.find((p) => p.id === lightbox.projectId)
    : null;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-[-15%] w-[40%] h-[40%] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">Selected work</p>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl font-display font-bold text-foreground">Featured Projects</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 mb-2" />
          </div>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Production systems built for real users — from visual programming interfaces to enterprise workflow engines.
          </p>
        </motion.div>

        {/* Projects list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-28"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image gallery */}
              <div className="w-full lg:w-[58%]">
                <ProjectImageGallery
                  project={project}
                  onOpenLightbox={(idx) => setLightbox({ projectId: project.id, index: idx })}
                />
              </div>

              {/* Details */}
              <div className="w-full lg:w-[42%] flex flex-col justify-center">
                {/* Index */}
                <p className="text-xs font-mono text-muted-foreground/40 mb-3">
                  0{i + 1} / 0{projects.length}
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="border-l-2 border-border pl-4">
                    <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">The Problem</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-1.5">The Solution</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.contribution}</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1.5">The Impact</h4>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed">{project.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && activeLightboxProject && (
          <Lightbox
            images={activeLightboxProject.images}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
