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
              <VscFolderLibrary className="about_icon" />
              <h5>Experience</h5>
              <small>3 Years + Working</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am a seasoned technologist, constantly fueled by the desire to
            create innovative solutions that drive efficiency and productivity
            for businesses. With years of experience under my belt, I have honed
            my skills to deliver top-notch digital products that meet the unique
            needs of each client.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About