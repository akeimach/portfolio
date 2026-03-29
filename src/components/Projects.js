import React, { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    num: "01",
    name: "Brewski",
    desc: "Photograph a beer label — Google Cloud Vision OCR reads it and pulls rich data from RateBeer and BreweryDB APIs. Users log tastings, rate beers, and build their own collection.",
    tags: ["React", "Node.js", "Express", "MySQL", "Google Cloud Vision", "OAuth"],
    github: "https://github.com/akeimach",
    live: null,
  },
  {
    num: "02",
    name: "CloudNV",
    desc: "A mobile-first cloud identification app. Snap a photo of the sky and a custom algorithm backed by Google Cloud Vision identifies the cloud type and surfaces relevant scientific information.",
    tags: ["JavaScript", "Google Cloud Vision", "Wikipedia API", "Responsive CSS"],
    github: "https://github.com/akeimach",
    live: null,
  },
  {
    num: "03",
    name: "Mígreni",
    desc: "A migraine diary designed for frictionless logging. Pre-loaded triggers make recording an episode fast. Intensity and patterns are visualized over time with interactive charts.",
    tags: ["React", "Node.js", "MySQL", "Data Visualization"],
    github: "https://github.com/akeimach",
    live: null,
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

const ProjectCard = ({ proj, delay }) => {
  const [ref, visible] = useVisible(0.08);

  return (
    <div
      ref={ref}
      className={`project-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="project-card__num">{proj.num}</p>
      <h3 className="project-card__name">{proj.name}</h3>
      <p className="project-card__desc">{proj.desc}</p>
      <div className="project-card__tags">
        {proj.tags.map((t) => (
          <span key={t} className="project-card__tag">{t}</span>
        ))}
      </div>
      <div className="project-card__links">
        {proj.github && (
          <a href={proj.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        )}
        {proj.live && (
          <a href={proj.live} target="_blank" rel="noopener noreferrer">
            Live ↗
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [headerRef, headerVisible] = useVisible(0.2);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`projects__header fade-up${headerVisible ? " visible" : ""}`}
        >
          <span className="section-label">Work</span>
          <div className="section-divider" />
          <h2 className="display-lg">Selected Projects</h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} proj={p} delay={i * 130} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
