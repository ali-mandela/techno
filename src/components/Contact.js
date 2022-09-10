import React from 'react';
import './css/Contact.css'

const Contact = () => {
    return (
        <div class="bg-gradient-to-r from-purple-600 to-blue-900   contactdiv">
            <div className='contactdivdiv' >
                <h1 className='text-white uppercase font-Poppins text-5xl font-semibold'>CONTACT US</h1>
                <h1 className='pt-4 text-white text-3xl mb-2 font-Poppins'>Get a quote for your project</h1>
                <h1 className=' text-white font-Poppins font-medium'>We want to help you succeed with technology</h1>
            </div>
            <div className='contactdivdiv'>
            <button
                class="  text-md rounded-md text-white bg-orange-400   font-Poppins ">
                Contact Us
            </button></div>
        </div>
    );
};

export default Contact;