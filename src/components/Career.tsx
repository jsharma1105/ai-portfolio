import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Lead</h4>
                <h5>Infosys Limited &middot; Redmond, WA</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading teams of 6–10 engineers delivering scalable .NET / Azure
              solutions at enterprise scale. Shipped 3 production AI agents on
              Azure AI Foundry, built Synapse pipelines processing millions of
              daily records, and drove measurable Azure cost reductions through
              proactive cloud optimization.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Populus Group &middot; Oak Brook, IL</h5>
              </div>
              <h3>2017&ndash;19</h3>
            </div>
            <p>
              Architected secure Azure solutions &mdash; App Services, Functions,
              and SQL &mdash; powering mission-critical, high-throughput
              applications. Delivered C# / .NET WebAPI services following SOLID
              principles and streamlined Azure DevOps CI/CD pipelines to
              accelerate release cycles.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>iAOS Solutions &middot; Schaumburg, IL</h5>
              </div>
              <h3>2016&ndash;17</h3>
            </div>
            <p>
              Built responsive C# / MVC web applications with AWS integrations
              for enterprise clients, maintaining high availability while
              shipping bi-weekly releases through disciplined clean architecture
              and test-driven development practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
