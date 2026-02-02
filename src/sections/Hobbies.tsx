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
    <section id="outside-work" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-background-alt to-background">
      <div className="relative z-10">
        <div className="container mx-auto px-6 mb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 animate-fade-in">
              OUT OF OFFICE
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              You can find me...
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
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
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-110 hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-110 hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Content Below Image */}
            <div className="p-8 bg-background">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  {hobbies[currentIndex].caption}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
