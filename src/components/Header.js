import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import logo from '../assets/logo-1.png'

const Header = () => {
    const [arrow,setArrow] = useState(true);
    const [menu, setMenu] = useState(true)

    function handelaChange(){
        setArrow(!arrow)

    }
    function handleclick(){
        setMenu(!menu)
    }

    const customStyle={
        left:"10px",

    }
    return (<>

        <div className='header'>
            <div className='navbar'>
                <div className="logo">
                    <img src={logo} alt="logo" /> 
                </div>
                <div className='navlinks'>
                    <ul className="links" style={menu===false ? customStyle : null}>
                    <li><Link to='/' className='b'>Home</Link></li>
                    <li><Link to='/about' className=' b'>About Us</Link></li>
                    <li>
                            <a href='#' className='ullink' onMouseOver={handelaChange} onMouseOut={handelaChange}> 
                                Services<i  className={arrow === false? "fa-solid fa-chevron-up" : "fa-1x fa-solid fa-angle-down" } ></i>
                            </a>  
                            <ul className="submenu" onMouseOver={handelaChange} onMouseOut={handelaChange}>
                                <li><Link to="/Application">Application Management</Link></li>
                                <li><Link to="/Cyber">Cyber Security</Link></li>
                                <li><Link to="/zoho">ZOHO Products</Link></li>
                                <li><Link to="/CloudIntergration">Cloud Integrations</Link></li>
                                <li><Link to="/DA">Data Analytics</Link></li>
                                <li><Link to="/ERP">ERP Implementation</Link></li>
                                <li><Link to="/Networking">Networking & infra</Link></li> 
                            </ul>
                        </li>
                        <li><Link to='/contact' className='b'>Contact Us</Link></li>
                    </ul>
                </div>
                <i onClick={handleclick} className={menu===true ? " sidemenu fa-3x fa-solid fa-bars": "fa-3x fa-solid fa-xmark" } />
            </div>
        </div>
        {/* <div className=' n'>
            <div className="navbar">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl ">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal  ">
                        <li><Link to='/' className=' text-xl text-indigo-900  font-Poppins'>Home</Link></li>
                        <li><Link to='/about' className='  text-xl text-indigo-900  font-Poppins'>About Us</Link></li>
                        <li tabindex="0">
                            <a className='  text-xl text-indigo-900  font-Poppins'>
                                Services
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to='/contact' className='  text-xl text-indigo-900  font-Poppins'>Contact Us</Link></li>
                        {/* <ul class=" menu-horizontal">
                            <li><NavLink to='/' style={({ isActive }) =>
                                (isActive ? { color: '#D7F561' } : { color: 'White' })} className='text-white font-bold px-8'>Home</NavLink></li>
                            <li><NavLink to='/service' style={({ isActive }) =>
                                (isActive ? { color: '#D7F561' } : { color: 'White' })} className='text-white font-bold  px-8'>Service</NavLink></li>
                            <li><NavLink to='/login' style={({ isActive }) =>
                                (isActive ? { color: '#D7F561' } : { color: 'White' })} className='text-white font-bold  px-8'>Login</NavLink></li>

                        </ul> 
                    </ul>
                </div>
            </div>
        </div> */}
   </> );
};

export default Header;