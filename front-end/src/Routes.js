import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Client from './pages/Client';

function Routes() {
  const loggedIn = false;
  return (
    <Switch>
      <Route
        element={ loggedIn ? <Home /> : <Navigate to="/login" /> }
        path="/"
      />
      <Route element={ <Login /> } path="/login" />
      <Route element={ <Client /> } path="/customer/products" />
    </Switch>
  );
}

export default Routes;
