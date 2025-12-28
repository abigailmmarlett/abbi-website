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
    const particleCount = 20;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
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
            backgroundColor: '#06b6d4',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: `floatUp ${particle.duration}s linear ${particle.delay}s infinite`,
            opacity: 0.25,
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)',
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-120vh);
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;
