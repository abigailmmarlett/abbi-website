interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  icon: string
}

const projects: Project[] = [
  {
    title: "AI-Driven Web-Scraping Configuration Framework",
    description: "Architected a fully configurable web extraction settings framework at CoStar Group. Built a React-based frontend for real-time testing and visualization of AI scrape configurations.",
    technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server"],
    highlights: [
      "Led the project as technical lead across backend and frontend",
      "Designed configurable extraction settings system",
      "Real-time visualization and testing interface",
      "Improved extraction accuracy and maintainability"
    ],
    icon: "🤖"
  },
  {
    title: "Full-Stack Web Applications",
    description: "Designed and implemented multiple full-stack solutions focusing on React and TypeScript for frontend, with C# and SQL Server for backend services.",
    technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Web API"],
    highlights: [
      "Built reusable UI components improving developer velocity",
      "Optimized database queries for performance",
      "Implemented responsive and accessible interfaces",
      "Collaborated with cross-functional teams"
    ],
    icon: "🚀"
  },
  {
    title: "Data Visualization Dashboards",
    description: "Created operational and financial data dashboards using Power BI at Bell Partners, enabling stakeholders to make data-driven decisions.",
    technologies: ["Power BI", "SQL", "Excel", "Data Analysis"],
    highlights: [
      "Visualized complex operational metrics",
      "Automated data validation and reporting",
      "Improved data accuracy for analysis",
      "Stakeholder-focused interface design"
    ],
    icon: "📊"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative depth-gradient">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Notable Projects</h2>
          <p className="text-white/70 text-lg">A selection of projects I've led and contributed to</p>
          <div className="h-1 w-20 bg-gradient-to-r from-accentRose to-accentBlue mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 md:p-8 bg-primary/50 border border-accentBlue/30 rounded-2xl hover:border-accentBlue/50 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{project.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.description}</p>
                </div>
              </div>

              <div className="h-px bg-accentBlue/30 my-4"></div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accentRose uppercase tracking-wide mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-white/80 flex gap-3 leading-relaxed">
                      <span className="text-accentRose font-bold flex-shrink-0">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-accentBlue/20 text-accentBlue rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
