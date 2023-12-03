import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";
import img7 from "../../assets/portfolio7.jpg";
import img8 from "../../assets/portfolio8.jpg";

const data = [
  {
    id: 8,
    image: img8,
    title: "Box Champy Fitness & Training",
    github: "https://github.com/muhoti",
    demo: "https://www.figma.com/proto/4wGFc3QWx7dmkmPiouv0Ie/BOXING-CLUB?type=design&node-id=1-2&t=aXAtQU17hQWtqquI-0&scaling=min-zoom&page-id=0%3A1",
  },
  {
    id: 7,
    image: img7,
    title: "USAID Monitoring & Evaluation Management Information System",
    github: "https://github.com/muhoti",
    demo: "https://www.figma.com/proto/rRH3JzUKT4WVBpkU8QLLd4/MEL-MIS?type=design&node-id=141-6138&t=ywsFIh7YeWieubLx-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=141%3A6150&show-proto-sidebar=1",
  },
  {
    id: 1,
    image: img1,
    title: "Ambulex Solutions Emergency Response System",
    github: "https://github.com/muhoti",
    demo: "https://dashboard.ambulexsolutions.org/",
  },
  {
    id: 2,
    image: img2,
    title: "Meru County Agricultural Management Information System",
    github: "https://github.com/muhoti",
    demo: "https://meru.dat.co.ke/",
  },
  {
    id: 3,
    image: img3,
    title: "KiriAMIS -Agricultural Information Management System",
    github: "https://github.com/muhoti",
    demo: "https://admin-kirinyaga.dat.co.ke/",
  },
  {
    id: 4,
    image: img4,
    title: "Vihiga County - Farmer Mapping Mobile App",
    github: "https://github.com/muhoti",
    demo: "https://dribbble.com/",
  },
  {
    id: 5,
    image: img5,
    title: "Asset Tracking App for UETCL",
    github: "https://github.com/muhoti",
    demo: "https://dribbble.com/",
  },
  {
    id: 6,
    image: img6,
    title: "Ambulex: Emergency Reporting Mobile App",
    github: "https://github.com/muhoti",
    demo: "https://dashboard.ambulexsolutions.org/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
