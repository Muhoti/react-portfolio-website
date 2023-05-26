import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer|_logo'>STRONG MUHOTI</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
          <a href="https://facebook.com/strong.muhoti.1" target='_blank'><BsFacebook /></a>
          <a href="https://instagram.com/" target='_blank'><BsInstagram /></a>
          <a href="https://twitter.com/" target='_blank'><FiTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Strong Muhoti Inc. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer