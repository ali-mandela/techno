import React from 'react';
import Area from './Area';
import Banner from './Banner';
import Header from './Header';
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
        </div>
    );
};

export default Home;