import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCake } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div class="footerdiv">
            <div className='bottomtext'>© Techno I solutions PVT LTD. All rights Reserved</div>
             
                 
            <div className="bottomsocial">
                <a href='#'><i className="fa-3x fa-brands fa-linkedin"></i></a>
                <a href='#'><i className="fa-3x fa-brands fa-square-facebook"></i></a>
                <a href='#'><i className="fa-3x fa-brands fa-square-instagram"></i></a>
            </div>
             
            <div className='bottomlinks'>
                <h1 >Privacy Policy</h1>
                <h1 >Terms & Conditions</h1>
                <h1 >Staffing</h1>
            </div>
        </div>
    );
};

export default Footer;