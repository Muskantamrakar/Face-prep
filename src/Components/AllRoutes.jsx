import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import PrivateRoute from "./PrivateRoute";

// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return <Routes>
    <Route path="/" element={
    <PrivateRoute>
      <Home/>
    </PrivateRoute>
    }></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/cart" element={
    <PrivateRoute>

      <Cart/>
    </PrivateRoute>
    }></Route>
  </Routes>;
};

export default AllRoutes;
