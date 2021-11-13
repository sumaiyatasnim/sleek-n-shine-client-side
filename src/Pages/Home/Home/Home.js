import React from 'react';
import GetReviews from '../GetReview/GetReviews';

import HomeProducts from '../HomeProducts/HomeProducts';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <GetReviews></GetReviews>
        </div>
    );
};

export default Home;