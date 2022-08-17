import React from 'react';
import map from '../assets/map.png'
import pin from '../assets/pin.png'
import pin2 from '../assets/pin.png'
import pin3 from '../assets/pin.png'

const Map = () => {
    return (
        <div>
            <h1 className='text-violet-700 font-bold text-5xl  text-center font-Poppins uppercase my-10 pt-10'>OUR PRESENCE</h1>
            <div className='w-full  h-screen bg-cover rounded-bl-3xl rounded-br-3xl' style={{ backgroundImage: `url(${map})` }}>

                <div className='flex hero container max-w-screen-lg mx-auto text-end  justify-center ml-32 pt-52 pb-10'>
                    <img className='map ' src={pin} alt="" />
                    <img className='map mx-3 ' src={pin2} alt="" />
                    <img className='map ml-3' src={pin3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Map;