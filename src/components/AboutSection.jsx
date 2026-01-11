export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">01</span>
          <span className="w-12 h-px bg-border" />
          <span className="text-sm tracking-widest uppercase text-muted-foreground">About</span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Big Statement */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
              I help businesses make sense of their data and turn it into action.
            </h2>
          </div>

          {/* Right - Details */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in India, I specialize in building data pipelines, creating dashboards, 
              and finding the stories hidden in numbers. At HCL Technologies, I supported 
              enterprise Azure SQL databases and learned what it takes to keep critical 
              systems running.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now I focus on end-to-end analytics — from cleaning raw data with Python 
              to delivering insights through Power BI and Tableau that teams actually use.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-4xl font-bold mb-1">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">6+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-24">
          {[
            { num: "01", title: "Data Analysis", desc: "Python, SQL, Pandas" },
            { num: "02", title: "Visualization", desc: "Power BI, Tableau" },
            { num: "03", title: "Cloud Platforms", desc: "Azure, AWS" },
            { num: "04", title: "Databases", desc: "SQL Server, MySQL" },
          ].map((item) => (
            <div key={item.num} className="bg-background p-8 group hover:bg-muted transition-colors duration-300">
              <span className="text-xs font-mono text-muted-foreground">{item.num}</span>
              <h3 className="text-lg font-medium mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
