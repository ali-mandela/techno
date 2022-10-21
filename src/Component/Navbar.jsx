import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'

import logo from '../assets/logo-1.png'

const Navbar = () => {
    const [arrow,
        setArrow] = useState(true);
    const [menu,
        setMenu] = useState(true)

    function handelaChange() {
        setArrow(!arrow)

    }
    function handleclick() {
        setMenu(!menu)
    }

    return (<> 
    <div className='nav'>
        <div className='navbar'>
            <div className="logo">
               <Link to='/' ><img src={logo} alt="logo"/></Link> 
            </div>
            <ul
                className={menu === true
                ? "links mob-links-close"
                : "links mob-links"}>
                <li>
                    <Link to='/' className='b'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className=' b'>About Us</Link>
                </li>
                <li className='link-a' onMouseOver={handelaChange} onMouseOut={handelaChange}>
                    <a href='services'>
                        Services<i
                            className={arrow === false
        ? "fa-solid fa-chevron-up"
        : "fa-1x fa-solid fa-angle-down"}></i>
                    </a>
                    <ul className="submenu">
                        <li>
                            <Link to="/Application">Application Management</Link>
                        </li>
                        <li>
                            <Link to="/Cyber">Cyber Security</Link>
                        </li>
                        <li>
                            <Link to="/zoho">ZOHO Products</Link>
                        </li>
                        <li>
                            <Link to="/CloudIntergration">Cloud Integrations</Link>
                        </li>
                        <li>
                            <Link to="/DA">Data Analytics</Link>
                        </li>
                        <li>
                            <Link to="/ERP">ERP Implementation</Link>
                        </li>
                        <li>
                            <Link to="/Networking">Networking & infra</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to='/contact' className='b'>Contact Us</Link>
                </li>
            </ul>

            <i
                onClick={handleclick}
                className={menu === true
                ? " sidemenu fa-3x fa-solid fa-bars"
                : "fa-3x fa-solid fa-xmark"}/>
        </div>
</div>
   </>);
};

export default Navbar;