import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

/* import React, { useRef, useState } from "react"; */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
/* 
 import "../../styles.css";  */ 

// import required mod/*  */ules
import { Pagination } from "swiper";

const data=[
    {
        avatar:AVTR1,
        name:'Eva longoria',
        review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    },

    {
        avatar:AVTR2,
        name:'lola cortez',
        review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    },

    {
        avatar:AVTR3,
        name:'Juana Perez',
        review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    },

    {
        avatar:AVTR4,
        name:'Pedro Navajaz',
        review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper  pagination={true} modules={[Pagination]} className=" container testimonials__container mySwiper" >
        {
            data.map(({avatar,name,review},index) =>{
                return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
           {review}
          </small>
        </SwiperSlide>
                )
            })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
