import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import co1 from '../assets/ourcl1.png'
import co2 from '../assets/ourcl2.png'
import co3 from '../assets/ourcl3.png'
import co4 from '../assets/ourcl4.png'

import '../css/Clients.css'

const Clients = (props) => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide:1,
        autoplay: true,
        arrows:false,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [{
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              autoplay:true,
              initialSlide: 2
            }
          }]
    };
    return (
        <div className='clientouter'>
            <div className='clientinner'>

           
        <div className='bg-white clientsdiv'>
            <h1 >{props.name}</h1>
            <Slider {...settings}>
                <div>
                    <img src={co1} alt="" />
                </div>

                <div>
                    <img src={co2} alt="" />
                </div>

                <div>
                    <img src={co3} alt="" />
                </div>

                <div>
                    <img src={co4} alt="" />
                </div>


            </Slider>
        </div> </div>
        </div>
    );
};

export default Clients;