import { useState } from 'react'

interface CarouselImage {
  src: string
  alt: string
  caption: string
  description: string
}


const carouselImages: CarouselImage[] = [
  {
    src: "/images/solidcore-headshot.JPG",
    alt: "Solidcore headshot",
    caption: "Coaching a Solidcore class",
    description: "Outside of my 9–5, I’ve been coaching fitness classes at Solidcore since April 2024. I originally started coaching to push myself outside my comfort zone and become more confident speaking to large groups, but it soon became a meaningful outlet centered on fitness, movement, and personal growth."
  },
  {
    src: "/images/pip.png",
    alt: "Pip",
    caption: "With my cat Pip",
    description: "Yes, named after the Python package installer."
  },
  {
    src: "/images/hiking.png",
    alt: "Hiking ",
    caption: "Outside hiking",
    description: "I grew up in the mountains of North Carolina, where hiking became a big part of my life from a very young age and has continued into adulthood. Years ago, I completed a week-long backpacking trip on the Appalachian Trail, and more recently, I hiked in the Dolomites in Italy."
  },
  {
    src: "/images/ski.png",
    alt: "Skiing experience",
    caption: "On the slopes",
    description: "I learned to ski around the time I started elementary school, and it’s been a part of my life ever since. My first job was at a ski mountain during high school, and winter still brings that same excitement to get back on the slopes."
  },
  {
    src: "/images/pottery.png",
    alt: "Pottery and creative work",
    caption: "At the wheel",
    description: "This is a newer hobby of mine! I started pottery classes in early 2024, and while most of my creations are still charmingly lopsided mugs, I’ve explored both wheel throwing and handbuilding."
  }
];

export function Hobbies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="hobbies" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Outside of the 9-5</h2>
          <p className="text-gray-400 text-lg">You can find me... </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Photo Carousel */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl overflow-hidden">
            <div className="relative w-full aspect-square md:min-h-[500px]">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />

              {/* Right side text overlay - vertical transparent block */}
              <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/5 bg-gradient-to-l from-black/60 via-black/50 to-transparent flex flex-col justify-between p-6 md:p-8">
                <div></div>
                <div className="space-y-4">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    {carouselImages[currentImageIndex].caption}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {carouselImages[currentImageIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700 p-3 rounded-full transition-all duration-200 z-20"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700 p-3 rounded-full transition-all duration-200 z-20"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Image counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {carouselImages.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
