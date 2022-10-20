import React from 'react'
import banner from '../assets/cyberbanner.jpg' 
import '../css/Cyber.css' 
import img2 from '../assets/cyberimg2.png'
import img3 from '../assets/cyberimg3.png'
import img4 from '../assets/cyberimg4.png'  
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Offer from '../Component/Offer'
import PagesHeader from '../Component/PagesHeader'

function Cybersecurity() {
  return (<>
  <Navbar/>
  <PagesHeader det={{url:banner,top:"Services",title:"Cyber Security"}} />

  <div className='cyberouter'>
    <div className='cyberinner'>
        <div className='cyberbody'>
            <h5>Our cybersecurity services help you reduce the risk of a cyber-attack by providing expert advice and tailored solutions.</h5>
            <img src={img2} alt="secong picture of cyber"/>
            <p>Modern cyber criminals are becoming more sophisticated, targeting corporates, looking for vulnerabilities and ready to strike. Hackers are constantly looking for new and creative ways to attack your business. Our cybersecurity services help you reduce the risk of a cyber-attack by providing expert advice and tailored solutions that add an extra layer of protection to your company’s IT systems, giving you peace of mind.</p>
        <h6>Protect your business from cyber criminals with our cybersecurity services.</h6>
        <p>We provide a complete range of cybersecurity services, strengthening your cyber defense by addressing every stage of a cyber-attack surface, from firewalls to software applications. Our experienced security specialists have up-to-date certifications and an unmatched level of expertise to identify and prevent cyber attacks.</p>
        <h6 style={{textAlign:"center"}}>Assessing your security posture today, connect with us (CTA)</h6>
        <p>Techno-I’s cybersecurity experts will be your trusted go-to partner for advanced expertise and state-of-the-art technology. We offer 24×7 network security monitoring, and security assessment service for your IT infrastructure, working as an extension of your team, handling the things you can’t or won’t do.</p>
        <h6>Secure your business against potential cyber attacks.</h6>
            <p>We help our customers with their cybersecurity needs, from assessment to engineering.</p>
            <h6>Our Cybersecurity services include, but not limited to:</h6>
            <div className=''>
            <img src={img3} style={{float:"left",height:"338px",width:"600px",marginRight:"15px"}} className='img3'/>
            <h5>1. Security Operations Center</h5>
            <p>Our specialized team monitors the security of your organization’s infrastructure and data for on-premise/ hybrid cloud environment. Identify, investigate, and resolve issues, as well as prioritize and respond to incidents, our certified security analyst will provide real-time threat detection and incident response. Their only goal is to help you with an operationally secure environment while supporting the organization’s business goals.</p>
            <h5>2. SIEM</h5>
            <p>We provide the complete “big picture” of all information security threats to your organisation. From initial detection to remediation, our SIEM aggregates and monitors data from all your security tools and provides a comprehensive, single-pane-of-glass view of all activity. Working in hand with your in-house team, we help you investigate security alerts 24/7 with improved threat trends and a real-time view of security landscape.</p>
            <h5>3. Penetration Testing Services</h5>
            <p>We help you discover vulnerabilities before your competition does and assess the severity. Our wide range of penetration testing services covers network, application (Web/Mobile/API), Wireless testing etc. for every size and type of company. Our certified professional and concise methodology help you measure the effectiveness of your security posture against inherent security vulnerabilities in your infrastructure.</p>
            <h5>4. Application Security Testing</h5>
            <p>Our experts will help you identify areas of risk, prioritize them, and fix them before they can cause any damage. With increasing cyber threats, security breaches and compliance requirements, it has never been this important to ensure your software is secure. We weed out risks from your application also ensures your applications meet regulatory and compliance requirements.</p>
            <img className='img4' src={img4} alt="image two"/>
            <h5>How Techno-I can help you achieve your goals</h5>
            <p>Your cybersecurity is our priority. Partner with us to stay protected.
Only way to stay ahead of cyber criminals is through the latest cybersecurity services. We help you safeguard your business assets, by bringing the best security experts and technology providers to protect your business from cyber criminals, hackers, and other online attackers.</p>
            <h5>Techno-I’s Value Add Propositions</h5>
            <p>Your data is your business’s most valuable asset. We help you craft a custom security program that helps to address the people, process, and technology elements of your entire business. Our layered approach will ensure a comprehensive safeguard for your business.</p>

            </div>
        </div>
    </div>
  </div> 
  <Offer di={5} b="white" title="Get A Full Range Of Support For Your Enterprise Apps" para="Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
Our Application Management services offering include :"/>
<Footer/>
   
  </>)
}

export default Cybersecurity