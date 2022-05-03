import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';

function Client() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then(({ data }) => setProducts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(totalPrice.toFixed(2)));
  }, [totalPrice]);

  return (
    <div>
      <NavBar />
      {products.map((product) => (
        <ProductsCard
          key={ product.id }
          value={ product }
          priceFinal={ { setTotalPrice, totalPrice } }
        />
      ))}
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
      >
        {totalPrice.toFixed(2).replace('.', ',')}
      </button>
    </div>
  );
}

export default Client;
