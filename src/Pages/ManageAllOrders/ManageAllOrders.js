import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    // const handleStatus = (e) => {
    //     setStatus(e.target.value);
    // };
    console.log(status);
    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const status = "apporved";
    // const handleUpdate = (id) => {
    //     fetch(`http://localhost:5000/updateStatus/${id}`, {
    //         method: "PUT",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify({ status }),
    //     });

    //     console.log(id);
    // };

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/delteOrder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        // setControl(!control);
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                });
            console.log(id);
        }
    };
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Product name</th>
                        {/* <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th> */}
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            {/* <td>{pd.description}</td> */}
                            <td>{pd?.pd?.name}</td>
                            {/* <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                />
                            </td> */}
                            <button
                                onClick={() => handleDelete(pd?._id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                            {/* <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn btn-success p-2"
                            >
                                Update
                            </button> */}
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;