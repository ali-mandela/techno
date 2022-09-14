import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import co1 from '../assets/ourcl1.png'
import co2 from '../assets/ourcl2.png'
import co3 from '../assets/ourcl3.png'
import co4 from '../assets/ourcl4.png'

const Clients = (props) => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }]
    };
    return (
        <div className='px-24 bg-white py-10 clientsdiv'>
            <h1 className='text-violet-700 font-bold text-6xl  my-14 text-center font-Poppins uppercase'>{props.name}</h1>
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
        </div>
    );
};

export default Clients;