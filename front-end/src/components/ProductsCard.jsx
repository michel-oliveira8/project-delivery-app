import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function ProductsCard({ value, priceFinal }) {
  const [quantity, setQuantity] = useState();
  const { id, price, name, url_image: urlImage } = value;
  const { setAviso } = priceFinal;
  const [product, setProduct] = useState({
    id,
    price,
    quantity,
    name,
  });

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('pedidos'));
    if (getLocal) {
      const [filter] = getLocal.filter((local) => local.id === id);
      if (filter) return setQuantity(filter.quantity);
    }
    setQuantity(0);
  }, [id]);

  useEffect(() => {
    let getLocal = JSON.parse(localStorage.getItem('pedidos'));
    if (!getLocal) {
      getLocal = [];
    }
    const filter = getLocal.filter((local) => local.id !== id);
    if (product.quantity !== 0) filter.push(product);
    localStorage.setItem('pedidos', JSON.stringify(filter));
  }, [product, id]);

  useEffect(() => {
    setProduct({
      id,
      price,
      quantity,
      name,
    });
  }, [quantity, id, price, name]);

  const changeQuantity = (e) => {
    setAviso(true);
    if (e.target.innerText === '+') {
      setQuantity(quantity + 1);
    } else if (e.target.innerText === '-') {
      setQuantity(quantity - 1);
    } else setQuantity(Number(e.target.value));
  };

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace('.', ',')}
      </p>
      <img
        src={ urlImage }
        alt={ name }
        height="250px"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <button
        type="button"
        disabled={ quantity === 0 }
        onClick={ changeQuantity }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        type="number"
        onChange={ changeQuantity }
        value={ quantity }
        min="0"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        onClick={ changeQuantity }
        value={ quantity }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </div>
  );
}

ProductsCard.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
  priceFinal: PropTypes.shape({
    setAviso: PropTypes.func,
  }).isRequired,
};

export default ProductsCard;
