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

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Offer title="What we Offer ?" para="mandela construction"/>
             <Area />  
             <Clients name="OUR CLIENTS"/>
            <Testimonial/> 
            <Map/>
            <Contact/>
            <Blog/> 
            <Footer/>  

            {/* <Header />
            <Banner />
            <Offer e="What we offer?" />

            <Testimonial />
            <Map />
            <Contact />
            <Blog />
            <Footer /> */}
            {/* <Offer  name="OUR CLIENTS"/> */}
        </div>
    );
};

export default Home;