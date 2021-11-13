import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Shampoos Available</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    allProducts.map(product =>
                        <AllProduct
                            key={product.id}
                            product={product}
                        ></AllProduct>
                    )
                }
            </div>

        </div>
    );
};

export default AllProducts;