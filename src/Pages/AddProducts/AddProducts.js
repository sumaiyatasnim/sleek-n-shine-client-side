import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './addProducts.css';


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://arcane-plains-83657.herokuapp.com/addProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div>

            <div className="container add-service body">
                <h2>Add a Products</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="name" />
                    <textarea {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProducts;