import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const clickHandlers: Array<[HTMLDivElement, () => void]> = [];
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
          clickHandlers.push([container, handler]);
        }
      });
    }
    return () => {
      clickHandlers.forEach(([el, fn]) => el.removeEventListener("click", fn));
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI &amp; AGENTS</h3>
              <h4>Building Intelligent Agentic Systems</h4>
              <p>
                I design and ship AI agents on Azure AI Foundry from LLM
                integration and RAG pipelines to autonomous multi-step agents
                that automate enterprise workflows end to end.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Azure AI Foundry</div>
                <div className="what-tags">LLM &amp; RAG</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">GenAI</div>
                <div className="what-tags">AI Agents</div>
                <div className="what-tags">Responsible AI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CLOUD &amp; BACKEND</h3>
              <h4>Enterprise .NET &amp; Azure at Scale</h4>
              <p>
                9+ years building high-availability C# / .NET Core services on
                Azure &mdash; microservices, CI/CD, Kubernetes, and distributed
                systems that handle production load without breaking a sweat.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C# / .NET Core</div>
                <div className="what-tags">Azure IaaS/PaaS</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Azure DevOps</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">SOLID &amp; TDD</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
