import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddProducts from './Pages/AddProducts/AddProducts';
import AllProducts from './Pages/AllProducts/AllProducts';
import Header from './Pages/Shared/Header/Header';
import OrderProduct from './Pages/OrderProduct/OrderProduct';
import AuthProvider from './Contexts/AuthProvider';
import Registration from './Pages/Login/Registration';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/Review/Review';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            {/* <Route exact path="/review">
              <Review></Review>
            </Route> */}

            <Route exact path="/allProducts">
              <AllProducts></AllProducts>
            </Route>

            <PrivateRoute exact path="/orderPlace/:productId">
              <OrderProduct></OrderProduct>
            </PrivateRoute>

            {/* <Route exact path="/myOrder">
              <MyOrder></MyOrder>
            </Route> */}

            {/* <Route exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route> */}

            {/* <Route exact path="/addProducts">
              <AddProducts></AddProducts>
            </Route> */}
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
