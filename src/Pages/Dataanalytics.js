
import '../css/DA.css' 
import imageone from '../assets/DAimageone.png'
import imagetwo from '../assets/DAimagetwo.png' 
import DAvideo from '../assets/DAvideo.mp4'
import Offer from "../Component/Offer"
import Footer from "../Component/Footer"
import Navbar from '../Component/Navbar'
import PagesHeader from '../Component/PagesHeader'
import banner from '../assets/DAbanner.jpg'

function Dataanalytics() {
   return (<>
   <Navbar/>
  <PagesHeader det={{url:banner,top:"Services",title:"Networking & infra"}}/>

   <div className='dataanalyticsouter'>
    <div className='dataanalyticsinner'>
      <div className='databody'>
      <img src={imageone} className="image1" alt="image"/>
        <p>An investigation conducted by Lilien, 2016 indicates that most of the customer data have not been analysed in meaningful ways, resulting in inefficient marketing tactics and campaigns and to fully enjoy the benefits brought by data analytics.</p>
        <p>We at TECHNO I will explore the different ways of how data analytics can be leveraged to help B2B firms differentiate customer solutions and sustain profitability.</p>
        <p>Data analytics is a combination of skills, technologies, applications, and processes that enable organisations to analyse an immense volume, variety, and velocity of data across a wide range of networks to support decision making and action taking.</p>
        <p>Data analytics helps increase profit ratio, support evidence-based management, streamline administrative complexities and identify new business opportunities.</p>
        <p>Short glimpse to get ready for creating data analytics process</p>
        <img className='image2' src={imagetwo} alt="image"/>
        <p>As we are witnessing business slowdown due to various factors like COVID and market pressures world over, organizations are investing more on safeguarding business and customer data and digital security is turning out to be most critical. It becomes more of a strategy to turn to own enterprise data and create a process to analyse and use the data more efficiently, for example, forecasting the sales by analysing purchase behaviour of the customers.</p>
        <p>Techno I has the right kind of service and domain expert team to handle your data analytics more efficiently to address business challenges. We will utilize all modern tech tools, process automations and provide cost-efficient solutions.</p>
        <p>There by we can assure our services will empower our clients to remain profitable and differentiate themselves in the world market.</p>
        <h2>PREDICTIVE ANALYSIS PROCESS</h2>
        <video  controls>
  <source src={DAvideo} type="video/mp4"/> 
</video>
<p>Common features of the best tools for predictive Analysis</p>
    <p>Open source<br/>
Interactive Data visualization<br/>
Visual Programming<br/>
supports Hands-on Training<br/>
Add-ons<br/>
Price: free or paid commercial licences.<br/>
Data Engineering<br/>
Advanced Analytics<br/>
High performance<br/>
Analytics Deployment</p>
<p>Interested ? Contact us at <a href = "mailto: abc@example.com">info@technoisolutions.com</a>  to know more about the tools.</p>
      </div>
    </div>
   </div>

    <Offer di={6} b="white" title="Get A Full Range Of Support For Your Enterprise Apps" para="Techno-I’s Application Management services provide systems and application life-cycle governance to improve the reliability, performance, and compliance of your IT environment. Our team will analyze your current state to identify and prioritize areas for process improvement and define a roadmap to align the overall enterprise portfolio with the business requirements.
Our Application Management services offering include :"/>
<Footer/>
   
   </>)
 }
 
 export default Dataanalytics