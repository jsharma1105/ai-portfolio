import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

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
            <h4>Certifications</h4>
            <p>Microsoft Certified: Azure AI Engineer</p>
            <p>Microsoft Certified: Azure Developer Associate</p>
            <p>Microsoft Certified: Azure AI Fundamentals</p>
            <p>Microsoft Certified: Azure Fundamentals</p>
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
              Software Engineer &amp; <br /> <span>Cloud + AI Engineer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
