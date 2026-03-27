import { PropsWithChildren } from "react";
import "./styles/Landing.css";

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
          </div>
          <div className="landing-info">
            <h3>Software Engineer &amp;</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Turning Curiosity into AI Solutions</div>
              <div className="landing-h2-2">Full Stack Cloud Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full Stack Cloud Engineer</div>
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
