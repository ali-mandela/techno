import React from 'react'; 
import leadership from '../assets/leadership.png';
import about2 from '../assets/about2.png';
import Offer from '../Component/Offer'; 
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar'
import '../css/About.css';
import banner from '../assets/aboutusbanner.jpg'
import PagesHeader from '../Component/PagesHeader'


const About = () => {
    return (<> 

<Navbar/>
<PagesHeader det={{url:banner,top:"",title:"About Techno I"}}/>

    <div className='aboutouter'>
        <div className='abourinner'> 
        <div className='aboutbody'>
        <h1>Who we are?</h1>
        <div className='abouttopdiv'>
            <div className='abouttopdivl'>
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
            <div className='abouttopdivr'>
            <img src={about2}
                alt="about  second"
            />
            </div>
        </div>

        <div className='aboutseconddiv'>
        <div className='aboutsecondbody'>
            <div className='aboutsecondbodyl'> <i class=" fa-9x fa-solid fa-lightbulb"></i>
            </div>
            <div className='aboutsecondbodyr'>
                <h1 style={{color:"white"}}>Vision</h1>
                <p>“We aim to become world's trusted authority in providing innovative IT solutions that helps enterprises reach their goals focusing on what matters.”</p>
            </div>
        </div>
        <div className='aboutsecondbody'>
        <div className='aboutsecondbodyl'>
            <i class=" fa-9x fa-solid fa-bullseye"></i> 
            </div>
            <div className='aboutsecondbodyr'>
                <h1 style={{color:"white"}}>Mission</h1>
                <p>“We want to empower organizations of all size to accomplish more with the insightful business solutions on their journey of digital transformation.”</p>
            </div>
        </div>

    </div>
        <div className='aboutthirddiv'>
            <h1>Our People and Culture</h1>
            <p style={{marginBottom:"20px"}}>Techno I is a place for highly committed people, our teamwork and resilience guided by integrity, compassion help us deliver world-class business solutions. We define our business strategy based on our corporate constitution, building on the pipeline of top talents. Our commitment is to create an inclusive work environment, free of fear or stigma.</p>
            <p>We celebrate our people and experiences, to foster a diverse environment, where everyone is valued and empowered to reach their full potential. Our teamwork helps us fulfill and achieve long-term business strategies with a diverse culture. Techno I’s workplace is uniquely characterized by openness, trust, and higher motivation. With dramatically changing time, we transform our business uniting to provide real value for people, giving back to the communities where we live and work.</p>
        </div>
        <div className='abouttopdiv'>
            <div className=''>
            <h1 style={{textAlign:"left"}}>Our Leadership</h1>
                <p>Techno I’s leadership team is responsible for defining values and developing a global workforce that’s capable of provide concise solutions to enterprises. The forward-looking senior team comprises of dedicated, focused, and experienced executives that drive our company, guide our strategy, leading our people.</p>
                <p>Together we’re work, ensuring continued growth and delivering outstanding value to our clients, people, and community worldwide.</p>
                <p>It’s a privilege to play our part.</p>
            </div>
            <div className=''>
            <img src={leadership}
                alt="about  second"
            />
            </div>
        </div>
        </div>
        </div>
    </div>
    <Offer di={0} b="white" title="What we Offer ?" para=""/>
    <Footer/>
 

     
      </>);
};

export default About;