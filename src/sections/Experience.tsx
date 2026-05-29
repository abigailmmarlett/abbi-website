import { useState } from "react";

const FlowerDot = () => (
  <svg width="20" height="20" viewBox="0 0 60 60" style={{ flexShrink: 0 }}>
    {[0, 60, 120, 180, 240, 300].map(deg => (
      <ellipse key={deg} cx="30" cy="14" rx="6" ry="12" fill="#F8C8B5"
        transform={`rotate(${deg} 30 30)`} />
    ))}
    <circle cx="30" cy="30" r="7" fill="#E89A85" />
  </svg>
);

const experiences = [
  {
    id: '1',
    category: 'Software Engineering · Full-Stack',
    company: 'CoStar Group',
    location: 'Richmond, VA',
    period: 'July 2023 — Present',
    summary: 'Full-stack engineer building distributed systems and user-facing applications across React/TypeScript frontend and .NET/SQL backend.',
    roles: [
      {
        title: 'Software Engineer II',
        period: 'March 2026 — Present',
        achievements: [
          'Architected event-driven microservices that process real-time data changes and orchestrate downstream actions across distributed services, enabling scalable, decoupled cross-team workflows.',
          'Defined system design patterns, architectural standards, and technical roadmaps adopted across multiple teams, streamlining feature delivery and reducing cross-team integration overhead.',
          'Partnered with product managers and stakeholders to scope initiatives, gather requirements, and drive delivery from planning through release.',
          'Mentored junior engineers and new hires through code reviews, pair programming, and architecture deep dives, accelerating onboarding and raising team-wide code quality.',
        ],
      },
      {
        title: 'Software Engineer I',
        period: 'September 2024 — February 2026',
        achievements: [
          'Designed and implemented relational database schemas, stored procedures, audit logging, and triggers in SQL Server, ensuring data integrity, traceability, and compliance across high-volume systems.',
          'Delivered backend balancing and assignment logic through .NET worker services, balance algorithms, and frontend-controlled manual workflows.',
          'Engineered event-driven workflows on Kafka and AWS (EventBridge, SQS, SNS) that automated critical business processes, eliminating manual effort and improving operational efficiency.',
          'Led multiple cross-functional projects end-to-end — driving agile sprint execution, managing stakeholder communication, and delivering progress demos on schedule.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: 'July 2023 — September 2024',
        achievements: [
          'Built the initial React and TypeScript frontend for a new internal platform, creating a library of reusable, scalable, and accessible UI components.',
          'Implemented complex multi-step modal workflows and state management to support flexible, extensible user operations.',
          'Collaborated with backend engineers on RESTful API design and SQL database logic, ensuring reliable system integration and supporting rapidly evolving business needs.',
        ],
      },
    ],
    techStack: ['React', 'TypeScript', 'C#', '.NET', 'SQL Server', 'AWS', 'Azure', 'Kafka'],
  },
  {
    id: '2',
    category: 'Instruction · Computer Science',
    company: 'Juni Learning',
    location: 'Remote',
    period: 'November 2021 — May 2023',
    summary: 'Delivered tailored computer science curriculum to students across skill levels.',
    roles: null,
    achievements: [
      'Delivered tailored advanced computer science curriculum covering data structures, algorithms, and applied programming, adapting lesson plans and pacing to individual student goals.',
      'Tracked student progress and managed weekly schedules, balancing instructional delivery with proactive parent and stakeholder communication.',
    ],
    techStack: ['Python', 'Java', 'JavaScript'],
  },
  {
    id: '3',
    category: 'Internship · IT',
    company: 'Bell Partners',
    location: 'Raleigh, NC',
    period: 'June 2022 — August 2022',
    summary: 'Built Power BI dashboards and performed data validation for operational reporting.',
    roles: null,
    achievements: [
      'Built interactive dashboards and reporting applications in Power BI to visualize operational and financial KPIs for executive stakeholders.',
      'Performed data validation using SQL and Excel, ensuring accuracy and consistency for downstream reporting and business analysis.',
    ],
    techStack: ['Power BI', 'SQL', 'Excel'],
  },
];

const education = {
  school: 'University of North Carolina at Chapel Hill',
  location: 'Chapel Hill, NC',
  period: 'August 2020 — May 2023',
  major: 'Computer Science',
  minor: 'Data Science',
  gpa: '3.8 / 4.0',
  achievements: [
    'B.A. Computer Science with a minor in Data Science.',
    'GPA: 3.8 / 4.0',
    'Undergraduate Teaching Assistant for Web Development coursework.',
  ],
};

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    date: 'November 2025',
  },
];

