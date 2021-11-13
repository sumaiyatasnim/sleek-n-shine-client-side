import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-plains-83657.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setHomeProducts(data));
    }, [])
    const homePd = homeProducts.slice(0, 6);
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Popular Shampoos</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    homePd.map(pd =>
                        <HomeProduct
                            key={pd.id}
                            pd={pd}
                        ></HomeProduct>
                    )
                }
            </div>

        </div>
    );
};

export default HomeProducts;