import React from 'react';
import { Link } from 'react-router-dom';

const GetReview = ({ reviews }) => {
    const { name, email, addReview } = reviews;
    return (
        <div className="container">
            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3 card card-style">

                    <div className="card-body">
                        <h4 className="text-success">{name}</h4>
                        <h6>Email: {email}</h6>
                        <p className="px-3">{addReview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetReview;