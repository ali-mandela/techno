import React from 'react';
import Area from './Area';
import Banner from './Banner';
import Header from './Header';
import Offer from './Offer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Offer />
            <Area />
        </div>
    );
};

export default Home;