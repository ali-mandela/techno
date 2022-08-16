import React from 'react';
import homeBanner from "../assets/Hom-banner-Image-01-min-scaled.jpg"

const Banner = () => {
    return (
        <div className='w-full h-screen bg-cover rounded-bl-3xl rounded-br-3xl' style={{ backgroundImage: `url(${homeBanner})` }}>
            <div class="grid grid-cols-2 gap-4 ">
                <div className='pl-24 py-52'>
                    <h1 className='text-white font-bold text-4xl font-Poppins'>Leader in enterprise IT solution</h1>

                    <h1 className='text-white  text-2xl py-10  font-Poppins'>Experts that enable customer success with the implementation of right set of ZOHO tools</h1>

                    <button
                        class="py-5 px-8 rounded-full text-2xl text-white bg-orange-500 uppercase  font-Poppins">
                        know more
                    </button>
                </div>

                <div>9</div>
            </div>
        </div>
    );
};

export default Banner;