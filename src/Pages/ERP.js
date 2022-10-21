import React from 'react'
import '../css/ERP.css'
import ERPbanner from '../assets/ERPbanner.jpg' 
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Offer from '../Component/Offer'
import PagesHeader from '../Component/PagesHeader'

function ERP() {
  return (<>
  <Navbar/>
  <PagesHeader dit={{url:{ERPbanner},top:"Services",title:"ERP Implementation" }}  />
  
 
    <div className='erpouter'>
    <div className='erpinner'>
        <div className="erpbody"> 
        <p>We offer our services from planning in plan creation, standard industry process for a successful implementation in consultation with your Company endusers.</p>

        </div>

    </div>
  </div>
  <Offer di={1} b="white" title="Get A Full Range Of Support For Your Enterprise Apps" para="Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
Our Application Management services offering include :"/>
  <Footer/>

  </>) 
}

export default ERP