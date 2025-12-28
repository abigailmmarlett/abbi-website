import { MapPin, Calendar, Badge } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { TechStack } from "./TechStack";


const experiences = [
  {
    id: '1',
    company: 'CoStar Group',
    role: 'Software Engineer 1',
    location: 'Richmond, VA',
    period: 'September 2024 - Present',
    achievements: [
      'Design, build, test, and deploy backend APIs and services using C#, .NET, and SQL Server',
      'Deliver front-end features in React + TypeScript, improving usability and performance',
      'Led AI-driven web-scraping project, architecting a fully configurable extraction framework',
      'Build reusable UI components to improve developer velocity',
    ],
    techStack: ['React', 'TypeScript', 'C#', '.NET', 'SQL Server'],
  },
  {
    id: '2',
    company: 'CoStar Group',
    role: 'Associate Software Engineer',
    location: 'Richmond, VA',
    period: 'July 2023 - September 2024',
    achievements: [
      'Designed and implemented full-stack solutions with React and TypeScript',
      'Enhanced API functionality and database performance using C# and SQL Server',
      'Collaborated with cross-functional teams to deliver business-aligned solutions',
      'Improved application performance and code quality through best practices',
    ],
    techStack: ['React', 'TypeScript', 'C#', 'SQL Server', 'Azure'],
  },
  {
    id: '3',
    company: 'Juni Learning',
    role: 'Instructor',
    location: 'Remote',
    period: 'November 2021 - May 2023',
    achievements: [
      'Delivered advanced computer science lessons on data structures and programming',
      'Adapted technical content to individual student needs and learning goals',
      'Mentored students through complex problem-solving and coding concepts',
      'Received positive feedback for teaching effectiveness and engagement',
    ],
    techStack: ['Python', 'Java', 'JavaScript', 'Teaching', 'Mentoring'],
  },
  {
    id: '4',
    company: 'UNC Department of Computer Science',
    role: 'Undergraduate Teaching Assistant',
    location: 'Chapel Hill, NC',
    period: 'August 2022 - May 2023',
    achievements: [
      'Led instruction for Web Development coursework for 120+ students',
      'Explained technical concepts and graded assignments',
      'Hosted office hours and provided one-on-one student support',
      'Helped students understand complex web development topics',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Teaching'],
  },
  {
    id: '5',
    company: 'Bell Partners',
    role: 'IT Intern',
    location: 'Raleigh, NC',
    period: 'June 2022 - August 2022',
    achievements: [
      'Created dashboards and applications in Power BI for data visualization',
      'Visualized operational and financial data for stakeholder analysis',
      'Used SQL and Excel for data validation and accuracy',
      'Ensured data integrity for reporting and strategic decision-making',
    ],
    techStack: ['Power BI', 'SQL', 'Excel', 'Data Analysis'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A journey through my professional career, building impactful solutions
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {experiences.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2 pr-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 border-t border-gray-200">
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    {exp.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-50 text-primary hover:bg-blue-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Tech Stack Section */}
          <TechStack />
        </div>
      </div>
    </section>
  );
}
