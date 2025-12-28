import { MapPin, Calendar } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { TechStack } from "./TechStack";


const experiences = [
  {
    id: '1',
    company: 'CoStar Group',
    location: 'Richmond, VA',
    period: 'July 2023 - Present',
    roles: [
      {
        title: 'Software Engineer 1',
        period: 'September 2024 - Present',
        achievements: [
          'Design, build, test, and deploy backend APIs and services using C#, .NET, and SQL Server, supporting applications used by thousands of employees',
          'Deliver front-end features in React + TypeScript, improving usability, performance, and developer velocity through reusable UI components',
          'Served as project lead on an AI-driven web-scraping project, architecting a fully configurable web extraction settings framework and delivering a React-based frontend for real-time testing and visualization of AI scrape configurations',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: 'July 2023 - September 2024',
        achievements: [
          'Designed and implemented full-stack solutions, focusing on React and TypeScript for front-end development',
          'Enhanced API functionality and database performance using C# and SQL Server',
          'Collaborated with cross-functional teams to deliver solutions aligned with business objectives and user needs',
        ],
      },
    ],
    techStack: ['React', 'TypeScript', 'C#', '.NET', 'SQL Server', 'AWS', 'Azure'],
  },
  {
    id: '2',
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
    id: '3',
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
    id: '4',
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A journey through my professional career, building impactful solutions
          </p>

          <Accordion type="multiple" defaultValue={['1']} className="space-y-4">
            {experiences.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2 pr-4">
                    <div>
                      {exp.roles ? (
                        <>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.roles[0].title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {exp.roles.length > 1 ? `${exp.roles.length} roles` : '1 role'}
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.role}
                          </h3>
                        </>
                      )}
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
                  {exp.roles ? (
                    <div className="space-y-6">
                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex}>
                          <div className="mb-3">
                            <h4 className="text-base font-semibold text-foreground italic">{role.title}</h4>
                            <p className="text-sm text-muted-foreground">{role.period}</p>
                          </div>
                          <ul className="space-y-2">
                            {role.achievements.map((achievement, index) => (
                              <li
                                key={index}
                                className="text-muted-foreground flex items-start gap-2 text-sm"
                              >
                                <span className="text-primary mt-1.5">●</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                          {roleIndex < exp.roles.length - 1 && (
                            <div className="my-4 border-t border-gray-200" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
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
                  )}
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
