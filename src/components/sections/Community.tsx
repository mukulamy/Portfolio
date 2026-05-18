import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Calendar, Award, Mic } from "lucide-react";

function useCountUp(target: number, duration = 1.8, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  desc: string;
  color: string;
  delay: number;
}

function StatCard({ icon, value, numericValue, suffix = "", label, desc, color, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const counted = useCountUp(numericValue ?? 0, 1.8, isInView && numericValue !== undefined);
  const displayValue = numericValue !== undefined ? `${counted}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl border border-border/70 bg-card p-6 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-400 cursor-default`}
    >
      {/* Background glow */}
      <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
        <span className="text-primary">{icon}</span>
      </div>

      {/* Value */}
      <div className="relative text-4xl font-display font-bold text-foreground mb-1 tabular-nums">
        {displayValue}
      </div>
      <div className="relative text-sm font-semibold text-foreground/80 mb-1">{label}</div>
      <div className="relative text-xs text-muted-foreground">{desc}</div>
    </motion.div>
  );
}

export function Community() {
  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
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
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">Beyond the code</p>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl font-display font-bold text-foreground">Community & Leadership</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 mb-2" />
          </div>
          <p className="text-muted-foreground mt-3 max-w-md text-sm">
            Building in public — organizing, mentoring, and growing the developer community.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard
            icon={<Award className="w-6 h-6" />}
            value="Google"
            label="GDSC Lead"
            desc="Developer Student Clubs"
            color="bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
            delay={0}
          />
          <StatCard
            icon={<Calendar className="w-6 h-6" />}
            value="DevFest"
            label="Event Organizer"
            desc="Annual tech community events"
            color="bg-gradient-to-br from-violet-500/5 to-purple-500/5"
            delay={0.1}
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            value="500+"
            numericValue={500}
            suffix="+"
            label="Students Mentored"
            desc="Developers & engineering students"
            color="bg-gradient-to-br from-emerald-500/5 to-teal-500/5"
            delay={0.2}
          />
          <StatCard
            icon={<Mic className="w-6 h-6" />}
            value="3.8K+"
            numericValue={3800}
            suffix="+"
            label="Event Attendees"
            desc="Across all hosted events"
            color="bg-gradient-to-br from-amber-500/5 to-orange-500/5"
            delay={0.3}
          />
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 rounded-2xl border border-border/50 bg-card/50 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-foreground">Google Developer Student Clubs Lead</p>
            <p className="text-xs text-muted-foreground mt-1">Organized workshops, hackathons, and speaker sessions — growing from zero to a 500+ strong community.</p>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="text-center sm:text-right flex-shrink-0">
            <p className="text-2xl font-display font-bold text-primary">3.8K+</p>
            <p className="text-xs text-muted-foreground">lives impacted</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
