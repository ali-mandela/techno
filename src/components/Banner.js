import React from 'react';
import './Banner.css'
import sap from '../assets/SAP-1-min.png'
import micro from '../assets/microsoft.png'
import sf from '../assets/salesforce.png'
import oracle from '../assets/oracle.png'
import homeBanner from "../assets/Hom-banner-Image-01-min-scaled.jpg"

const Banner = () => {
    return (
        <div className='w-full bg-cover roundedbanner' style={{ backgroundImage: `url(${homeBanner})` }}>
            <div class="bannermaindiv ">
                <div className='bannerdivleft'>
                    <h1 className='text-white title font-bold text-4xl font-Poppins'>Leader in enterprise IT solution</h1>

                    <h1 className='text-white  text-2xl py-10  font-Poppins'>Experts that enable customer success with the implementation of right set of ZOHO tools</h1>

                    <button
                        class="py-5 px-8 rounded-full text-2xl text-white bg-orange-500 uppercase  font-Poppins">
                        know more
                    </button>
                </div>
                <div className='bannerdivright'>

                    <div className='card'>
                        <div className='face front'>
                            <img className='img' src={sap} alt="" />
                        </div>
                        <div className='face back'>
                            <h1 className='font-semibold font-xl'>SAP</h1>
                            <p>SAP HANA | SAP FIORI | SAP ERP</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='face front'>
                            <img className='img' src={micro} alt="" />
                        </div>
                        <div className='face back'>
                            <h1 className='font-semibold font-xl'>MICROSOFT</h1>
                            <p>Manage your customer database, lead Management, customers engagement and resolve customer service issues.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='face front'>
                            <img className='img' src={sf} alt="" />
                        </div>
                        <div className='face back'>
                            <h1 className='font-semibold font-xl'>Salesforce</h1>
                            <p>Advance CRM to MAnage customer database, lead Management service issue. Sales Module, Marketing Modules.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='face front'>
                            <img className='img' src={oracle} alt="" />
                        </div>
                        <div className='face back'>
                            <h1 className='font-semibold font-xl'>ORACLE</h1>
                            <p>Manage databases, implement and customize Oracle ERP products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;