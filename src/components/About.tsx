import { useEffect, useRef } from "react";
import "./styles/About.css";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Azure Certifications" },
  { value: 5, suffix: "+", label: "AI Agents Shipped" },
];

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        container.querySelectorAll<HTMLElement>(".stat-value").forEach((el) => {
          const target = parseInt(el.dataset.target ?? "0", 10);
          const suffix = el.dataset.suffix ?? "";
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 30));
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
          }, 40);
        });
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Technology Lead with 10+ years building enterprise-grade cloud systems
          on Azure. I craft clean, testable C# / .NET backends, ship AI agents
          powered by Azure AI Foundry, and own CI/CD pipelines end to end &mdash;
          from architecture to production at scale.
        </p>
        <div className="about-stats" ref={statsRef}>
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span
                className="stat-value"
                data-target={s.value}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
