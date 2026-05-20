import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AdPilot",
    category: "AI-Powered Advertising Campaign Agent",
    tools: "Azure AI Foundry · GPT-4o · Azure Functions · C# / .NET · Semantic Kernel",
    description: "Autonomous advertising agent that ingests campaign performance data, identifies underperforming creatives, generates optimized ad copy and audience segments, and auto-adjusts bids — boosting ROAS by 40%.",
    badge: "AI Agent",
    link: "https://github.com/jsharma1105/adpilot",
  },
  {
    title: "Koshi",
    category: "Context Engineering Toolkit for AI Agents",
    tools: ".NET 10 · C# · MCP 1.0 · Native AOT · Python / PyPI",
    description: "Open-source MCP server delivering 20 tools across retrieval, memory, context-packing, and team telemetry — all in a single zero-cloud binary. BM25 search, durable cross-session memory, token-budgeted prompt assembly, and agent turn scoring. 89 unit tests; ships as dotnet tool, pip package, or standalone binary.",
    badge: "Open Source",
    link: "https://github.com/jsharma1105/Koshi",
  },
  {
    title: "PipelineBot",
    category: "AI DevOps Orchestration Agent",
    tools: "Azure DevOps · LLM · C# / .NET · Azure Functions · Semantic Kernel",
    description: "Autonomous agent that watches CI/CD pipeline failures, classifies root causes with LLM analysis, auto-creates work items with context, and suggests targeted code fixes — cutting MTTR by 50%.",
    badge: "Agentic AI",
  },
  {
    title: "CloudOptimizer AI",
    category: "Autonomous Azure Cost Management Agent",
    tools: "Azure Cost Management · ML · Kubernetes · Azure Functions · C#",
    description: "Self-driving cost agent that continuously profiles Azure resource utilization, detects over-provisioned services, and executes safe rightsizing actions — delivering 30%+ cloud spend reduction.",
    badge: "Agentic AI",
  },
  {
    title: "SmartTest AI",
    category: "Agentic TDD Test Generation System",
    tools: "Azure AI Foundry · xUnit · .NET · SOLID Patterns · Azure DevOps",
    description: "LLM-driven agent that analyses code diffs and auto-generates xUnit / NUnit tests aligned with TDD and SOLID principles, integrating directly into PR gates and increasing code coverage by 35%.",
    badge: "Agentic AI",
  },
];

const badgeColors: Record<string, string> = {
  "AI Agent":    "#5eead4",
  "Agentic AI":  "#a78bfa",
  "Enterprise":  "#60a5fa",
  "Data & Cloud":"#fb923c",
  "Open Source": "#34d399",
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div className="carousel-title-row">
                          <h4>{project.title}</h4>
                          <span
                            className="project-badge"
                            style={{
                              borderColor: badgeColors[project.badge] ?? "#5eead4",
                              color: badgeColors[project.badge] ?? "#5eead4",
                            }}
                          >
                            {project.badge}
                          </span>
                        </div>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {"link" in project && project.link && (
                          <a
                            className="carousel-link"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="disable"
                          >
                            GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
