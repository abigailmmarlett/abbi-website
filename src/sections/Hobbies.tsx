import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hobbies = [
  {
    id: 2,
    caption: "With my cat, Pip",
    description: "Yes, named after the Python package installer.",
    image: '/images/pip.jpg',
  },
  {
    id: 5,
    caption: "On a hike",
    description: "I grew up in the mountains of North Carolina, where hiking became a big part of my life from a very young age and has continued into adulthood. Years ago, I completed a week-long backpacking trip on the Appalachian Trail, and more recently, I hiked in the Dolomites in Italy.",
    image: '/images/hiking.jpg',
  },
  {
    id: 1,
    caption: "Coaching a Solidcore class",
    description: "Out of office, I've been coaching fitness classes at Solidcore since April 2024. I originally started coaching to push myself outside my comfort zone and become more confident speaking to large groups, but it soon became a meaningful outlet centered on fitness, movement, and personal growth.",
    image: '/images/solidcore.jpg',
  },
  {
    id: 4,
    caption: "At the wheel",
    description: "This is a newer hobby of mine! I started pottery classes in early 2024, and while most of my creations are still charmingly lopsided mugs, I've explored both wheel throwing and handbuilding.",
    image: '/images/pottery.jpg',
  },
  {
    id: 3,
    caption: "On the slopes",
    description: "I learned to ski around the time I started elementary school, and it's been a part of my life ever since. My first job was at a ski mountain during high school, and winter still brings that same excitement to get back on the slopes.",
    image: '/images/ski.png',
  },
];

export function Hobbies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hobbies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="outside-work" className="py-20 relative overflow-hidden" style={{ background: '#FAF6F2' }}>
      <div className="relative z-10">
        {/* Section heading */}
        <div className="container mx-auto px-6 mb-12">
          <div className="max-w-5xl mx-auto text-center">
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
              + 06 — OUTSIDE WORK
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 600,
                color: '#2A2438',
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              out of{' '}
              <span
                style={{
                  fontFamily: '"Dancing Script", cursive',
                  color: '#E89A85',
                  fontWeight: 600,
                }}
              >
                the office
              </span>
            </h2>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                color: '#5A4F6E',
                fontStyle: 'italic',
              }}
            >
              you can find me...
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: 24, boxShadow: '0 8px 40px rgba(42,36,56,0.1)' }}
          >
            {/* Main Image */}
            <div className="relative w-full aspect-video">
              <img
                src={hobbies[currentIndex].image}
                alt={hobbies[currentIndex].caption}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(248,200,181,0.9)',
                  border: '1.5px solid rgba(232,154,133,0.5)',
                  color: '#2A2438',
                  borderRadius: 999,
                  padding: 10,
                  minWidth: 44,
                  minHeight: 44,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(42,36,56,0.15)',
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(248,200,181,0.9)',
                  border: '1.5px solid rgba(232,154,133,0.5)',
                  color: '#2A2438',
                  borderRadius: 999,
                  padding: 10,
                  minWidth: 44,
                  minHeight: 44,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(42,36,56,0.15)',
                }}
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Caption card below image */}
            <div
              style={{
                background: '#ffffff',
                padding: '2rem 2rem',
                borderTop: '1px solid rgba(42,36,56,0.06)',
              }}
            >
              <div className="max-w-5xl mx-auto">
                <h3
                  style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
                    color: '#2A2438',
                    marginBottom: 10,
                  }}
                >
                  {hobbies[currentIndex].caption}
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.95rem',
                    color: '#5A4F6E',
                    lineHeight: 1.7,
                  }}
                >
                  {hobbies[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {hobbies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  height: 8,
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: index === currentIndex ? 32 : 8,
                  background: index === currentIndex ? '#E89A85' : 'rgba(232,154,133,0.3)',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
