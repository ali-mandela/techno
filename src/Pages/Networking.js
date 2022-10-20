import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Offer from '../Component/Offer'
import '../css/Networking.css'
import Networkbanner from '../assets/networkingbanner.jpg'
import PagesHeader from '../Component/PagesHeader'

function Networking() {
  return (<>
  <Navbar/>
  <PagesHeader det={{url:Networkbanner,top:"Services",title:"Networking & infra"}}/>
  <div className='Networkingouter'>
    <div className='Networkinginner'>
        <div className="Networkingbody"> 
        <p>Our dedicated experts are certified in handling Network infrastructure remotely or at your premises.</p>
        </div>

    </div>
  </div>
 <Offer di={8} b="white" title="Get A Full Range Of Support For Your Enterprise Apps" para="Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
Our Application Management services offering include :"/>
<Footer/>
  </>)
}

export default Networking