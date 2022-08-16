import React from 'react';

const Contact = () => {
    return (
        <div class="bg-gradient-to-r from-purple-600 to-blue-900 grid grid-cols-2 gap-4">
            <div className='ml-52 py-16'>
                <h1 className='text-white uppercase font-Poppins text-5xl font-semibold'>CONTACT US</h1>
                <h1 className='pt-4 text-white text-3xl mb-2 font-Poppins'>Get a quote for your project</h1>
                <h1 className=' text-white font-Poppins font-medium'>We want to help you succeed with technology</h1>
            </div>
            <div><button
                class="py-4 px-14 text-md rounded-md text-white bg-orange-400   font-Poppins ml-52 mt-24">
                Contact Us
            </button></div>
        </div>
    );
};

export default Contact;