import React from 'react' 
import Zohobanner from '../assets/zohobanner.jpg'
import Footer from '../Component/Footer'
import '../css/zoho.css'
import zohoimgone from '../assets/zohoimgone.png'
import Navbar from '../Component/Navbar' 
import PagesHeader from '../Component/PagesHeader'
import Offer from '../Component/Offer'

function Zoho() {
  return (<>
  <Navbar/>
  <PagesHeader det={{url:Zohobanner,top:"Services",title:"Cyber Security"}}/>
  <div className='zohoouter'>
    <div className='zohoinner'>
        <div className="zohobody">
        <p>Techno solutions is zoho partner in middle Est and Africa. Together with our partners we deliver implementation, customization, migration services. We are located in Dubai, Oman, Ghana to serve the customers Globally.</p>
        <img src={zohoimgone} alt="zoho image one"/>
        </div>

    </div>
  </div>
  <Offer di={2} b="white" title="Get A Full Range Of Support For Your Enterprise Apps" para="Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
Our Application Management services offering include :"/> 
  <Footer/>

  </>)
}

export default Zoho