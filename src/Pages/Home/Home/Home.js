import React from 'react';
import GetReviews from '../GetReview/GetReviews';

import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div className="container">
            <HomeProducts></HomeProducts>
            <GetReviews></GetReviews>
        </div>
    );
};

export default Home;