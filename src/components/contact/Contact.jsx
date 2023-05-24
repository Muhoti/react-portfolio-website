import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>strongmuhoti@gmail.com</h5>
            <a href="mailto:strongmuhoti@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine/>
            <h4>Messanger</h4>
            <h5>Strong Developers</h5>
            <a href="https://m.me/strong.muhoti.1/">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>strongmuhoti@gmail.com</h5>
            <a href="https://api.whatsapp.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
      </div>
    </section>
  )
}

export default Contact