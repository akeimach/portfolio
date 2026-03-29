import React, { useEffect, useRef, useState } from "react";

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Senior Engineering Manager",
    company: "Snorkel AI",
    active: true,
    desc: "Leading a full-stack product engineering team owning Snorkel's core data labeling, evaluation, and workflow experiences. Focused on team growth, cross-functional partnership, and consistent delivery.",
  },
  {
    period: "2023 — 2024",
    role: "Tech Lead / Engineering Manager",
    company: "Snorkel AI",
    desc: "Delivered major product investments while growing technical leadership across the team. Established engineering processes that raised release quality and individual development.",
  },
  {
    period: "2020 — 2023",
    role: "Staff Software Engineer",
    company: "Snorkel AI",
    desc: "Joined as an early engineer and grew to Staff. Built core product infrastructure including frontend architecture, caching systems, and data viewers.",
  },
  {
    period: "2018 — 2020",
    role: "Software Engineer",
    company: "Narvar",
    desc: "Full-stack engineering at scale — analytics dashboards, a GraphQL server handling billions of weekly requests, and accessibility compliance across the product.",
  },
  {
    period: "2015 — 2017",
    role: "Associate Engineer, Air Warfare Simulation",
    company: "FAAC Incorporated",
    desc: "Physics-driven defense simulation software for DoD customers. Worked in C/C++ and assembly on flight systems.",
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

const TimelineItem = ({ item, delay }) => {
  const [ref, visible] = useVisible(0.1);

  return (
    <div
      ref={ref}
      className={`timeline__item${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`timeline__dot${item.active ? " timeline__dot--active" : ""}`} />
      <p className="timeline__period">{item.period}</p>
      <h3 className="timeline__role">{item.role}</h3>
      <p className="timeline__company">{item.company}</p>
      <p className="timeline__desc">{item.desc}</p>
    </div>
  );
};

const Experience = () => {
  const [headerRef, headerVisible] = useVisible(0.2);

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div
          ref={headerRef}
          className={`experience__header fade-up${headerVisible ? " visible" : ""}`}
        >
          <span className="section-label">Career</span>
          <div className="section-divider" />
          <h2 className="display-lg">Experience</h2>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
