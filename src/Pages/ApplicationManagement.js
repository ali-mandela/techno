import React from 'react'
import Footer from '../Component/Footer' 
import '../css/Applicationmanagement.css' 
import AMimage from '../assets/AMinage.png'
import AMimagetwo from '../assets/AMinagetwo.png'
import AMimagethree from '../assets/AMimagethree.png' 
import Clients from '../Component/Clients' 
import Offer from '../Component/Offer'
import PagesHeader from '../Component/PagesHeader' 
import Navbar from '../Component/Navbar'
import Amparagraph from '../Component/amParagraph'
import banner from '../assets/AMbanner.jpg'

function ApplicationManagement() {
  return (<>
  <Navbar/> 
  <PagesHeader det={{url:banner,top:"Services",title:"Application Management"}}/>

  <div className='AMouter'>
    <div className='AMinner'>
        <div className="AMbody"> 
            <div className='AMbodytopdiv'>
            <div>
            <p>Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.</p>
            <h2>Why Are Application Management Services Important?</h2>
            <p>Companies that combine custom in-house applications with enterprise software have a hard time managing the two in a seamless manner. From incident and change request management to releases and updates, Techno-I’s AMS covers the full range of IT needs that allows businesses to focus on their core operations and leave their IT needs in the capable hands of an experienced team.</p>
        </div>
        <div>
        <img className='AMbodyimg' src={AMimage} alt="image of "/>
        </div>
            </div>
            <img src={AMimagetwo}/>
            <h1>Phases to be followed in Application Management</h1>
        <p>With Application Management, you can get a full range of support for your enterprise apps. Our team understands what it takes to meet your business needs, covering everything from application design to deployment, maintenance, and enhancement.</p> 
       <div className='border'>
       <span className='border-span'/>
       <Amparagraph/>

       </div>
        <section className='AMsec3'>
            <h1>Benefits of Application Management Services</h1>
            <div className='AMsec3body'>
                <div>
                <i class="fa-solid fa-7x fa-user-doctor"></i>
                <h2>Direct access to expert engineers</h2>
                </div>
                <div>
                <i class="fa-solid fa-7x fa-walkie-talkie"> </i>
                <h2>Operational Governance</h2>
                </div>
                <div>
                <i class="fa-brands fa-7x fa-cloudscale"></i>
                <h2>Easily Scalable Maturity  </h2>
                </div>
                <div>
                <i class="fa-solid fa-7x fa-headset"></i>
                <h2> 24x7 Support for Business Applications </h2>
                </div>
                <div>
                <i class="fa-solid fa-7x fa-puzzle-piece"></i>
                <h2>Improve Operational Productivity  </h2>
                </div>
                <div>
                <i class="fa-solid fa-7x fa-filter-circle-dollar"></i>
                <h2> Reduced Operational Cost </h2>
                </div>
                <div>
                <i class="fa-solid fa-7x fa-shield-halved"></i>
                <h2>High Security and Reliability  </h2>
                </div>
                <div>
                <i class="fa-solid fa-7x fa-globe"></i>
                <h2>Transparent, and quick issue resolution  </h2>
                </div>
                 

            </div>
        </section>

        <section className='AMsec4'> 
        <div>
            <h1>How Techno I can help you achieve your goals</h1>
            <p>Don’t let your Applications go unmonitored  Our Application Management service provides affordable and scalable software application management services that deliver a unique blend of automation and innovation. We’re experts at monitoring, upgrading, and automating legacy applications so that you can focus on your own business’ needs.</p>
         </div>
         <div>
         <img src={AMimage} alt=" of "/>
 
    </div>
        </section>

        <h1 style={{textAlign:"center"}}>Techno-I’s Value Add Propositions</h1>
            <img src={AMimagethree} alt="imagr" className='limg'/>
            <p style={{textAlign:"center"}}>Techno-I’s application management services to help you optimize the performance of your infrastructure and gain back control of your business. Let our experienced team streamline your own processes to improve efficiency and effectiveness across your enterprise.</p>

        </div>

    </div>
  </div> 
 
   

         
            <Clients name="APPLICATION MANAGEMENT CLIENTS"/>
  <Offer di={3} b="white" title="Get A Full Range Of Support For Your Enterprise Apps" para="Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
Our Application Management services offering include :"/>
  <Footer/>

  </>)
}

export default ApplicationManagement