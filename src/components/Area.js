import React from 'react';
import homeBanner from '../assets/Hom-banner-Image-01-min-scaled.jpg'
import user from '../assets/clients.png'
import globe from '../assets/globe.png'
import like from '../assets/like.png'
import ind from '../assets/industry.png'

const Area = () => {
    return (
        <div className=' bg-cover rounded-bl-3xl rounded-br-3xl bg-violet-900' >
            <div className=''>
                <h1 className='text-center font-Poppins font-semibold text-5xl text-sky-400 pt-36'>Our Focus Areas</h1>
                <h1 className='text-white font-Poppins text-2xl text-center px-24 py-6 mb-10'>Our experts in technical architecture will provide you solutions to streamline your business. Reach us for our vast resource of programmers, analysts, QA, Marketing.</h1>
            </div>
            <div class="grid grid-cols-4 gap-4 mx-24">
                <div className='bg-purple-400 rounded-lg p-6'>
                    <img className='ml-16' src={user} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>500+</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Clients</h1>
                </div>
                <div className='bg-gray-600 rounded-lg p-6 mt-12'>
                    <img className='ml-16' src={globe} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>20+</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Global Presence</h1>
                </div>
                <div className='bg-violet-500 rounded-lg p-6'>
                    <img className='ml-16' src={like} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>100%</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Customer Satisfaction</h1>
                </div>
                <div className='bg-indigo-500 rounded-lg p-6 mt-12'>
                    <img className='ml-16' src={ind} alt="" />
                    <h1 className='text-sky-500 font-Poppins font-bold text-center text-5xl my-8'>3000+</h1>
                    <h1 className='font-Poppins font-semibold text-white text-center text-2xl mb-8'>Industry Spefic Solutions</h1>
                </div>
            </div>
            <div className=''>
                <h1 className='text-center font-Poppins font-semibold text-5xl text-sky-400 pt-36'>Industries we Service</h1>
                <h1 className='text-white font-Poppins text-2xl text-center px-24 py-6 mb-10'>Our experts have industry experience and domain expertise in planning, Implementation, Customization, product training, and customer support. Talk to us now to know more or tell us about your requirements and we will be glad to pitch-in.</h1>
            </div>
        </div>
    );
};

export default Area;