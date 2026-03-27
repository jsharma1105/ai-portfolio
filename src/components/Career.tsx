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
                <h4>Software Engineer</h4>
                <h5>Alaska Airlines &middot; SeaTac, WA</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contracted directly with Alaska Airlines engineering &mdash; building
              enterprise C# / .NET Core WebAPI services, optimizing Azure DevOps
              CI/CD pipelines, implementing TDD and XP practices, and
              identifying cloud cost reduction strategies on Azure.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Lead</h4>
                <h5>Infosys &middot; Vancouver, BC</h5>
              </div>
              <h3>2019&ndash;24</h3>
            </div>
            <p>
              Architected scalable .NET / Azure cloud solutions, led AI
              initiatives on Azure AI Foundry with responsible LLM deployment,
              built Synapse Analytics pipelines for real-time data at scale, and
              mentored cross-functional engineering teams.
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
              and SQL &mdash; for mission-critical high-throughput applications.
              Developed C# / .NET WebAPI services with SOLID principles and
              maintained Azure DevOps CI/CD pipelines.
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
              Built responsive C# / MVC web applications with AWS integrations,
              JavaScript front ends, and clean architecture patterns in an agile
              team focused on code quality and continuous delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
