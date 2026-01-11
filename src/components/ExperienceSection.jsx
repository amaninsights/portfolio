export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 border-t border-border bg-muted">
      <div className="container mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">03</span>
          <span className="w-12 h-px bg-border" />
          <span className="text-sm tracking-widest uppercase text-muted-foreground">Experience</span>
        </div>

        {/* Experience */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <span className="text-sm font-mono text-muted-foreground">2023 — 2024</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium mb-2">
              Azure SQL Database Support Engineer
            </h3>
            <p className="text-xl text-muted-foreground mb-8">HCL Technologies</p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Provided technical support for Azure SQL databases serving enterprise clients. 
                Resolved complex production issues while maintaining strict SLA compliance.
              </p>
              <p>
                Optimized query performance through indexing strategies and resource management. 
                Managed migrations, backups, and disaster recovery processes in Azure cloud environments.
              </p>
            </div>

            {/* Skills used */}
            <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-border">
              {["Azure SQL", "SQL Server", "Performance Tuning", "Cloud Support", "Database Migration"].map((skill) => (
                <span key={skill} className="text-sm text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Open to work */}
        {/* Independent Projects & Skill Development */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
            <div>
              <span className="text-sm font-mono text-muted-foreground">Jan 2024 — Present</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Cloud Data Analytics | Independent Projects & Advanced Skill Development</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Led end-to-end cloud and analytics initiatives through production-grade independent projects, focusing on scalable data modeling, automation, and business-driven insights. Strengthened cloud fundamentals and data platform expertise through Microsoft Azure certifications (AZ-900, AZ-104), reinforcing hands-on experience with Azure services and cloud governance.
                </p>
                <p>
                  Designed and implemented optimized star schema data models and automated ETL pipelines processing large datasets (100K+ records), enabling reliable KPI tracking across sales, pricing, and inventory domains. Developed interactive Power BI and Tableau dashboards adopted as decision-support tools, cutting manual reporting effort by 40% and improving stakeholder response time.
                </p>
                <p>
                  Performed exploratory data analysis and statistical analysis to identify pricing inefficiencies, demand patterns, and inventory risks. Delivered insight-driven recommendations projected to generate ~15% cost optimization, directly supporting business planning and operational efficiency.
                </p>
                <div className="mt-8">
                  <span className="font-semibold">Key Skills:</span><br />
                  Azure (AZ-900, AZ-104) &middot; ETL & Data Pipelines &middot; Power BI &middot; Tableau &middot; Data Modeling (Star Schema) &middot; EDA & Statistical Analysis
                </div>
              </div>
            </div>
          </div>
          {/* Resume Download Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h4 className="text-2xl font-medium mb-2">Open to opportunities</h4>
              <p className="text-muted-foreground">Currently looking for data analyst roles</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
