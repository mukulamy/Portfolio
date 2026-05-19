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
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">Credentials</p>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-display font-bold text-foreground">Education & Certifications</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 mb-2" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Book className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-base font-semibold">Master of Computer Application</div>
                <div className="text-sm text-muted-foreground">Highest degree</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Specialization in software development and systems engineering.</div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <div className="text-base font-semibold">Google Cloud Certified</div>
                <div className="text-sm text-muted-foreground">Professional certification</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Certified in Google Cloud technologies and best practices.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
