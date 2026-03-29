import React, { useEffect, useState } from "react";

// Hard-coded star field — deterministic so it renders consistently
const STARS = [
  { x: 4,  y: 9,  s: 1.5 }, { x: 11, y: 3,  s: 1.0 }, { x: 19, y: 17, s: 2.0 },
  { x: 27, y: 6,  s: 1.5 }, { x: 34, y: 23, s: 1.0 }, { x: 41, y: 4,  s: 2.5 },
  { x: 49, y: 14, s: 1.0 }, { x: 57, y: 8,  s: 2.0 }, { x: 64, y: 26, s: 1.5 },
  { x: 71, y: 4,  s: 1.0 }, { x: 79, y: 19, s: 2.0 }, { x: 87, y: 9,  s: 1.5 },
  { x: 94, y: 21, s: 1.0 }, { x: 3,  y: 39, s: 1.5 }, { x: 9,  y: 54, s: 1.0 },
  { x: 17, y: 69, s: 2.0 }, { x: 24, y: 44, s: 1.0 }, { x: 31, y: 59, s: 1.5 },
  { x: 39, y: 79, s: 1.0 }, { x: 47, y: 49, s: 2.5 }, { x: 54, y: 67, s: 1.5 },
  { x: 61, y: 41, s: 1.0 }, { x: 69, y: 74, s: 2.0 }, { x: 77, y: 54, s: 1.5 },
  { x: 84, y: 71, s: 1.0 }, { x: 91, y: 47, s: 2.0 }, { x: 96, y: 64, s: 1.5 },
  { x: 6,  y: 84, s: 1.0 }, { x: 14, y: 91, s: 2.0 }, { x: 21, y: 87, s: 1.5 },
  { x: 47, y: 89, s: 1.0 }, { x: 59, y: 87, s: 2.0 }, { x: 74, y: 89, s: 1.0 },
  { x: 87, y: 84, s: 1.5 }, { x: 97, y: 91, s: 1.0 },
  // Bright anchor stars
  { x: 14, y: 34, s: 3.5 }, { x: 44, y: 29, s: 3.0 }, { x: 74, y: 37, s: 3.5 },
  { x: 29, y: 77, s: 3.0 }, { x: 61, y: 81, s: 3.5 }, { x: 90, y: 60, s: 3.0 },
];

const CONNECTIONS = [
  [0, 1], [1, 3], [3, 5], [5, 7], [7, 9],
  [2, 4], [4, 6], [6, 8],
  [13, 15], [15, 17], [17, 19],
  [20, 22], [22, 24], [24, 25],
  [35, 36], [36, 37],
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      {/* Constellation background */}
      <svg
        className="hero__stars"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.35" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {CONNECTIONS.map(([a, b], i) => (
          <line
            key={i}
            x1={STARS[a].x} y1={STARS[a].y}
            x2={STARS[b].x} y2={STARS[b].y}
            stroke="rgba(196,154,60,0.1)"
            strokeWidth="0.07"
          />
        ))}
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x} cy={s.y}
            r={s.s * 0.13}
            fill={s.s >= 3 ? "rgba(196,154,60,0.9)" : "rgba(210,222,238,0.5)"}
            filter={s.s >= 3 ? "url(#star-glow)" : undefined}
          />
        ))}
      </svg>

      <div className={`hero__inner${loaded ? " hero__inner--visible" : ""}`}>
        <div className="hero__photo-col">
          <div className="hero__photo-frame">
            <img
              src="./images/profile_1.jpg"
              alt="Alyssa Maruyama"
              className="hero__photo"
            />
          </div>
        </div>

        <div className="hero__text-col">
          <span className="hero__eyebrow">Senior Engineering Manager · Snorkel AI</span>
          <h1 className="hero__name">
            Alyssa Keimach<br />Maruyama
          </h1>
          <p className="hero__bio">
            Engineering leader with roots in computational physics and aerospace.
            Building high-performing teams that ship at the intersection
            of AI, product, and people.
          </p>
          <div className="hero__cta">
            <a href="https://github.com/akeimach" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akeimach/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:alyssakeimach@gmail.com" className="hero__cta--primary">
              Say hello →
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
