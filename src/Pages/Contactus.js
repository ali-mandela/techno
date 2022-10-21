import React, {useState} from 'react'
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar'
import '../css/Contactus.css'
import PagesHeader from '../Component/PagesHeader';
import banner from '../assets/contactusbanner.jpg'
import ser1 from '../assets/ser1.png';
import ser2 from '../assets/ser2.png';
import ser3 from '../assets/ser3.png';

function Contactus() {

    const [open,
        setOpen] = useState(false)
    const [open1,
        setOpen1] = useState(false)
    const [open2,
        setOpen2] = useState(false)

    function handelchange() {
        setOpen(!open);
        setOpen2(false);
        setOpen1(false);
    }
    function handelchange1() {
        setOpen(false);
        setOpen2(false);
        setOpen1(!open1);
    }
    function handelchange2() {
        setOpen(false);
        setOpen2(!open2);
        setOpen1(false);
    }
    return ( <> <Navbar/>
       <PagesHeader det={{url:banner,top:"",title:"Contact Us"}}/>

 <div className='contactusouter'>
    <div className='contactusinner'>
    <section className='contactussection'>
            <h1>Have a question about your requirement or need a demo of our offerings?</h1>
            <p>Techno I representatives are available to answer your questions and help you find what you need. With our SMEs spread across the globe, your next world-class solution is never far away.</p>
            <p>Get in touch with the right people, reach out to us or any of our customer care team, marketing team, technical team or HR team spread globally.</p>

    </section>
    </div>
  </div>
  <div className='cssection2 contactusouter'>
    <div className='contactusinner'>
    <section>
        <div>
            <h1>GET IN TOUCH</h1>
        </div>
        <div>
            <h2>Call Us</h2>
            <p>+972-508 549 727</p>
        </div>
        <div>
            <h2>Email us</h2>
            <p>info@technoisolutions.com</p>
        </div>
        <div>
            <h2>Visit us</h2>
            <p>Business Center - RAKEZ, UAE</p>
        </div>
    </section>
    </div>
  </div>  
  
    <div className = 'contactusouter' > 
    <div className='contactusinner'>
                <section className='contactusmenu'>
                <h6 style={{textAlign:"center"}}>Our Business Presence</h6>
                <div className='cs3Topdiv'>
                    <div 
                        className={open === true
                        ? "aa cs3Topdivouter"
                        : "cc cs3Topdivouter"}>

                        <div className='cs3TopdivmainTop' onClick={handelchange}>
                            <h6 >INDIA
                            </h6>
                            <i style={{color:"orange"}}
                                className={open === true
                                ? " fa-1.5x fa-solid fa-circle-plus"
                                : "fa-1.5x fa-solid fa-circle-minus"}></i>
                        </div>
                        <div className='cs3Topdivmain'>
                            <span>ADDRESS <br/>2-62/2/A, Megha Hills, Canara Bank Building,<br/> Madhapur, Hyderabad -81, Telangana</span><br/>
                            <span>Tel. +91-40 48531954</span>
                            <span>Mob +91 75690 39539</span><br/>
                            <span>Email: info@technoisolutions.com</span>
                        </div>

                    </div>
                    <div 
                        className={open1 === true
                        ? "bb cs3Topdivouter"
                        : "cc cs3Topdivouter"}>

                        <div className='cs3TopdivmainTop' onClick={handelchange1}>
                            <h6  >INDIA
                            </h6>
                            <i style={{color:"orange"}}
                                className={open1 === true
                                ? " fa-1.5x fa-solid fa-circle-plus"
                                : "fa-1.5x fa-solid fa-circle-minus"}></i>
                        </div>
                        <div className='cs3Topdivmain'>
                            <span>ADDRESS <br/>2-62/2/A, Megha Hills, Canara Bank Building,<br/> Madhapur, Hyderabad -81, Telangana</span><br/>
                            <span>Tel. +91-40 48531954</span>
                            <span>Mob +91 75690 39539</span><br/>
                            <span>Email: info@technoisolutions.com</span>
                        </div>

                    </div>
                    <div 
                        className={open2 === true
                        ? "dd cs3Topdivouter"
                        : "cc cs3Topdivouter"}>

                        <div className='cs3TopdivmainTop'  onClick={handelchange2}>
                            <h6 >INDIA
                            </h6>
                            <i style={{color:"orange"}}
                                className={open2 === true
                                ? " fa-1.5x fa-solid fa-circle-plus"
                                : "fa-1.5x fa-solid fa-circle-minus"}></i>
                        </div>
                        <div className='cs3Topdivmain'>
                            <span>ADDRESS</span>
                            <span>2-62/2/A, Megha Hills,</span>
                            <span>Canara Bank Building, Madhaspanur,</span>
                            <span>Hyderabad -81, Telangana</span><br/>
                            <span>Tel. +91-40 48531954</span>
                            <span>Mob +91 75690 39539</span><br/>
                            <span>Email: info@technoisolutions.com</span>
                        </div>

                    </div>
                    {/* <div
                        className={open1 === true
                        ? "bb"
                        : "cc"}>
                        <h1 onClick={handelchange1}>UAE
                           
                        </h1> <i
                                className={open1 === true
                                ? " fa-1.5x fa-solid fa-circle-plus"
                                : "fa-1.5x fa-solid fa-circle-minus"}></i>

                        <div className='cs3Topdivmain'>
                            <p>ADDRESS</p>
                            <p>Business Center – RAKEZ,</p>
                            <p>RAS AI Khaimah</p>
                            <p>United Arab Emirates</p><br/>
                            <p>Tel. +971562313879</p>
                            <br/>
                            <p>Email: info@technoisolutions.com</p>
                        </div>
                    </div>
                    <div
                        className={open2 === true
                        ? "dd"
                        : "cc"}>
                        <h1 onClick={handelchange2}>OMAN
                           
                        </h1>
                        <i
                                className={open2 === true
                                ? " fa-1.5x fa-solid fa-circle-plus"
                                : "fa-1.5x fa-solid fa-circle-minus"}></i>
                        <div className='cs3Topdivmain'>
                            <p>ADDRESS</p>
                            <p>
                                Office No. 803, Ghala</p>
                            <p>RAS AI Khaimah</p>
                            <p>
                                Sultanate of Oman,</p>
                            <p>
                                P.O. Box 1724, P.C. 133</p><br/>
                            <p>Tel. +971562313879</p>
                            <br/>
                            <p>Email: info@technoisolutions.com</p>
                        </div>

                    </div> */}

                </div>
                 </section>
                  <div className='contactusform'>
                <div className='cs3left'>
                    <h1>Write to us</h1>
                    <form>
                        <input type={"text"} placeholder="Full Name *"/>
                        <input type={"text"} placeholder="Email*"/>
                        <input type={"tel"} placeholder="Phone Number"/><br/>
                        <textarea placeholder="Message" rows={4} cols={25}/>
                        <button type={"submit"}>
                            SEND
                        </button>
                    </form>
                </div>
                <div className='cs3right'>
                    <h1>Stay up to date with the latest</h1>
                    <div>
                        <h2>Follow US</h2>
                        <i class=" fa-4x fa-brands fa-facebook"></i>
                        <i class=" fa-4x fa-brands fa-linkedin"></i>
                    </div>
                    <div className='cs3rightimg'>
                        <img src={ser1} alt="service 1"/>
                        <img src={ser2} alt="service 1"/>
                        <img src={ser3} alt="service 1"/>
                    </div>

                </div>
                 </div>
    </div> 
    </div>  
</>)
}

export default Contactus


