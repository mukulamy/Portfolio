import { motion } from "framer-motion";
import { Award, Book } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">
            Credentials
          </p>

          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Education & Certifications
            </h2>

            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 mb-2" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Education Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Book className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="text-lg font-semibold text-foreground">
                  Master of Computer Applications
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  MCA • Gurugram University
                </div>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Focused on software development, scalable systems, and modern
                  web application engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certification Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Award className="w-5 h-5 text-amber-500" />
              </div>

              <div>
                <div className="text-lg font-semibold text-foreground">
                  Google Cloud Certified
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  Cloud Digital Leader
                </div>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Certified in Google Cloud technologies, cloud fundamentals,
                  and modern infrastructure best practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;