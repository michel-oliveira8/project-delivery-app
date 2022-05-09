import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Client from './pages/Client';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import OrderDetails from './pages/OrderDetails';
import SellerOrders from './pages/SellerOrders';
import AdminManage from './pages/AdminManage';

function Routes() {
  const loggedIn = false;

  return (
    <Switch>
      <Route
        element={ loggedIn ? <Home /> : <Navigate to="/login" /> }
        path="/"
      />
      <Route element={ <Login /> } path="/login" />
      <Route element={ <Register /> } path="/register" />
      <Route element={ <Client /> } path="/customer/products" />
      <Route element={ <Checkout /> } path="/customer/checkout" />
      <Route element={ <Checkout /> } path="/customer/checkout" />
      <Route element={ <Order /> } path="/customer/orders" />
      <Route element={ <OrderDetails /> } path="/customer/orders/:id" />
      <Route element={ <SellerOrders /> } path="/seller/orders" />
      <Route element={ <AdminManage /> } path="/admin/manage" />
    </Switch>
  );
}

export default Routes;
