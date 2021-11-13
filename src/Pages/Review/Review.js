import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
    };
    return (
        <div className="container add-service">
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />

                <br />
                {/* <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                /> */}
                <textarea {...register("addReview", { required: true })} placeholder="Add review" />
                <br />

                <input
                    className="submit-btn btn btn-primary mt-3"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Review;