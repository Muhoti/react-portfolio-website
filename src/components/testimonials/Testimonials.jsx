import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'I worked with Strong Muhoti on my personal portfolio and I just loved how he offered his services. To him, client satisfaction is key and I must say I really admired his patience.',
  },

  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'I really needed a webiste for my clothe business when a friend hooked me up with Mr. Strong. I\'m in the process of telling all my friends about him coz he is just the guy who gives you what you want. Kudos Strong!',
  },

  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Strong made for me my business\' app. It works so seamlessly but the best thing I loved about him; was his customer service. It is just top notch😉',
  },

  {
    avatar: AVTR4,
    name: 'Nana Ana McBrown',
    review: 'We bumped into each other with Strong on an event we had both attended and he told me how he makes mobile apps for businesses. I needed an android app for managing my business web app and in less than a month Strong made me a perfect one. Morever, he even hosted it for me for free! He is really your go to guy for your business app needs. Thanks Strong Muhoti!😎',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{ review }</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
   </section>
  )
}

export default Testimonials