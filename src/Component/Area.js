import React from 'react';
import '../css/Area.css'
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
        initialSlide:1,
        autoplay: true,
        arrows:false,
        speed: 4000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [{
            breakpoint: "750px",
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay:true,
              speed:3000,
            }, 
          }]
    };
    return (<>
     <div className='areaouter'>
        <div className='areainner'>
                <div className='areabody'>
                    <h1>Our Focus Areas</h1>
                    <p>Our experts in technical architecture will provide you solutions to streamline your business. Reach us for our vast resource of programmers, analysts, QA, Marketing.</p>
                
                <div class="areadiv">
                <div  style={{background: "rgba(224,210,130,0.4)"}} className='areadivbody'>
                    <img  src={user} alt="" />
                    <h1>500+</h1>
                    <h5>Clients</h5>
                </div> 
                <div className='bg-gray-600  areadivbody '>
                    <img  src={globe} alt="" />
                    <h1>20+</h1>
                    <h5 className='font-Poppins font-semibold text-white text-center text-2xl mb-8 '>Global Presence</h5>
                </div>
                <div className='bg-violet-500  areadivbody'>
                    <img  src={like} alt="" />
                    <h1>100%</h1>
                    <h5>Customer Satisfaction</h5>
                </div>
                <div style={{background: "rgba(77,195,197,0.4)"}} className='areadivbody'>
                    <img  src={ind} alt="" />
                    <h1>3000+</h1>
                    <h5>Industry Spefic Solutions</h5>
                </div>
            </div>
            <h1>Industries we Service</h1>
            <p>Our experts have industry experience and domain expertise in planning, Implementation, Customization, product training, and customer support. Talk to us now to know more or tell us about your requirements and we will be glad to pitch-in.</p>
            
            <div className='sliderdiv'>
            <Slider {...settings}>
                    <div className='sliderdivbody'>
                        <img  className='ml-24'  src={drop} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>oil</h2>
                    </div>
                    <div className='sliderdivbody'>
                        <img className='ml-24' src={pharma} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>pharma</h2>
                    </div>
                    <div className='sliderdivbody'>
                        <img className='ml-24'  src={travel} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>travel</h2>

                    </div>
                    <div className='sliderdivbody'>
                        <img  className='ml-24'  src={retail} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>retail</h2>
                    </div>
                    <div className='sliderdivbody'>
                        <img className='ml-24' src={chem} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>chemical</h2>
                    </div>
                    <div className='sliderdivbody'>

                        <img className='ml-24' src={auto} alt="" />
                        <h2 className=' pt-5 text-slate-300 uppercase text-xl'>AUTOMOTIVE</h2>

                    </div>
                </Slider>
            </div>
            </div>
        </div>
        </div>
   </>);
};

export default Area;