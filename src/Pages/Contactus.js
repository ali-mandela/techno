import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar'
import '../css/Contactus.css'
import PagesHeader from '../Component/PagesHeader';
import banner from '../assets/contactusbanner.jpg'
import Contactmenu from '../Component/Contactmenu';

function Contactus() {


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
  <Contactmenu/>
  

    <Footer/>
</>)
}

export default Contactus


