'use client';

import { useMemo } from 'react';

interface Particle {
  left: number;
  delay: number;
  duration: number;
  size: number;
  sway: number;
}

export default function HeroSection() {
  const particles: Particle[] = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: 50 + (Math.random() - 0.5) * 20,
      delay: Math.random() * -5,
      duration: 2 + Math.random() * 3,
      size: 3 + Math.random() * 6,
      sway: (Math.random() - 0.5) * 60,
    }));
  }, []);

  return (
    <section className="hero-section">
      <div className="campfire-wrapper">
        <div className="campfire-container">
          <div className="flame-base">
            <div className="fire-light" />
            <div className="flame red" />
            <div className="flame orange" />
            <div className="flame yellow" />
            <div className="flame white" />
          </div>
          <div className="sparks-container">
            {particles.map((p, i) => (
              <div
                key={i}
                className="fire-particle"
                style={{
                  '--left': `${p.left}%`,
                  '--delay': `${p.delay}s`,
                  '--duration': `${p.duration}s`,
                  '--size': `${p.size}px`,
                  '--sway': `${p.sway}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Team Campfire</h1>
        <p className="hero-subtitle">여러 분야의 작은 열정들이 만나는 공간</p>
      </div>
    </section>
  );
}
