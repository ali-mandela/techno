import React from 'react';
import './Area.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeBanner from '../assets/Hom-banner-Image-01-min-scaled.jpg'
import user from '../assets/clients.png'
import globe from '../assets/globe.png'
import like from '../assets/like.png'
import ind from '../assets/industry.png'
import drop from '../assets/drop.png'
import pharma from '../assets/pharma.png'
import travel from '../assets/travel.png'
import auto from '../assets/automotive.png'
import retail from '../assets/cart.png'
import chem from '../assets/chemical.png'

import Slider from 'react-slick';

const Area = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
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
        <div className=' bg-cover rounded-bl-3xl rounded-br-3xl bg-violet-900' >
            <div className=''>
                <h1 className='text-center font-Poppins  areaText font-semibold text-5xl text-sky-400 pt-36'>Our Focus Areas</h1>
                <h1 className='text-white font-Poppins areaText text-2xl text-center px-24 py-6 mb-10'>Our experts in technical architecture will provide you solutions to streamline your business. Reach us for our vast resource of programmers, analysts, QA, Marketing.</h1>
            </div>
            <div class="areadiv">
                <div className='bg-purple-400 rounded-lg p-6  f-1'>
                    <img className='ml-16' src={user} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>500+</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Clients</h1>
                </div>
                <div className='bg-gray-600 rounded-lg p-6 f-2 '>
                    <img className='ml-16' src={globe} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>20+</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8 '>Global Presence</h1>
                </div>
                <div className='bg-violet-500 rounded-lg p-6 f-1'>
                    <img className='ml-16' src={like} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>100%</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Customer Satisfaction</h1>
                </div>
                <div className='bg-indigo-500 rounded-lg p-6 f-2'>
                    <img className='ml-16' src={ind} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>3000+</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Industry Spefic Solutions</h1>
                </div>
            </div>
            <div className=''>
                <h1 className='text-center font-Poppins font-semiboldareaText  text-5xl text-sky-400 pt-36'>Industries we Service</h1>
                <h1 className='text-white font-Poppins text-2xl text-center areaText  px-24 py-6 mb-10'>Our experts have industry experience and domain expertise in planning, Implementation, Customization, product training, and customer support. Talk to us now to know more or tell us about your requirements and we will be glad to pitch-in.</h1>
            </div>
            <div className='px-24 pb-14'>
                <Slider {...settings}>
                    <div>
                        <img src={drop} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>oil</h2>
                    </div>
                    <div>
                        <img className='ml-4' src={pharma} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>pharma</h2>
                    </div>
                    <div>
                        <img src={travel} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>travel</h2>

                    </div>
                    <div>
                        <img src={retail} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>retail</h2>
                    </div>
                    <div>
                        <img className='ml-4' src={chem} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>chemical</h2>
                    </div>
                    <div>

                        <img className='ml-6' src={auto} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>AUTOMOTIVE</h2>

                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Area;