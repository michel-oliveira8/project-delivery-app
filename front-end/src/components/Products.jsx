import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={ product.id }>
          <p
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price}
          </p>
          <img
            src={ product.name }
            alt={ product.url_image }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <p
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </p>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
