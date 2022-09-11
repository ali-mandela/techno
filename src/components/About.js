import React from 'react';
import Header from './Header';
import AboutBanner from '../assets/aboutusbanner.jpg';
import '../components/css/About.css';
import Offer from './Offer';
import about2 from '../assets/about2.png';
import Footer from './Footer';
import leadership from '../assets/leadership.png';

const About = () => {
    return (<> <Header/> 
    <div className = 'aboutmaindiv' > 
    <div className='aboutHeader'
        style={{
        backgroundImage: `url(${AboutBanner})`
    }}>
        <h1>About Techno I</h1>

    </div> 
    <div className = 'about2maindiv' >
        <div className='about1div'>
            <h1>Who we are?</h1>
        </div>
        <div className='about2div'>
            <div className='about2divleft'>
                <h2>Premier Enterprise IT solution provider</h2>
                <p>At Techno-I, we aim to be the single window for your enterprise application
                        development and consulting firm. Our focus is to incorporate the best resources
                    and infrastructure aligning with our client’s vision for technology
                    implementation. We provide smart advice to help people grow and their businesses
                    thrive, delivering a scalable innovative solution as per their business needs.
                    Our offerings range from integrating and implementing custom products to build
                    your IT infrastructure to developing and managing end-to-end enterprise
                    applications.</p>
                    <p>With our global network of technology specialists, we use our skilled team to deliver solutions, leveraging technology to your benefit.</p>
                    <p>As a market leader with technology partners like ZOHO, SAP, etc we take a holistic approach in implementing and deploying technology ensuring that you get the most from your investment in information technology.</p>
                    <p>Let’s overcome your IT challenges, together</p>
         </div>
         <div className='about2divright'>
            <img src={about2}
                alt="about image second"
            />

         </div>
    </div> 
    </div>
    <div className='about3div'>
        <div className='about3left'>
            <div> <i class=" fa-9x fa-solid fa-lightbulb"></i>
            </div>
            <div>
                <h1>Vision</h1>
                <p>“We aim to become world's trusted authority in providing innovative IT solutions that helps enterprises reach their goals focusing on what matters.”</p>
            </div>
        </div>
        <div className='about3right'>
        <div>
            <i class=" fa-9x fa-solid fa-bullseye"></i> 
            </div>
            <div>
                <h1>Mission</h1>
                <p>“We want to empower organizations of all size to accomplish more with the insightful business solutions on their journey of digital transformation.”</p>
            </div>
        </div>

    </div>

    <section className='about4div'>
            <div className='about4one'>
                <h1>Our People and Culture</h1>
                <p>Techno I is a place for highly committed people, our teamwork and resilience guided by integrity, compassion help us deliver world-class business solutions. We define our business strategy based on our corporate constitution, building on the pipeline of top talents. Our commitment is to create an inclusive work environment, free of fear or stigma.</p>
                <p>We celebrate our people and experiences, to foster a diverse environment, where everyone is valued and empowered to reach their full potential. Our teamwork helps us fulfill and achieve long-term business strategies with a diverse culture. Techno I’s workplace is uniquely characterized by openness, trust, and higher motivation. With dramatically changing time, we transform our business uniting to provide real value for people, giving back to the communities where we live and work.</p>
            </div>
            <div className='about4two'>
                
                {/* <div> */}
                  {/* <div> */}
                <img src={leadership}
                        alt="leadership "
                />
                {/* </div> */}
                <h1>Our Leadership</h1>
                <p>Techno I’s leadership team is responsible for defining values and developing a global workforce that’s capable of provide concise solutions to enterprises. The forward-looking senior team comprises of dedicated, focused, and experienced executives that drive our company, guide our strategy, leading our people.</p>

<p>Together we’re work, ensuring continued growth and delivering outstanding value to our clients, people, and community worldwide.</p>

<p>It’s a privilege to play our part.</p>
                            
                {/* </div> */}
              
                
            </div>
    </section>
     </div>
     <Offer/>
     <Footer/>
      </>);
};

export default About;