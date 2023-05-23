import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className='header_social'>
          <a href="https://linkedin.com/in/strong-muhoti-4b4394ab" target='_blank'><BsLinkedin /></a>
          <a href="https://github.com/muhoti" target='_blank'><FaGithub /></a>
          <a href="https://facebook.com/strong.muhoti.1" target='_blank'><BsFacebook /></a>

    </div>
  )
}

export default HeaderSocials
