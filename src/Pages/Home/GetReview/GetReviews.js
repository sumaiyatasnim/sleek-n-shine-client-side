import React, { useEffect, useState } from 'react';
import GetReview from './GetReview';

const GetReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://arcane-plains-83657.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Reviews</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    reviews.map(reviews =>
                        <GetReview
                            key={reviews.id}
                            reviews={reviews}
                        ></GetReview>
                    )
                }
            </div>

        </div>
    );
};

export default GetReviews;