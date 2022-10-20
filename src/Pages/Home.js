import React from 'react';
import Navbar from '../Component/Navbar';
import Area from '../Component/Area';
// import Banner from './Banner'; import Blog from './Blog';
import Clients from '../Component//Clients';
import Contact from '../Component/Contact';
// import Footer from './Footer'; import Header from './Header'; import Map from
// './Map';
import Offer from '../Component/Offer';
// import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
// import Testimonial from './Testimonial';
import Blog from '../Component/Blog'
import Map from '../Component/Map'
import Testimonial from '../Component/Testimonial';
import Banner from '../Component/Banner';

const Home = () => {
    return (
        <div>
            <Navbar/>
        <Banner/> 
            <Offer title="What we Offer ?" para=""/>
             <Area />  
            <Testimonial/> 
             <Clients name="OUR CLIENTS"/>
            <Map/>
            <Contact/>
            <Blog/> 
            <Footer/>   
        </div>
    );
};

export default Home;