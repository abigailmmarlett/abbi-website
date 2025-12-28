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
    <section id="education" className="py-16 px-6" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-3">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
            My academic background and professional credentials
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left: Graduation Photo */}
          <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full md:min-h-[400px]">
            <img
              src="/images/abbi-grad.JPG"
              alt="Graduation photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Education and Certifications */}
          <div className="space-y-6 flex flex-col h-full md:min-h-[400px]">
            {/* Education Card */}
            <div className="p-5 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-1">
                  <h1 className="text-lg font-semibold text-foreground">{education.school}</h1>
                  <p className="text-primary text-xs font-medium">{education.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Major</p>
                  <p className="text-base font-semibold text-foreground">{education.major}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Minor</p>
                  <p className="text-base font-semibold text-foreground">{education.minor}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">GPA</p>
                  <p className="text-base font-semibold text-foreground">{education.gpa}</p>
                </div>
                <p className="text-xs text-muted-foreground pt-3 border-t border-gray-200 mt-3">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-5 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex-1">
              <div className="flex items-start gap-3 mb-4">
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>

              {certifications.map((cert, index) => (
                <div key={index} className="space-y-1 pb-3 last:pb-0 last:border-b-0 border-b border-gray-200 last:border-0">
                  <h4 className="text-base font-semibold text-foreground">{cert.name}</h4>
                  <p className="text-primary text-xs font-medium">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground font-medium">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
