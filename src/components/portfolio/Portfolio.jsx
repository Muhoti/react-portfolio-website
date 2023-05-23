import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img1} alt="Portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
             <a href="https://github.com/muhoti" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img2} alt="Portfolio1" />
          </div>
          <h3>This is a portfolio 1 item</h3>
          <div className="portfolio_item-cta">
             <a href="https://github.com/muhoti" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img3} alt="Portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
             <a href="https://github.com/muhoti" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img4} alt="Portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
             <a href="https://github.com/muhoti" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img5} alt="Portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
             <a href="https://github.com/muhoti" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img6} alt="Portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
             <a href="https://github.com/muhoti" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio