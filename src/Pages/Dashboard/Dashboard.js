// import React, { useEffect, useState } from 'react';
// import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
// import MyOrder from '../MyOrder/MyOrder';
// import Review from '../Review/Review';

// const Dashboard = () => {
//     let { path, url } = useRouteMatch();
//     const { user } = useAuth();
//     const [isAdmi, setIsAdmin] = useState(false);

//     useEffect(() => {
//         fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data[0]?.role === "admin") {
//                     setIsAdmin(true);
//                 } else {
//                     setIsAdmin(false);
//                 }
//             });
//     }, [user?.email]);
//     console.log(isAdmi);
//     return (

//         <div className="container d-flex" id="wrapper" >
//             {/* sidebar */}
//             <div className="bg-white">
//                 <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold">
//                     Dashboard
//                 </div>
//                 <div className="list-group list-group-flush my-3">

//                     {/* <Link to={`${url}`}>
//                         <li className="list-group-item list-group-item-action bg-transparent text-secondary active">Book</li>
//                     </Link> */}

//                     <Link className="list-group-item list-group-item-action bg-transparent text-secondary active" to={`${url}/myOrder`}>
//                         <li className="dashboard-menu mt-5">MyOrder</li>
//                     </Link>

//                     <Link className="list-group-item list-group-item-action bg-transparent text-secondary active" to={`${url}/review`}>
//                         <li className="dashboard-menu mt-5">Review</li>
//                     </Link>

//                     <Link className="list-group-item list-group-item-action bg-transparent text-secondary active" to={`${url}/makeAdmin`}>
//                         <li className="dashboard-menu">Make Admin</li>
//                     </Link>

//                     <Link className="list-group-item list-group-item-action bg-transparent text-secondary active" to={`${url}/addProducts`}>
//                         <li className="dashboard-menu mt-5">Add Products</li>
//                     </Link>

//                 </div>
//             </div>
//             <div className="col-md-9">
//                 <Switch>
//                     <Route exact path={path}>
//                         <Dashboard></Dashboard>
//                     </Route>
//                     <Route exact path={`${path}/myOrder`}>
//                         <MyOrder></MyOrder>
//                     </Route>
//                     <Route exact path={`${path}/review`}>
//                         <Review></Review>
//                     </Route>

//                 </Switch>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";

import useAuth from "../../Hooks/useAuth";
import Review from "../Review/Review";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import MyOrder from "../MyOrder/MyOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import Pay from "../Pay/Pay";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();

    // const [isAdmi, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data[0]?.role === "admin") {
    //                 setIsAdmin(true);
    //             } else {
    //                 setIsAdmin(false);
    //             }
    //         });
    // }, [user?.email]);

    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            {/* <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">Dashboard</li>
                            </Link> */}

                            {!admin && <div>
                                <Link to={`${url}/myOrder`}>
                                    <li className="dashboard-menu mt-5">My Order</li>
                                </Link>
                                <Link to={`${url}/payment`}>
                                    <li className="dashboard-menu mt-5">Make Payment</li>
                                </Link>

                                <Link to={`${url}/review`}>
                                    <li className="dashboard-menu mt-5">Review</li>
                                </Link>
                            </div>}

                            <div className="admin-dashboard">
                                <h5 className="dashboard-menu mt-5"></h5>

                                {admin && <div>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>
                                    <Link to={`${url}/addProducts`}>
                                        <li className="dashboard-menu">Add Products</li>
                                    </Link>
                                    <Link to={`${url}/manageProducts`}>
                                        <li className="dashboard-menu">Manage Products</li>
                                    </Link>

                                </div>

                                }
                                {/* <Link to={`${url}/makeAdmin`}>
                                    <li className="dashboard-menu">Make Admin</li>
                                </Link> */}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path={`${path}/myOrder`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Pay></Pay>
                            </Route>

                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;