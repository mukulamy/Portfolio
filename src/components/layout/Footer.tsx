export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-bold tracking-tight text-foreground">
              Mukul<span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {year} Mukul Yadav. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/mukulamy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/mukulji" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
