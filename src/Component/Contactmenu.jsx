 
import React, {useState} from 'react'
import ser1 from '../assets/ser1.png';
import ser2 from '../assets/ser2.png';
import ser3 from '../assets/ser3.png';
import '../css/Contactmenucss.css' 

const Contactmenu = () => {

    const [open,
        setOpen] = useState(false)
    const [open1,
        setOpen1] = useState(false)
    const [open2,
        setOpen2] = useState(false)

    function handelchange() {
        setOpen(!open);
        setOpen2(false);
        setOpen1(false);
    }
    function handelchange1() {
        setOpen(false);
        setOpen2(false);
        setOpen1(!open1);
    }
    function handelchange2() {
        setOpen(false);
        setOpen2(!open2);
        setOpen1(false);
    }
  return (<>
     <div className = 'contactusmenuouter' > 
    <div className='contactusmenuinner'>
                <section className='contactus-menu'>
                <h1>Our Business Presence</h1> 
                    <div  className="contactusmenubody">

                        <div className={open === true  ? "aa " : "cc "} onClick={handelchange}>
                            <h6 >INDIA  <i style={{color:"orange"}} className={open === true ? " fa-1.5x fa-solid fa-circle-plus" : "fa-1.5x fa-solid fa-circle-minus"}></i></h6>
                            
                           
                         
                            <span>ADDRESS <br/>2-62/2/A, Megha Hills, Canara Bank Building,<br/> Madhapur, Hyderabad -81, Telangana</span><br/>
                            <span>Tel. +91-40 48531954</span>
                            <span>Mob +91 75690 39539</span><br/>
                            <span>Email: info@technoisolutions.com</span>
                        </div>
 
                    <div    className={open1 === true ? "bb " : "cc "} onClick={handelchange1}>
                            <h6 >UAE  <i style={{color:"orange"}} className={open1 === true ? " fa-1.5x fa-solid fa-circle-plus" : "fa-1.5x fa-solid fa-circle-minus"}></i></h6>
                            <span>ADDRESS <br/>Business Center – RAKEZ,<br/> RAS AI Khaimah <br/>United Arab Emirates </span> 
                            <span>Tel. +971562313879</span>
                            <span>Mob +91 75690 39539</span> 
                            <span>Email: info@technoisolutions.com</span>
                        </div>
 
                    <div   className={open2 === true ? "dd  " : "cc  "} onClick={handelchange2}>
 
                    <h6 >OMAN  <i style={{color:"orange"}} className={open2 === true ? " fa-1.5x fa-solid fa-circle-plus" : "fa-1.5x fa-solid fa-circle-minus"}></i></h6>
                         
                            <span>ADDRESS <br/>AI Raya Tower  <br/>Office No. 803, Ghala<br/>Sultanate of Oman,<br/>P.O. Box 1724, P.C. 133</span>
                            <span>Hyderabad -81, Telangana</span><br/>
                            <span>Tel. +91-40 48531954</span> 
                            <span>Email: info@technoisolutions.com</span>
                        </div>

                    </div>  

                    <div className='contactusmenuform'>
                <div>
                    <h1 style={{textAlign:"left"}}  className='contactusmenuformh'>Write to us</h1>
                    <form>
                        <input type={"text"} placeholder="Full Name *"/>
                        <input type={"text"} placeholder="Email*"/>
                        <input type={"tel"} placeholder="Phone Number"/><br/>
                        <textarea placeholder="Message" rows={4} cols={25}/><br/>
                        <button type={"submit"}>
                            SEND
                        </button>
                    </form>
                </div>
                <div>
                    <h1 style={{textAlign:"left"}} className='contactusmenuformh'>Stay up to date with the latest</h1>
                    <div>
                        <h2>Follow US</h2>
                        <i class=" fa-4x fa-brands fa-facebook"></i>
                        <i class=" fa-4x fa-brands fa-linkedin"></i>
                    </div>
                    <div className='cs3rightimg'>
                        <img src={ser1} alt="service 1"/>
                        <img src={ser2} alt="service 1"/>
                        <img src={ser3} alt="service 1"/>
                    </div>

                </div>
                 </div>  
 
                 </section>
                  
    </div> 
    </div> 
  </>)
}

export default Contactmenu