import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// react-boostrap-import
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Products from "./Pages/Home/Products/Products/Products";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import OrderNow from "./Pages/Home/OrderNow/OrderNow";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyOrder from "./Pages/Shared/UserDashboard/MyOrder/MyOrder";
import Payment from "./Pages/Shared/UserDashboard/Payment/Payment";
import Review from "./Pages/Shared/UserDashboard/Review/Review";
import MakeAdmin from "./Pages/Shared/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageAllOrder from "./Pages/Shared/AdminDashboard/ManageAllOrder/ManageAllOrder";
import AddProduct from "./Pages/Shared/AdminDashboard/AddProduct/AddProduct";
import SweetAlertProvider from "./Context/SweetAlertProvider/SweetAlertProvider";
import NotFound from './Pages/NotFound/NotFound'
import ManageReviews from "./Pages/Shared/AdminDashboard/ManageReviews/ManageReviews";


function App() {
  return (
    <div className="App">
      <SweetAlertProvider>
        <AuthProvider>
          <Router>
            <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <PrivateRoute exact path="/products/order/:id">
                <OrderNow />
              </PrivateRoute>
              <PrivateRoute exact path="/myorders">
                <MyOrder />
              </PrivateRoute>
              <PrivateRoute exact path="/payment">
                <Payment />
              </PrivateRoute>
              <PrivateRoute exact path="/review">
                <Review />
              </PrivateRoute>
              <PrivateRoute exact path="/makeadmin">
                <MakeAdmin />
              </PrivateRoute>
              <PrivateRoute exact path="/manageorders">
                <ManageAllOrder />
              </PrivateRoute>
              <PrivateRoute exact path="/managereviews">
                <ManageReviews />
              </PrivateRoute>
              <PrivateRoute exact path="/addproduct">
                <AddProduct />
              </PrivateRoute>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </SweetAlertProvider>
    </div>
  );
}

export default App;
