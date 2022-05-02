import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';

function Client() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <div>
      <NavBar />
      {products.map((product) => (
        <ProductsCard key={ product.id } value={ product } />
      ))}
    </div>
  );
}

export default Client;
