import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

import logo from '../assets/logo-1.png'

const Header = () => {
    return (
        <div className=' sticky top-0 w-full h-full'>
            <div class="navbar sticky top-0 bg-base-100 px-24 pb-10">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl ">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal  ">
                        <li><Link to='/' className=' text-xl text-indigo-900'>Home</Link></li>
                        <li><Link to='/about' className='  text-xl text-indigo-900'>About Us</Link></li>
                        <li tabindex="0">
                            <a className='  text-xl text-indigo-900'>
                                Services
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to='/contact' className='  text-xl text-indigo-900'>Contact Us</Link></li>
                        {/* <ul class=" menu-horizontal">
                            <li><NavLink to='/' style={({ isActive }) =>
                                (isActive ? { color: '#D7F561' } : { color: 'White' })} className='text-white font-bold px-8'>Home</NavLink></li>
                            <li><NavLink to='/service' style={({ isActive }) =>
                                (isActive ? { color: '#D7F561' } : { color: 'White' })} className='text-white font-bold  px-8'>Service</NavLink></li>
                            <li><NavLink to='/login' style={({ isActive }) =>
                                (isActive ? { color: '#D7F561' } : { color: 'White' })} className='text-white font-bold  px-8'>Login</NavLink></li>

                        </ul> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;