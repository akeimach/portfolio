import React, { useEffect, useRef, useState } from "react";

const DEGREES = [
  {
    degree: "M.Eng. Engineering Management",
    school: "Duke University",
    period: "2022 — 2024",
    detail:
      "Graduate program at the intersection of engineering leadership, systems thinking, and technology strategy.",
  },
  {
    degree: "B.S. Computational Physics",
    school: "University of Michigan",
    period: "2011 — 2015",
    detail:
      "Minors in Computer Science and Astrophysics. Research in computational modeling, simulation, and physics pedagogy.",
  },
];

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const EduCard = ({ deg, delay }) => {
  const [ref, visible] = useVisible(0.1);

  return (
    <div
      ref={ref}
      className={`edu-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="edu-card__degree">{deg.degree}</p>
      <h3 className="edu-card__school">{deg.school}</h3>
      <p className="edu-card__period">{deg.period}</p>
      <p className="edu-card__detail">{deg.detail}</p>
    </div>
  );
};

const Education = () => {
  const [headerRef, headerVisible] = useVisible(0.2);

  return (
    <section className="education" id="education">
      <div className="container">
        <div
          ref={headerRef}
          className={`education__header fade-up${headerVisible ? " visible" : ""}`}
        >
          <span className="section-label">Background</span>
          <div className="section-divider" />
          <h2 className="display-lg">Education</h2>
        </div>

        <div className="education__grid">
          {DEGREES.map((d, i) => (
            <EduCard key={i} deg={d} delay={i * 160} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
