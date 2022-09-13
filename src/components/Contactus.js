import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/Contactus.css'
import banner from '../assets/contactusbanner.jpg'
import ser1 from '../assets/ser1.png';
import ser2 from '../assets/ser2.png';
import ser3 from '../assets/ser3.png';
import { faL, faSlash } from '@fortawesome/free-solid-svg-icons'


function Contactus() {

    const [open , setOpen] = useState(false)
    const [open1 , setOpen1] = useState(false)
    const [open2 , setOpen2] = useState(false) 

    function handelchange(){
        setOpen(!open);
        setOpen2(false);
        setOpen1(false);
    }
    function handelchange1(){
        setOpen( false);
        setOpen2(false);
        setOpen1(!open1);
    }
    function handelchange2(){
        setOpen(false);
        setOpen2(!open2);
        setOpen1(false);
    }
//    { if(open===true)
//     {
//         open1 = !open;
//         open2 = !open;
//     }else if(open1===true){
//         open = !open1;
//         open2 = !open1;
//     }
//     else if(open2===true){
//         open = !open2;
//         open1 = !open2;
//     }
// }
  return (<>
    <Header/>
    <section className='contactussection'>
        <div className='contactHeader'  style={{ backgroundImage: `url(${banner})`}}>
            <h1>Contact Us</h1>
         </div>
         <div className='contactheaderbody'>
            <h1>Have a question about your requirement or need a demo of our offerings?</h1>
            <p>Techno I representatives are available to answer your questions and help you find what you need. With our SMEs spread across the globe, your next world-class solution is never far away.</p>
            <p>Get in touch with the right people, reach out to us or any of our customer care team, marketing team, technical team or HR team spread globally.</p>

         </div>
    </section>

    <section className='cssection2'>
        <div>
            <h1>GET IN TOUCH</h1>
        </div>
        <div>
            <h1>Call Us</h1>
            <p>+971-508 549 727</p>
        </div>
        <div>
            <h1>Email us</h1>
            <p>info@technoisolutions.com</p>
        </div>
        <div>
            <h1>Visit us</h1>
            <p>Business Center - RAKEZ, UAE</p>
        </div>
    </section>

    <section className='cssection3'>
        <h1 className='cs3h1'>Our Business Presence</h1>
        <div className='cs3Topdiv'>
            <div className={open===true ? "aa" :"cc"}>
                <h1 onClick={handelchange}>INDIA </h1>
                <i className={open===true ? " fa-1.5x fa-solid fa-circle-plus" :  "fa-1.5x fa-solid fa-circle-minus" }   ></i>
                <div className='cs3Topdivmain' >
                    <p>ADDRESS</p>
                    <p>2-62/2/A, Megha Hills,</p>
                    <p>Canara Bank Building, Madhapur,</p>
                    <p>Hyderabad -81, Telangana</p><br/>
                    <p>Tel. +91-40 48531954</p>
                    <p>Mob +91 75690 39539</p><br/>
                    <p>Email: info@technoisolutions.com</p>
                </div>
                
            </div>
            <div className={open1===true ? "bb" :"cc"}>
                <h1 onClick={handelchange1}>UAE </h1>
                <i className={open1===true ? " fa-1.5x fa-solid fa-circle-plus" :  "fa-1.5x fa-solid fa-circle-minus" }   ></i>
                <div className='cs3Topdivmain'>
                    <p>ADDRESS</p>
                    <p>Business Center – RAKEZ,</p>
                    <p>RAS AI Khaimah</p>
                    <p>United Arab Emirates</p><br/>
                    <p>Tel. +971562313879</p> <br/>
                    <p>Email: info@technoisolutions.com</p>
                </div>
            </div>
            <div className={open2===true ? "dd" :"cc"}>
                <h1 onClick={handelchange2}>OMAN </h1>
                <i className={open2===true ? " fa-1.5x fa-solid fa-circle-plus" :  "fa-1.5x fa-solid fa-circle-minus" }   ></i>
                <div className='cs3Topdivmain'>
                    <p>ADDRESS</p>
                    <p> Office No. 803, Ghala</p>
                    <p>RAS AI Khaimah</p>
                    <p> Sultanate of Oman,</p>
                    <p> P.O. Box 1724, P.C. 133</p><br/>
                    <p>Tel. +971562313879</p> <br/>
                    <p>Email: info@technoisolutions.com</p>
                </div>
                
            </div>
            
        </div>

        <div className='cs3div'>
            <div className='cs3left'>
                <h1>Write to us</h1>
                <form>
                    <input type={"text"} placeholder="Full Name *"/>
                    <input type={"text"} placeholder="Email*"/>
                    <input type={"tel"} placeholder="Phone Number"/><br/>
                    <textarea placeholder="Message" rows={4}
          cols={30} />
                    <button type={"submit"}> SEND </button>
                </form>
            </div>
            <div className='cs3right'>
                <h1>Stay up to date with the latest</h1>
                <div>
                <h2>Follow US</h2>
                <i class=" fa-4x fa-brands fa-facebook"></i>
                <i class=" fa-4x fa-brands fa-linkedin"></i>
                </div>
                
                <div>
                    <img src={ser1} alt="service 1"/>
                    <img src={ser2} alt="service 1"/>
                    <img src={ser3} alt="service 1"/>
                </div>
                
            </div>
        </div>
    </section>
    <Footer/>
  </>
  );
}

export default Contactus