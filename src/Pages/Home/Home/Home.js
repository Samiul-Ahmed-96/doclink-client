import React from 'react';
import Banner from '../Banner/Banner';
import HomeAppoinment from '../HomeApoinment/HomeAppoinment';
import Services from '../Sevices/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeAppoinment></HomeAppoinment>
        </div>
    );
};

export default Home;