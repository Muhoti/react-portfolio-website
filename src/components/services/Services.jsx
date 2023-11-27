import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>User Needs Assessment.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Wireframing & Prototyping</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Visual Design & Branding</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Usability Evaluation</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Front-end Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back-end Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Full Stack Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>E-Commerce Solutions</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>API Development & Integration</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service_head">
            <h3>MOBILE APP DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>IOS App Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Android App Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Cross-platform Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Mobile App UI/UX Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>App Prototyping & Testing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>App Integration & Deployment</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>App Maintenance & Updates</p>
            </li>
          </ul>
        </article>

        {/* END OF MOBILE DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
