import React from 'react';
import CheckoutList from '../components/CheckoutList';
import DeliveyDetails from '../components/DeliveyDetails';
import NavBar from '../components/NavBar';

function Checkout() {
  return (
    <div>
      <NavBar />
      <CheckoutList />
      <DeliveyDetails />
    </div>
  );
}

export default Checkout;
