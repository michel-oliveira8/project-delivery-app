import React from 'react';
import CheckoutList from '../components/CheckoutList';
import DeliveryDetails from '../components/DeliveryDetails';
import NavBar from '../components/NavBar';

function Checkout() {
  return (
    <div>
      <NavBar />
      <CheckoutList />
      <DeliveryDetails />
    </div>
  );
}

export default Checkout;
