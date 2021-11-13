import React from 'react';
import { Link } from 'react-router-dom';
import './homeproducts.css'

const HomeProduct = ({ pd }) => {
    const { _id, name, price, description, img } = pd;
    return (
        <div className="container">
            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3 card card-style">
                    <img style={{ height: "400px" }} className="card-img-top pd-img " src={img} alt="" />
                    <div className="card-body">
                        <h4 className="text-success">{name}</h4>
                        <h5>Price: {price}</h5>
                        <p className="px-3">{description}</p>
                    </div>
                    <div className="justify-content-center pb-4">
                        <Link to={`/orderPlace/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeProduct;