import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/Applicationmanagement.css'
import AMbanner from '../assets/AMbanner.jpg'
import AMimage from '../assets/AMinage.png'
import AMimagetwo from '../assets/AMinagetwo.png'
import AMimagethree from '../assets/AMimagethree.png'
import Clients from './Clients';
// 
import erp from '../assets/erp.png'
import zoho from '../assets/zohologo.png'
import app from '../assets/app-services.png'
import appdev from '../assets/app-dev.png'
import cyber from '../assets/cyber.png'
import data from '../assets/data.png'
import clud from '../assets/cloud.png'
import net from '../assets/network.png'
import './css/Offer.css'
function ApplicationManagement() {
  return (<>
  <Header/> 
  <section className='AMmain'>
  <div className='AMmainHeader'  style={{ backgroundImage: `url(${AMbanner})`}}>
                <h2>Services</h2>
                <h1>Application Management</h1>
    </div>
    <div className='AMbodyTop'>
    <div className='AMbody'> 
        <div>
            <p>Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.</p>
            <h1>Why Are Application Management Services Important?</h1>
            <p>Companies that combine custom in-house applications with enterprise software have a hard time managing the two in a seamless manner. From incident and change request management to releases and updates, Techno-I’s AMS covers the full range of IT needs that allows businesses to focus on their core operations and leave their IT needs in the capable hands of an experienced team.</p>
        </div>
        <img src={AMimage} alt="image of "/>
    </div>
    <div>
        <img src={AMimagetwo}/>
    </div>
    <div className='AMbodydes'>
        <h1>Phases to be followed in Application Management</h1>
        <p>With Application Management, you can get a full range of support for your enterprise apps. Our team understands what it takes to meet your business needs, covering everything from application design to deployment, maintenance, and enhancement.</p>
        <section className='AMbodydesmain'>
            <div className='AMbodydesbody'>
                <div> 
                    <h6>1</h6>
                </div>
                <div>
                    <h1>Situation Assessment</h1>
                    <p>We review the business requirement and draft a proposed plan with service level agreements ensures stakeholders understand service expectation. The plan includes our understanding of application profile, infrastructure, business continuity and operations.</p>
                    <p>Evaluating existing in scope systems, we prepare a list of applications and infrastructure platforms and determine the maturity level of systems to gain a clear understanding of the current state of processes and systems that effect application performance.</p>

                </div>
            </div>
            <div className='AMbodydesbody'>
                <div> 
                    <h6>2</h6>
                </div>
                <div>
                    <h1>Transition Process</h1>
                    <p>Post scope evaluation, we communicate the service expectations with stakeholders ensure smooth implementation of the processes. Along with the defined SLA, a Disaster Recovery Plan and Business Continuity plan are formulated along to minimize the downtime and any probable interruption if occurred during the implementation.</p>
                    <p>Prior implementation, a thorough security checks and backup verification are conducted to maintain the regulatory compliance and detect security holes.</p>

                </div>
            </div>
            <div className='AMbodydesbody'>
                <div> 
                    <h6>3</h6>
                </div>
                <div>
                    <h1>TImplementation</h1>
                    <p> As per the defined SLA, we carry out the implementation process focusing primarily on the application stability and managing any operational risks. We analyze and monitor predefined KPIs to ensure the integrity of the implementation process.</p>
                     
                </div>
            </div>
            <div className='AMbodydesbody eb'>
                <div> 
                    <h6>4</h6>
                </div>
                <div>
                    <h1>Optimization</h1>
                    <p>Post implementation, we identify system improvements and streamline business processes, the objective is to transform the business-critical application in line with the changing business needs. </p>
                    <p> Techno-I’s devops team can help you with action enhancements and innovative ways that will help you improve current IT services and increase usability across platforms.<br/>
We make it easy to manage your diverse software portfolio and devices with a single point of contact. All part of our commitment to security, user experience, and customer satisfaction.</p>
                    
                </div>
            </div>
        </section>
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
        <div className='AMbody'> 
        <div>
            <h1>How Techno I can help you achieve your goals</h1>
            <p>Don’t let your Applications go unmonitored  Our Application Management service provides affordable and scalable software application management services that deliver a unique blend of automation and innovation. We’re experts at monitoring, upgrading, and automating legacy applications so that you can focus on your own business’ needs.</p>
         </div>
        <img src={AMimage} alt="image of "/>
    </div>
        </section>
        <section className='AMsec5'>
            <h1>Techno-I’s Value Add Propositions</h1>
            <img src={AMimagethree} alt="imagr"/>
            <p></p>Techno-I’s application management services to help you optimize the performance of your infrastructure and gain back control of your business. Let our experienced team streamline your own processes to improve efficiency and effectiveness across your enterprise.
        </section>
        <section className='AMsec6'>
            <Clients name="APPLICATION MANAGEMENT CLIENTS"/>
        </section>
        <div className='NetworkingBody'>
        <h1>Get A Full Range Of Support For Your Enterprise Apps</h1>
        <p>Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
            Our Application Management services offering include :
        </p>
    </div>
    </div>
        
    </div>
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
                {/* <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={appdev} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>Application Development</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Techno-I’s Application Management services provide systems and application…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div> */}
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
                <div class=" bg-white rounded-lg offersubdiv">
                    <div className='offersundivone'>

                        <img src={net} alt="" />
                    </div>
                    <div className='offersubdivtwo'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>
                            Networking & infra</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>Our dedicated experts are certified in handling Network infrastructure remotely …</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
            </div>
    
  </section>
  <Footer/>

  </>)
}

export default ApplicationManagement