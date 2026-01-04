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
    <section id="education" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section with Grad Cap Background */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg md:min-h-[450px] min-h-[500px] mb-8"
          style={{
            backgroundImage: 'url(/images/new-grad-cap.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Overlay Content */}
          <div className="relative z-10 h-full flex items-start justify-start p-6 md:p-8 pt-6">
            <div className="max-w-lg w-full">
              {/* Single Combined Card */}
              <div className="bg-white/10 backdrop-blur-xs p-6 md:p-7 rounded-2xl shadow-none border border-white/10">
                {/* Education Section */}
                <div className="mb-6">
                  <h3 className="text-xs text-white font-medium uppercase tracking-wide mb-2 opacity-70">Education</h3>

                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h1 className="text-lg md:text-xl font-medium text-white mb-1">{education.school}</h1>
                      <p className="text-xs text-white font-medium opacity-75">{education.location}</p>
                    </div>
                    <p className="text-xs text-white/80 font-medium whitespace-nowrap">
                      {education.startDate} - {education.endDate}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-xs text-white font-medium opacity-70 mb-1">Major</p>
                      <p className="text-sm font-medium text-white">{education.major}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium opacity-70 mb-1">Minor</p>
                      <p className="text-sm font-medium text-white">{education.minor}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium opacity-70 mb-1">GPA</p>
                      <p className="text-sm font-medium text-white">{education.gpa}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6"></div>

                {/* Certifications Section */}
                <div>
                  <h3 className="text-xs text-white font-medium uppercase tracking-wide mb-3 opacity-70">Certifications</h3>

                  {certifications.map((cert, index) => (
                    <div key={index} className={index > 0 ? 'pt-3 mt-3 border-t border-white/10' : ''}>
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <h4 className="text-sm font-medium text-white flex-1">{cert.name}</h4>
                        <p className="text-xs text-white/80 font-medium whitespace-nowrap">{cert.date}</p>
                      </div>
                      <p className="text-xs text-white font-medium opacity-75">{cert.issuer}</p>
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