export function Experience() {
  const [tab, setTab] = useState<'experience' | 'education'>('experience');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 lg:px-16"
      style={{ background: '#FAF6F2' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#E89A85',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          THE RESUME BITS
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: 600,
            color: '#2A2438',
            lineHeight: 1.15,
            marginBottom: 8,
          }}
        >
          Where I've{' '}
          <span
            style={{
              fontFamily: '"Dancing Script", cursive',
              color: '#E89A85',
              fontWeight: 600,
            }}
          >
            been &amp; learned
          </span>
        </h2>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#9B86C2',
            fontFamily: '"DM Sans", sans-serif',
            fontStyle: 'italic',
            marginBottom: 32,
          }}
        >
          click any entry to expand · scroll to reveal
        </p>

        {/* Tab switcher */}
        <div
          className="inline-flex gap-1 mb-12"
          style={{
            background: 'rgba(42,36,56,0.06)',
            borderRadius: 999,
            padding: 4,
          }}
        >
          {(['experience', 'education'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                borderRadius: 999,
                padding: '8px 22px',
                fontSize: '0.875rem',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: tab === t ? '#2A2438' : 'transparent',
                color: tab === t ? '#FAF6F2' : '#5A4F6E',
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Experience tab */}
        {tab === 'experience' && (
          <div className="relative" style={{ paddingLeft: 32 }}>
            {/* Dotted vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 8,
                top: 0,
                bottom: 0,
                width: 2,
                borderLeft: '2px dotted rgba(232,154,133,0.4)',
              }}
            />

            <div className="space-y-10">
              {experiences.map(exp => {
                const isExpanded = expandedIds.has(exp.id);
                return (
                  <div key={exp.id} className="relative">
                    {/* Flower dot on line */}
                    <div
                      style={{
                        position: 'absolute',
                        left: -32,
                        top: 4,
                        transform: 'translateX(-50%)',
                        marginLeft: 10,
                      }}
                    >
                      <FlowerDot />
                    </div>

                    {/* Entry header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <p
                          style={{
                            fontSize: 11,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#E89A85',
                            fontFamily: '"DM Sans", sans-serif',
                            fontWeight: 600,
                            marginBottom: 4,
                          }}
                        >
                          {exp.category}
                        </p>
                        <h3
                          style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                            fontWeight: 600,
                            color: '#2A2438',
                            lineHeight: 1.1,
                            marginBottom: 4,
                          }}
                        >
                          {exp.company}
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: '#5A4F6E', fontFamily: '"DM Sans", sans-serif' }}>
                          {exp.summary}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ fontSize: '0.8rem', fontFamily: '"DM Sans", sans-serif', color: '#5A4F6E', whiteSpace: 'nowrap' }}>
                          {exp.period}
                        </p>
                        <p style={{ fontSize: '0.8rem', fontFamily: '"DM Sans", sans-serif', color: '#9B86C2' }}>
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Expand toggle */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: 600,
                        color: '#E89A85',
                        padding: '4px 0',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {isExpanded ? 'LESS ↑' : 'MORE ↓'}
                    </button>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-4">
                        {exp.roles ? (
                          exp.roles.map((role, ri) => (
                            <div key={ri} className={ri > 0 ? 'mt-6 pt-6' : ''} style={ri > 0 ? { borderTop: '1px solid rgba(42,36,56,0.08)' } : {}}>
                              <p style={{ fontSize: '0.8rem', fontFamily: '"DM Sans", sans-serif', color: '#9B86C2', fontStyle: 'italic', marginBottom: 8 }}>
                                {role.title} · {role.period}
                              </p>
                              <ul className="space-y-2">
                                {role.achievements.map((a, i) => (
                                  <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.875rem', color: '#5A4F6E', fontFamily: '"DM Sans", sans-serif' }}>
                                    <span style={{ color: '#E89A85', marginTop: 2 }}>+</span>
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          <ul className="space-y-2">
                            {exp.achievements!.map((a, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.875rem', color: '#5A4F6E', fontFamily: '"DM Sans", sans-serif' }}>
                                <span style={{ color: '#E89A85', marginTop: 2 }}>+</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.techStack.map(tech => (
                            <span
                              key={tech}
                              style={{
                                background: 'rgba(248,200,181,0.2)',
                                border: '1px solid rgba(232,154,133,0.3)',
                                borderRadius: 999,
                                padding: '3px 12px',
                                fontSize: '0.75rem',
                                color: '#2A2438',
                                fontFamily: '"DM Sans", sans-serif',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Education tab */}
        {tab === 'education' && (
          <div className="relative" style={{ paddingLeft: 32 }}>
            {/* Dotted vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 8,
                top: 0,
                bottom: 0,
                width: 2,
                borderLeft: '2px dotted rgba(232,154,133,0.4)',
              }}
            />

            <div className="space-y-10">
              {/* Certifications */}
              {certifications.map((cert, i) => (
                <div key={i} className="relative">
                  <div style={{ position: 'absolute', left: -32, top: 4, transform: 'translateX(-50%)', marginLeft: 10 }}>
                    <FlowerDot />
                  </div>
                  <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E89A85', fontFamily: '"DM Sans", sans-serif', fontWeight: 600, marginBottom: 4 }}>
                    Certification
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#2A2438', lineHeight: 1.1, marginBottom: 4 }}>
                        {cert.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#5A4F6E', fontFamily: '"DM Sans", sans-serif' }}>
                        {cert.issuer}
                      </p>
                    </div>
                    <p style={{ fontSize: '0.8rem', fontFamily: '"DM Sans", sans-serif', color: '#5A4F6E', whiteSpace: 'nowrap', textAlign: 'right', flexShrink: 0 }}>
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}

              {/* Degree */}
              <div className="relative">
                <div style={{ position: 'absolute', left: -32, top: 4, transform: 'translateX(-50%)', marginLeft: 10 }}>
                  <FlowerDot />
                </div>
                <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E89A85', fontFamily: '"DM Sans", sans-serif', fontWeight: 600, marginBottom: 4 }}>
                  B.A. Computer Science
                </p>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#2A2438', lineHeight: 1.1, marginBottom: 4 }}>
                      {education.school}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#5A4F6E', fontFamily: '"DM Sans", sans-serif' }}>
                      Major: {education.major} · Minor: {education.minor} · GPA: {education.gpa}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: '0.8rem', fontFamily: '"DM Sans", sans-serif', color: '#5A4F6E', whiteSpace: 'nowrap' }}>{education.period}</p>
                    <p style={{ fontSize: '0.8rem', fontFamily: '"DM Sans", sans-serif', color: '#9B86C2' }}>{education.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
