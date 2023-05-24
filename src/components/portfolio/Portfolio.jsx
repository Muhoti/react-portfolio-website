import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/muhoti',
    demo: 'https://dribbble.com/'
  },
  {
    id: 2,
    image: img2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/muhoti',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    image: img3,
    title: 'Figma dashboard UI kit for design web apps',
    github: 'https://github.com/muhoti',
    demo: 'https://dribbble.com/'
  },
  {
    id: 4,
    image: img4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/muhoti',
    demo: 'https://dribbble.com/'
  },
  {
    id: 5,
    image: img5,
    title: 'Charts templates & infographics',
    github: 'https://github.com/muhoti',
    demo: 'https://dribbble.com/'
  },
  {
    id: 6,
    image: img6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/muhoti',
    demo: 'https://dribbble.com/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio