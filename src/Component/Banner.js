import React from 'react';
import './Banner.css'
import sap from '../assets/SAP-1-min.png'
import micro from '../assets/microsoft.png'
import sf from '../assets/salesforce.png'
import oracle from '../assets/oracle.png'
import zoho from '../assets/zoho.png'
import homeBanner from "../assets/Hom-banner-Image-01-min-scaled.jpg"

const Banner = () => {
    return (
        <div className=' outerBanner' >
        <div className='innerBanner' style={{ backgroundImage: `url(${homeBanner})` }}>
            <div class="  mainBannerDiv">
                <div className=' mainBannerDivLeft'>
                    <h1 className=' '>Leader in enterprise IT solution</h1>

                    <h2 className=' '>Experts that enable customer success with the implementation of right set of ZOHO tools</h2>

                    <a
                        class=" ">
                        know more
                    </a>
                </div>
                <div className=' mainBannerDivRigth'>

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
                    <div className='card'>
                        <div className='face front'>
                            <img className='img' src={zoho} alt="" />
                        </div>
                        <div className='face back'>
                            <h1 className='font-semibold font-xl'>ORACLE</h1>
                            <p>We provide complete end-to end solutions to streamline your ZOHO biz applications .</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;