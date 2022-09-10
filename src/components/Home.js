import React from 'react';
import Area from './Area';
import Banner from './Banner';
import Blog from './Blog';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import Offer from './Offer';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Offer /> 
             <Area />  
            <Testimonial />
            <Clients />
            <Map />   
            <Contact />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;