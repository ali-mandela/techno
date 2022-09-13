import React from 'react'
import Header from './Header'
import './css/Networking.css'
import Nbanner from '../assets/networkingbanner.jpg'
import erp from '../assets/erp.png'
import zoho from '../assets/zohologo.png'
import app from '../assets/app-services.png'
import appdev from '../assets/app-dev.png'
import cyber from '../assets/cyber.png'
import data from '../assets/data.png'
import clud from '../assets/cloud.png' 
import './css/Offer.css'   
import Footer from './Footer'

function Networking() {
  return (<>
  <Header/>
  <section className='Networking'>
    <div className='NetworkingHeader'  style={{ backgroundImage: `url(${Nbanner})`}}>
                <h2>Services</h2>
                <h1>Networking & infra</h1>
    </div> 
    <div className='NetworkingTop'>
        <p>Our dedicated experts are certified in handling Network infrastructure remotely or at your premises.</p>
    </div>
    <div className='NetworkingBody'>
        <h1>Get A Full Range Of Support For Your Enterprise Apps</h1>
        <p>Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
            Our Application Management services offering include :
        </p>
    </div>
    <div>
    <div className='offermaindiv'>
            <h1 className='text-violet-700 font-bold text-6xl  my-8 text-center font-Poppins'>What we offer?</h1>
            <div class="offerdiv">
                <div class="bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={erp} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>ERP Implementation</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>We offer our services from planning in plan creation, standard industry process …</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>
                        <img className='' src={zoho} alt="" />

                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>ZOHO Products</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>Techno solutions is zoho partner in middle Est and Africa. Together with &hellip…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={app} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>
                            Application Management</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>Techno-I’s Application Management services provide systems and application…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={appdev} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>Application Development</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Techno-I’s Application Management services provide systems and application…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={cyber} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700 font-Poppins font-semibold text-2xl'>Cyber Security</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Our cybersecurity services help you reduce the risk of a cyber-attack &he…</h1>
                        <a className='text-orange-500 font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={data} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700 font-Poppins font-semibold text-2xl'>
                            Data Analytics</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Our dedicated experts are certified in handling Network infrastructure remotely …</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={clud} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700 font-Poppins font-semibold text-2xl'>
                            Cloud Integrations</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Digital transformation is a reality for every company. But transforming an exist…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  </section>
  <Footer/>

  </>)
}

export default Networking