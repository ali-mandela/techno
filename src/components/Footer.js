import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCake } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div class="grid grid-cols-6 gap-4 bg-violet-900 px-20 pb-14">
            <div className='col-span-3 font-Poppins text-white  mt-12'>© Techno I solutions PVT LTD. All rights Reserved</div>
            <div className='col-span-2'>
                <a href="fb.com">
                    <FontAwesomeIcon color='white' icon={faCoffee}></FontAwesomeIcon>
                </a>
                <a href="" className='ml-4 w-10'>
                    <FontAwesomeIcon color='white' icon={faCake}></FontAwesomeIcon>
                </a>
            </div>
            <div className='col-span-1 mt-10'>
                <h1 className='text-end text-white font-Poppins'>Privacy Policy</h1>
                <h1 className='text-end text-white font-Poppins my-2'>Terms & Conditions</h1>
                <h1 className='text-end text-white font-Poppins'>Staffing</h1>
            </div>
        </div>
    );
};

export default Footer;