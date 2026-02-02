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
          'Designed and implemented database schemas and SQL logic, including tables, views, stored procedures, audit mechanisms, and triggers to ensure data integrity and traceability.',
          'Implemented backend balancing and assignment logic by delivering worker services, balance algorithms, and frontend-controlled manual workflows.',
          'Built event-driven and messaging workflows using AWS (EventBridge, SQS, SNS) and Kafka to automate and scale researcher task generation.',
          'Owned features end-to-end across multiple repositories, leading frontend development while delivering backend services, APIs, and database changes.',
          'Led frontend-focused delivery for two capstone projects and an AI web scrape project, coordinating agile execution, mentoring contributors, and communicating progress through regular stakeholder demos.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: 'July 2023 - September 2024',
        achievements: [
          'Built the initial React + TypeScript frontend for new initiative, developing reusable UI components with a focus on scalability, maintainability, and data-driven workflows.',
          'Implemented complex, multi-step modal flows for various actions and operations, enabling rapid expansion across departments.',
          'Contributed to API routes and database logic, collaborating with fellow engineers to support evolving business requirements and ensure reliable frontend-backend integration.',
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
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-background-alt to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-1/4 right-1/4 w-96 h-96 bg-premium/5" style={{ animationDelay: '1s' }} />
        <div className="orb absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 animate-fade-in">
            WORK EXPERIENCE
          </h2>
          <p className="text-foreground-muted text-center mb-16 max-w-2xl mx-auto animate-slide-up text-lg" style={{ animationDelay: '0.1s' }}>
            A journey through my professional career, building impactful solutions
          </p>

          <div ref={containerRef} className="experience-timeline">
            {/* Vertical center line */}
            <div className="timeline-center-line" />

            {/* Timeline items */}
            <Accordion type="multiple" defaultValue={[]} className="space-y-0">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  {/* Timeline card */}
                  <AccordionItem
                    value={exp.id}
                    className="timeline-card border-0 card-interactive spotlight"
                  >
                    <AccordionTrigger className="px-0 py-0 hover:no-underline group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-4">
                        <div>
                          {exp.roles ? (
                            <>
                              <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                {exp.roles[0].title}
                              </h3>
                              <p className="text-xs text-foreground-muted mb-2 font-medium">
                                {exp.roles.length > 1 ? `${exp.roles.length} roles` : '1 role'}
                              </p>
                            </>
                          ) : (
                            <>
                              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {exp.role}
                              </h3>
                            </>
                          )}
                          <p className="text-primary font-semibold text-lg">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-2 text-sm text-foreground-muted">
                          <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-accent" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-accent" />
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
                              <ul className="space-y-4">
                                {role.achievements.map((achievement, index) => (
                                  <li
                                    key={index}
                                    className="text-foreground-muted flex items-start gap-3 text-sm leading-relaxed group"
                                  >
                                    <span className="text-accent flex-shrink-0 mt-1.5 text-lg group-hover:scale-125 transition-transform duration-300">●</span>
                                    <span className="group-hover:text-foreground transition-colors duration-300">{achievement}</span>
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
                        <ul className="space-y-4 mb-6">
                          {exp.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="text-foreground-muted flex items-start gap-3 text-sm leading-relaxed group"
                            >
                              <span className="text-accent flex-shrink-0 mt-1.5 text-lg group-hover:scale-125 transition-transform duration-300">●</span>
                              <span className="group-hover:text-foreground transition-colors duration-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                        {exp.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="glass-light text-primary hover:glass-premium hover:scale-105 transition-all duration-300 border border-primary/20 hover:border-primary/40 font-medium"
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
