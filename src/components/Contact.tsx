import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const certs = [
  { name: "Azure AI Engineer", tier: "Associate", color: "#0078d4" },
  { name: "Azure Developer", tier: "Associate", color: "#0078d4" },
  { name: "Azure AI Fundamentals", tier: "Fundamentals", color: "#50e6ff" },
  { name: "Azure Fundamentals", tier: "Fundamentals", color: "#50e6ff" },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href="mailto:jsharma1105@gmail.com" data-cursor="disable">
                jsharma1105@gmail.com
              </a>
            </p>
            <p>Seattle, WA &nbsp;&middot;&nbsp; (672) 515-7744</p>
            <div className="seeking-row">
              <span className="seeking-dot"></span>
              Seeking: Senior AI / Cloud Engineering &middot; Remote or Seattle–Redmond
            </div>
            <h4>Certifications</h4>
            <div className="cert-grid">
              {certs.map((c) => (
                <div className="cert-badge" key={c.name}>
                  <div className="cert-logo" style={{ borderColor: c.color, color: c.color }}>
                    Az
                  </div>
                  <div className="cert-info">
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-tier" style={{ color: c.color }}>{c.tier}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>
              M.S. Information Technology &amp; Management<br />
              Illinois Institute of Technology, Chicago &mdash; 2016
            </p>
            <p>
              B.E. Information Technology<br />
              L.J. Institute of Engineering, Ahmedabad &mdash; 2014
            </p>
            <h4>Social</h4>
            <a
              href="https://github.com/jsharma1105"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/jsharma3/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Technology Lead &amp; <br /> <span>Azure AI Engineer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
