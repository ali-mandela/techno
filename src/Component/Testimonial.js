import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Testimonial.css'

const Testimonial = () => {

    
    const testinomialSetting = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed: 3000,
        adaptiveHeight:true,
        mobileFirst:true,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <div className='testimonialouter'>
            <div className='testimonialinner'>
                <div className='testimonialbodydiv'>
                    <h1 className='text-violet-900  '>TESTIMONIALS</h1>
                    <h2 className='text-slate-800  '>TECHNOISOLUTIONS
                        TECHNICAL TEAM IS TOP NOTCH SAY OUR CUSTOMERS. HERE ARE A FEW TESTIMONIALS</h2>
                    <div class="testimonialdiv">

                        <div >
                            <h6>"Migratioin to ZOHO "</h6>
                            <p >We are looking for
                                implementationof ZOHO and we approach Techno I Solutions for system migration
                                from open source CRM to ZOHO through the process we found Techno I Solutions
                                team veryproffessional and they made the ZOHO CRM implementation smoothly. WE
                                recommenend Techno I Solutions.</p>
                            <h2 >Sanjay</h2>
                            <h3>IT Manager, Confident Group</h3>
                        </div>
                        <div >
                            <h6 >"zoho crm"</h6>
                            <p >Technoisolutions
                                Support for ZOHO CRM is one of the best in the market, I used for a long time.
                                And the support is great.</p>
                            <h2 >Mr. Raman</h2>
                            <h3>IT Manager</h3>
                        </div>

                    </div>
                    <div className='testimonialdiv-mobile'>
                    <Slider {...testinomialSetting}> 
                    <div >
                            <h6 >"zoho crm"</h6>
                            <p >Technoisolutions
                                Support for ZOHO CRM is one of the best in the market, I used for a long time.
                                And the support is great.</p>
                            <h2 >Mr. Raman</h2>
                            <h3>IT Manager</h3>
                        </div>  <div >
                            <h6 >"zoho crm"</h6>
                            <p >Technoisolutions
                                Support for ZOHO CRM is one of the best in the market, I used for a long time.
                                And the support is great.</p>
                            <h2 >Mr. Raman</h2>
                            <h3>IT Manager</h3>
                        </div>

            </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;