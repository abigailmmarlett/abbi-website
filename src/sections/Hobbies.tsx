import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hobbies = [
  {
    id: 2,
    caption: "With my cat, Pip",
    description: "Yes, named after the Python package installer. Mostly nocturnal, mostly judgmental, fully in charge.",
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

const cardLayout = [
  { top: 0,   left: 0,   rotate: '-3deg' },
  { top: 10,  left: 250, rotate: '5deg'  },
  { top: 155, left: 115, rotate: '-1deg' },
  { top: 285, left: 10,  rotate: '4deg'  },
  { top: 275, left: 255, rotate: '-6deg' },
];

export function Hobbies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevHobby = () => setActiveIndex(i => (i - 1 + hobbies.length) % hobbies.length);
  const nextHobby = () => setActiveIndex(i => (i + 1) % hobbies.length);

  return (
    <section id="outside-work" className="py-20 relative overflow-hidden" style={{ background: '#FAF6F2' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Desktop: two-column layout */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-16">

            {/* Left column: heading + description */}
            <div className="md:w-[45%] flex-shrink-0 mb-12 md:mb-0 md:sticky md:top-24">
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
                OUTSIDE WORK
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
                  marginBottom: 32,
                }}
              >
                you can find me...
              </p>

              {/* Active hobby description — desktop only */}
              <div key={activeIndex} className="hidden md:block animate-fade-in">
                <h3
                  style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                    color: '#2A2438',
                    marginBottom: 10,
                  }}
                >
                  {hobbies[activeIndex].caption}
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.95rem',
                    color: '#5A4F6E',
                    lineHeight: 1.75,
                  }}
                >
                  {hobbies[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Right column: scattered polaroid collage (desktop) */}
            <div className="hidden md:block md:w-[55%]">
              <div className="relative" style={{ height: 480 }}>
                {hobbies.map((hobby, i) => {
                  const isActive = i === activeIndex;
                  const pos = cardLayout[i];
                  return (
                    <div
                      key={hobby.id}
                      onClick={() => setActiveIndex(i)}
                      style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        width: 200,
                        background: '#ffffff',
                        padding: 10,
                        borderRadius: 4,
                        boxShadow: isActive
                          ? '0 8px 32px rgba(42,36,56,0.25)'
                          : '0 4px 20px rgba(42,36,56,0.15)',
                        transform: isActive
                          ? 'rotate(0deg) scale(1.06)'
                          : `rotate(${pos.rotate}) scale(1)`,
                        outline: isActive ? '2px solid #E89A85' : 'none',
                        zIndex: isActive ? 10 : i + 1,
                        cursor: isActive ? 'default' : 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, outline 0.3s ease',
                      }}
                    >
                      <img
                        src={hobby.image}
                        alt={hobby.caption}
                        style={{
                          width: '100%',
                          height: 160,
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: 2,
                        }}
                      />
                      <p
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.75rem',
                          color: '#5A4F6E',
                          marginTop: 8,
                          textAlign: 'center',
                          lineHeight: 1.3,
                        }}
                      >
                        {hobby.caption}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: single-card carousel */}
            <div className="md:hidden w-full">
              {/* Card + arrows */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Prev arrow */}
                <button
                  onClick={prevHobby}
                  aria-label="Previous"
                  style={{
                    position: 'absolute',
                    left: 0,
                    zIndex: 10,
                    background: 'rgba(255,255,255,0.85)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(42,36,56,0.15)',
                  }}
                >
                  <ChevronLeft size={20} style={{ color: '#E89A85' }} />
                </button>

                {/* Polaroid card */}
                <div
                  key={activeIndex}
                  className="animate-fade-in"
                  style={{
                    width: '85%',
                    background: '#ffffff',
                    padding: 10,
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(42,36,56,0.18)',
                  }}
                >
                  <img
                    src={hobbies[activeIndex].image}
                    alt={hobbies[activeIndex].caption}
                    style={{
                      width: '100%',
                      aspectRatio: '3 / 2',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: 2,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.75rem',
                      color: '#5A4F6E',
                      marginTop: 8,
                      textAlign: 'center',
                      lineHeight: 1.3,
                    }}
                  >
                    {hobbies[activeIndex].caption}
                  </p>
                </div>

                {/* Next arrow */}
                <button
                  onClick={nextHobby}
                  aria-label="Next"
                  style={{
                    position: 'absolute',
                    right: 0,
                    zIndex: 10,
                    background: 'rgba(255,255,255,0.85)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(42,36,56,0.15)',
                  }}
                >
                  <ChevronRight size={20} style={{ color: '#E89A85' }} />
                </button>
              </div>

              {/* Navigation dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
                {hobbies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to ${hobbies[i].caption}`}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      background: i === activeIndex ? '#E89A85' : 'rgba(90,79,110,0.25)',
                      transition: 'background 0.2s ease',
                    }}
                  />
                ))}
              </div>

              {/* Description */}
              <div key={activeIndex} className="animate-fade-in" style={{ marginTop: 24 }}>
                <h3
                  style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '1.3rem',
                    color: '#2A2438',
                    marginBottom: 8,
                  }}
                >
                  {hobbies[activeIndex].caption}
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.95rem',
                    color: '#5A4F6E',
                    lineHeight: 1.75,
                  }}
                >
                  {hobbies[activeIndex].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
