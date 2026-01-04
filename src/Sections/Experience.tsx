import { useEffect, useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";


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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.timeline-card');

      // Use Intersection Observer for fade-in animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const card = entry.target as HTMLElement;
              card.classList.add('fade-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      // Observe each card with staggered delays
      cards.forEach((card, index) => {
        const delay = index * 100; // 100ms between each card
        (card as HTMLElement).style.setProperty('--delay', `${delay}ms`);
        observer.observe(card);
      });

      return () => {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      };
    }
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A journey through my professional career, building impactful solutions
          </p>

          <div ref={containerRef} className="experience-timeline">
            {/* Vertical center line */}
            <div className="timeline-center-line" />

            {/* Timeline items */}
            <Accordion type="multiple" defaultValue={[]} className="space-y-0">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  {/* Timeline dot */}
                  <div className="timeline-dot" />

                  {/* Timeline card */}
                  <AccordionItem
                    value={exp.id}
                    className="timeline-card border-0 shadow-sm hover:shadow-lg"
                  >
                    <AccordionTrigger className="px-0 py-0 hover:no-underline group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-4">
                        <div>
                          {exp.roles ? (
                            <>
                              <h3 className="text-lg font-semibold text-foreground mb-0.5">
                                {exp.roles[0].title}
                              </h3>
                              <p className="text-xs text-muted-foreground mb-2">
                                {exp.roles.length > 1 ? `${exp.roles.length} roles` : '1 role'}
                              </p>
                            </>
                          ) : (
                            <>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {exp.role}
                              </h3>
                            </>
                          )}
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
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
                    <AccordionContent className="pt-4 border-0">
                      {exp.roles ? (
                        <div className="space-y-8">
                          {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                              <div className="mb-4">
                                <h4 className="text-base font-semibold text-foreground italic mb-1">{role.title}</h4>
                                <p className="text-xs text-muted-foreground">{role.period}</p>
                              </div>
                              <ul className="space-y-3">
                                {role.achievements.map((achievement, index) => (
                                  <li
                                    key={index}
                                    className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed"
                                  >
                                    <span className="text-accent flex-shrink-0 mt-1">●</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                              {roleIndex < exp.roles.length - 1 && (
                                <div className="mt-8 border-t border-gray-200" />
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed"
                            >
                              <span className="text-accent flex-shrink-0 mt-1">●</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
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
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
