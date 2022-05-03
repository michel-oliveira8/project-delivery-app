import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ProductsCard({ value, priceFinal }) {
  const [quantity, setQuantity] = useState(0);

  const { id, price, name, url_image: urlImage } = value;
  const { setTotalPrice, totalPrice } = priceFinal;

  const changeQuantity = (e) => {
    if (e.target.innerText === '+') {
      setQuantity(quantity + 1);
      return setTotalPrice(totalPrice + Number(e.target.parentElement.id));
    } if (e.target.innerText === '-') {
      setQuantity(quantity - 1);
      return setTotalPrice(totalPrice - Number(e.target.parentElement.id));
    }
    setQuantity(Number(e.target.value));
    setTotalPrice(e.target.value * Number(e.target.parentElement.id));
  };

  return (
    <div id={ price }>
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
        id={ price.replace('.', ',') }
        min="0"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        onClick={ changeQuantity }
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
    setTotalPrice: PropTypes.func,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default ProductsCard;
