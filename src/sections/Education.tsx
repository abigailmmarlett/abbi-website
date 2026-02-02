interface EducationItem {
  school: string
  location: string
  major: string
  minor: string
  gpa: string
  startDate: string
  endDate: string
}

interface Certification {
  name: string
  issuer: string
  date: string
}

const education: EducationItem = {
  school: "University of North Carolina at Chapel Hill",
  location: "Chapel Hill, NC",
  major: "Computer Science",
  minor: "Data Science",
  gpa: "3.8/4.0",
  startDate: "August 2020",
  endDate: "May 2023",
};

const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "November 2025",
  },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-gradient-to-b from-background to-background-alt">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5" style={{ animationDelay: '2s' }} />
        <div className="orb absolute bottom-1/4 right-1/3 w-80 h-80 bg-premium/5" style={{ animationDelay: '4s' }} />
      </div>

      {/* Full-width Hero Section with Grad Cap Background */}
      <div className="relative z-10">
        <div
          className="relative overflow-hidden shadow-2xl min-h-[500px] md:min-h-[600px] animate-fade-in group w-full"
          style={{
            backgroundImage: 'url(/images/new-grad-cap.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-primary/30"></div>

          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 opacity-30 mesh-gradient"></div>

          {/* Overlay Content */}
          <div className="relative z-10 h-full flex items-start justify-start p-6 md:p-12 lg:p-16 pt-12 md:pt-16">
            <div className="max-w-xl w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Enhanced Combined Card with Premium Glassmorphism */}
              <div className="glass-premium p-7 md:p-8 rounded-3xl shadow-2xl border border-white/30 spotlight transition-all duration-500 hover:scale-[1.02] hover:shadow-glow">
                {/* Education Section */}
                <div className="mb-7">
                  <h3 className="text-xs text-white font-semibold uppercase tracking-wider mb-3 opacity-80 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-white/40 rounded-full"></span>
                    Education
                  </h3>

                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h1 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{education.school}</h1>
                      <p className="text-sm text-white font-medium opacity-90">{education.location}</p>
                    </div>
                    <p className="text-sm text-white/90 font-semibold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {education.startDate} - {education.endDate}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                      <p className="text-xs text-white font-semibold opacity-80 mb-1.5 uppercase tracking-wide">Major</p>
                      <p className="text-sm font-bold text-white">{education.major}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                      <p className="text-xs text-white font-semibold opacity-80 mb-1.5 uppercase tracking-wide">Minor</p>
                      <p className="text-sm font-bold text-white">{education.minor}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                      <p className="text-xs text-white font-semibold opacity-80 mb-1.5 uppercase tracking-wide">GPA</p>
                      <p className="text-sm font-bold text-white">{education.gpa}</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-7"></div>

                {/* Certifications Section */}
                <div>
                  <h3 className="text-xs text-white font-semibold uppercase tracking-wider mb-4 opacity-80 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-white/40 rounded-full"></span>
                    Certifications
                  </h3>

                  {certifications.map((cert, index) => (
                    <div key={index} className={`${index > 0 ? 'pt-4 mt-4 border-t border-white/20' : ''} group hover:bg-white/5 rounded-lg p-2 -m-2 transition-all duration-300`}>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="text-base font-bold text-white flex-1 group-hover:text-accent-light transition-colors duration-300">{cert.name}</h4>
                        <p className="text-xs text-white/90 font-semibold whitespace-nowrap bg-white/10 px-2.5 py-1 rounded-full">{cert.date}</p>
                      </div>
                      <p className="text-sm text-white font-medium opacity-85">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
