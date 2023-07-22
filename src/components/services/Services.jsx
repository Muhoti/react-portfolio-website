import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

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
              <p>Understanding client's needs and preferences.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Organizing content and navigation logically.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creating wireframes for basic layout.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Building interactive prototypes for testing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Designing visually appealing interfaces.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Optimizing for various devices and accessibility.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Continous Client Support</p>
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
              <p>
                Website Design: Visually appealing and user-friendly layouts.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back-End Development: Server-side logic and databases.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Full-Stack Development: End-to-end web application development.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>E-Commerce Solutions: Online stores with secure payments.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Content Management Systems (CMS): Easy content updates</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Web Design: Optimized for different devices.</p>
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
              <p>Native App Development: Platform-specific app creation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Cross-Platform App Development: Multi-platform compatibility.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>UI/UX Design: Intuitive, visually appealing interfaces.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Backend Development: Server-side logic and databases.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                App Testing and Quality Assurance: Ensuring functionality and
                perfomance.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                App Deployment: Publishing on app stores.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                App Maintenance and Updates: Ongoing support and improvements.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF MOBILE DEVELOPMENT */}
      </div>
    </section>
  );
}

export default Services