import React from 'react';
import './banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container">
            <div className="banner d-flex  align-items-center ">
                <div className="row container">
                    <div className="col-md-10 col-lg-10 col-12">
                        <Link to="/allProducts"><h1 className="title">See More Shampoos</h1></Link>

                    </div>
                    <div className="col-md-2 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;