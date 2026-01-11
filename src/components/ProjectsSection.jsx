import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vendor Performance Analysis",
    description: "Power BI dashboards for data-driven vendor management",
    tech: "Python / SQLite / Power BI",
    url: "https://github.com/amaninsights/Vendor-Performance-Analysis",
  },
  {
    title: "Data Science Job Market",
    description: "Skills vs salary trends with advanced visualizations",
    tech: "Python / Pandas / Matplotlib",
    url: "https://github.com/amaninsights/data-science-job-market",
  },
  {
    title: "Hotel Booking Analytics",
    description: "End-to-end booking pattern analysis",
    tech: "Python / Power BI",
    url: "https://github.com/amaninsights/Hotel-Booking-Analysis",
  },
  {
    title: "Airbnb Market Insights",
    description: "Seattle pricing trends and market intelligence",
    tech: "Tableau / Data Viz",
    url: "https://github.com/amaninsights/airbnb-market-insights-seattle",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">02</span>
          <span className="w-12 h-px bg-border" />
          <span className="text-sm tracking-widest uppercase text-muted-foreground">Selected Work</span>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-12 border-b border-border hover:bg-muted/50 transition-colors duration-300 -mx-6 px-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-sm font-mono text-muted-foreground pt-1">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-10 lg:ml-10 max-w-xl">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-8 ml-10 lg:ml-0">
                  <span className="text-sm font-mono text-muted-foreground hidden sm:block">
                    {project.tech}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16">
          <a
            href="https://github.com/amaninsights"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-lg font-medium hover:gap-5 transition-all duration-300"
          >
            <span className="w-12 h-px bg-foreground group-hover:w-20 transition-all duration-300" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
