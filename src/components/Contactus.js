import React from 'react'
import Header from './Header'
import './css/Contactus.css'
import banner from '../assets/contactusbanner.jpg'


function Contactus() {
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
  </>
  );
}

export default Contactus