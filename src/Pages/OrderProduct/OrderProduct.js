import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./orderPlace.css";
const OrderProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const onSubmit = data => {
        const myOrder = product;
        data.order = myOrder;
        data.email = user.email;
        console.log('my order', myOrder)
        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('You have booked shampoo');

                    reset();
                    console.log(result);
                }

            })
    }
    return (
        <div className="container ">
            <div className="container col-lg-6">
                <h1 className="text-primary">Book Your Package</h1>
                <h2 className="text-success mt-5">{product.name}</h2>
                <img style={{ height: "400px", width: "350px" }} src={product.img} alt="" />
                {/* <h2>this is booking: {serviceId}</h2> */}
                <p>Details:{product.description}</p>
                <h6>Cost: ${product.price}</h6>
            </div>
            <div className="container col-lg-6">
                <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} required />

                    <input defaultValue={user.email} {...register("email")} required />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderProduct;