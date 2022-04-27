import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
  const loggedIn = false;
  return (
    <Switch>
      <Route
        element={ loggedIn ? <Home /> : <Navigate to="/login" /> }
        path="/"
      />
      <Route element={ <Login /> } path="/login" />
    </Switch>
  );
}

export default Routes;
