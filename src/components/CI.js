import React from 'react'
import './css/CI.css'
import Footer from './Footer'
import Header from './Header'
import Offer from './Offer'
import banner from '../assets/CIbanner.png'
import CI1 from '../assets/CIimage1.png'
import CI2 from '../assets/CIimage2.png'
import CI3 from '../assets/CIimage3.png'
import CI4 from '../assets/CIimage4.png'

function CI() {
  return (<>
    <Header/>
    <section className='CImain'>
        <div className='CItop' style={{
        backgroundImage: `url(${banner})`
    }}>
            <h2>Services</h2>
            <h1>Cloud Integrations</h1>
        </div>
        <div className='CIbody'>
            <img src={CI1} alt="img12" className='img1'/>
            <p>
                Digital transformation is a reality for every company. But transforming an existing IT infrastructure is no simple task. Enterprises are looking to bring real, lasting change to their businesses. Achieving digital transformation and creating an agile, scalable enterprise demands an innovative approach for managing the delivery and operation of applications across hybrid cloud environments.</p>
            <h5>Modernize your legacy apps with our cloud integration services. . .</h5>
            <p>We understand the evolving the landscape of technology and the need to integrate, support real time applications for businesses of all size. Our experts provide enterprise-wide data and services integration, helping them plan a sound cloud integration strategy and overcome their constraints.</p>
            <h5>Talk to us about your business requirement?(CTA)</h5>
            <p>Whether its re-engineering your legacy application or integrating your application back-end to cloud through integration platform, Techno-I’s certified team of cloud engineers will help you transform your IT infrastructure, providing an end-to-end, hybrid cloud integration platform that monitors, manages, and orchestrates cloud service and application connectivity for on-premises and off-premises resources.</p>
            <p>We help you migrate to a new platform or new approach quickly with minimal downtime. Our Cloud Integration services include, but not limited to:
Enable your business to go beyond with a one-stop cloud integration service.</p>
            <p>We plan out end-to-end integration for successful implementation, simplifying application integration process and ensure business continuity.</p>
            <h4>1. Integration Setup and implementation</h4>
            <p>Cloud services should be as easy as ABC. With our cloud integration service, you can simplify your cloud tech stack and deploy latest exponential technologies like AI for rapid growth of business. We help you modernize both on-premise/off-premise application with the capabilities you want today, driving cost efficiency, and following your business needs</p>
            <p>Our goal is to make the transition as smooth as possible with an emphasis on data security and integrity. Reduce complexity with a seamless, multi-tenant, pay-as-you-go model.</p>
            <h4>2. Hybrid Integration Services</h4>
            <p>Modernization of legacy apps is difficult and expensive. But we make it painless with a cloud integration service for hybrid SaaS & on-premises integration. With our cloud integration service, we’ll create a hybrid cloud strategy that works for you and your company’s needs.</p>
            <p>Our cross functional team will help you implement hybrid cloud strategy to integrate infrastructure with architectural flexibility, driving cost efficiency, increase productivity and create opportunities for innovation.</p>
            <h4>3. Architecture / Integration Consulting</h4>
            <p>We evaluate your business requirements with a thorough maturity assessment of current infrastructure, to identify the features, resources necessary for cloud services implementation best suited for your needs. Considering all the critical business requirements, we help you define the implementation plan for the integration services.</p>
            <h4>4. Maturity Assessment</h4>
            <p>Our solution architects will conduct a thorough assessment of your current architecture, technology stack, implementation strategy and budget to help you with a well-defined action plan. With our recommendations and cost-efficient solutions, you’ll be able to increase your team’s productivity and capitalize on opportunities.</p>
            <h4>5. Managed Services</h4>
            <p>We help you improve your cloud operations and provide strategic visibility into your cloud usage. Our team can make sure that your cloud integrations are on the forefront of innovation and provide real-time monitoring, alerting, reporting, and troubleshooting capabilities that span your entire application stack.</p>

        </div>
        <div className='CIfooter'>
        <img src={CI2} alt="image two"  />
        
        <p>	
We stay at the forefront of innovation, backed by the team of leading experts with integration experience in SAP, Sales Force, ZOHO etc. We understand your need for cloud integration of your back-end application and secure data management and our experts will help you integrate with the right solutions and tools for speedy implementation that fit your business needs.</p>
<img src={CI3} alt="image two"  />
       
        </div> 
        <div className='CIfooter2'>
        <img src={CI4} alt="image two" className="img4"/> 
        <p>	
Techno-I will help you reduce costs, improve business agility, accelerate time-to-value, and fast pace the integration of your existing systems into the public/on-premise cloud environment. Our goal is to help our clients increase their operation efficiency and improve productivity without the need to worry about implementation issues, security breach or any other technical problems.</p>
       
        </div>
    </section>
    <div className='CICI'>
      <div className='CImainfooter'>
        <h1>Get A Full Range Of Support For Your Enterprise Apps</h1>
        <p>Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
            Our Application Management services offering include :
        </p>
    </div>
    <Offer cn="deleteCI"/>
      </div>
      
    <Footer/>
  </>)
}

export default CI