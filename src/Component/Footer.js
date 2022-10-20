import React from 'react';
import '../css/Footer.css'

const Footer = () => {
    return ( <> {/* <div class="footerdiv">
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
        </div> */
    } <div className = 'footerouter' > 
    <div className='footerinner'>
        <div className='footerbody'>
            <div >
                <h2>© Techno I solutions PVT LTD. All rights Reserved</h2>
            </div>
        
        <div className='social'>
            <a href='#'>
                <i className="fa-2x fa-brands fa-square-facebook"></i>
            </a>
            <a href='#'>
                <i className="fa-2x fa-brands fa-linkedin"></i>
            </a>
        </div>
        <div>
                <h3 >Privacy Policy</h3>
                <h3 >Terms & Conditions</h3>
                <h3 >Staffing</h3>
            </div>
</div>
    </div> </div>
        </>);
};

export default Footer;