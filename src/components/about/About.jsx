import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Experience</h5>
              <small>3 + Year Working</small>
            </article>

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
            
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dignissimos fuga mollitia saepe aspernatur rerum eligendi iusto ipsa dolorem. Ipsa quasi excepturi inventore impedit id numquam quia temporibus voluptate quam!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About