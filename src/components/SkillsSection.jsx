
const skillGroups = [
  { num: "01", title: "Programming & Analysis", skills: ["Python", "SQL", "Pandas", "NumPy"] },
  { num: "02", title: "Visualization", skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  { num: "03", title: "Cloud & Data Platforms", skills: ["Azure SQL", "Azure Data Factory", "AWS S3", "AWS Athena", "AWS Glue"] },
  { num: "04", title: "Databases & Tools", skills: ["MySQL", "SQL Server", "Excel", "Git"] },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">04</span>
          <span className="w-12 h-px bg-border" />
          <span className="text-sm tracking-widest uppercase text-muted-foreground">Skills</span>
        </div>

        {/* Grouped Skills Display */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-8">
          {skillGroups.map((group, idx) => (
            <div key={group.num} className="bg-background p-8 group hover:bg-muted transition-colors duration-300">
              <span className="text-xs font-mono text-muted-foreground">{group.num}</span>
              <h3 className="text-lg font-medium mt-4 mb-2">{group.title}</h3>
              <ul className="space-y-1">
                {group.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="text-sm font-mono uppercase text-muted-foreground tracking-widest opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
