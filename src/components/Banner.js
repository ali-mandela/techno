import React from 'react';
import homeBanner from "../assets/Hom-banner-Image-01-min-scaled.jpg"

const Banner = () => {
    return (
        <div className='w-full h-full bg-cover' style={{ backgroundImage: `url(${homeBanner})` }}>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h1 className='text-white font-bold text-4xl'>Leader in enterprise IT solution</h1>

                    <h1 className='text-white font-semibold text-xl'>Experts that enable customer success with the implementation of right set of ZOHO tools</h1>

                    <button
                        class="py-4 px-8 rounded-full text-2xl text-white bg-yellow-600 uppercase">
                        know more
                    </button>
                </div>

                <div>9</div>
            </div>
        </div>
    );
};

export default Banner;