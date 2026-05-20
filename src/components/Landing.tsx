import { PropsWithChildren, useEffect, useRef, useState } from "react";
import "./styles/Landing.css";

const ROLES = ["AI Engineer", "Technology Lead", "Cloud Architect", ".NET Expert", "MCP Builder"];

const Typewriter = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          45
        );
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, typing, roleIdx]);

  return (
    <span className="typewriter-text">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I&#39;m</h2>
            <h1>
              JAY
              <br />
              <span>SHARMA</span>
            </h1>
            <div className="landing-typewriter">
              <Typewriter />
            </div>
            <div className="landing-available">
              <span className="available-dot"></span>
              Open to Senior Roles
            </div>
            <a
              className="landing-cta"
              href="/JaySharma_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume ↗
            </a>
          </div>
          <div className="landing-info">
            <h3>Technology Lead &amp;</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Turning Curiosity into AI Solutions</div>
              <div className="landing-h2-2">Azure AI &amp; .NET Expert</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Azure AI &amp; .NET Expert</div>
              <div className="landing-h2-info-1">Turning Curiosity into AI Solutions</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
