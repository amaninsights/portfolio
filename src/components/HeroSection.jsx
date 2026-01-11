import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 relative"
    >
      <div className="container mx-auto">
        {/* Label */}
        <div className="overflow-hidden mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground opacity-0 animate-fade-in-up">
            Data Analyst & Cloud Engineer
          </p>
        </div>

        {/* Main Title */}
        <div className="overflow-hidden mb-8">
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tight opacity-0 animate-fade-in-up stagger-1">
            Aman
          </h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden max-w-xl mb-16">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up stagger-2">
            I transform complex data into clarity.
            <br />
            <span className="text-foreground">Previously at HCL Technologies.</span>
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 opacity-0 animate-fade-in-up stagger-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-lg font-medium hover:gap-5 transition-all duration-300"
          >
            <span className="w-12 h-px bg-foreground group-hover:w-20 transition-all duration-300" />
            View Work
          </a>
          <a
            href="/Resume.pdf" download
            className="group inline-flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-4">
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
