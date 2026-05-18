import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface LightboxProps {
  images: { src?: string; label: string }[];
  initialIndex?: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + images.length) % images.length);
  };

  const img = images[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          data-testid="button-lightbox-close"
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors p-2"
        >
          <X size={22} />
        </button>

        {/* Image area */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-card/30">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Placeholder */
                <div className="flex flex-col items-center justify-center gap-4 w-full h-full bg-gradient-to-br from-muted/60 to-muted/20">
                  <ZoomIn className="w-12 h-12 text-muted-foreground/30" />
                  <p className="text-sm font-mono text-muted-foreground/50">{img.label}</p>
                  <p className="text-xs text-muted-foreground/30">add screenshot here</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-5">
          {images.length > 1 && (
            <button
              onClick={() => navigate(-1)}
              data-testid="button-lightbox-prev"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Dots */}
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-white w-4" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {images.length > 1 && (
            <button
              onClick={() => navigate(1)}
              data-testid="button-lightbox-next"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Label */}
        <p className="mt-3 text-xs font-mono text-white/40">
          {img.label} &nbsp;·&nbsp; {current + 1} / {images.length}
        </p>
      </div>
    </motion.div>
  );
}
