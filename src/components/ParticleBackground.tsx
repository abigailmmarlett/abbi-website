import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 6;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 80 + 60,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 8,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 5,
        background: 'transparent',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.left}%`,
            bottom: '0',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'rgba(75, 156, 211, 0.08)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: `floatUp ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            border: '1px solid rgba(75, 156, 211, 0.15)',
            boxShadow: 'inset -2px -2px 8px rgba(75, 156, 211, 0.1), 0 8px 16px rgba(75, 156, 211, 0.08)',
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) translateX(30px);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-120vh) translateX(-30px);
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;
