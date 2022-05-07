import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerOrder() {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then(({ data }) => {
        setOrder(data);
      });
  }, []);

  return (
    order.map((data, key) => (
      <button
        type="button"
        key={ key }
        onClick={ () => navigate(`/seller/orders/${data.id}`) }
      >
        <div>
          <span
            data-testid={ `seller_orders__element-order-id-${data.id}` }
          >
            { `Pedido 000${key + 1}` }
          </span>
        </div>
        <div>
          <span
            data-testid={ `seller_orders__element-delivery-status-${data.id}` }
          >
            { data.status }
          </span>
        </div>
        <div>
          <span
            data-testid={ `seller_orders__element-order-date-${data.id}` }
          >
            { data.saleDate }
          </span>
        </div>
        <div>
          <span
            data-testid={ `seller_orders__element-card-price-${data.id}` }
          >
            { data.totalPrice }
          </span>
        </div>
        <div>
          <span
            data-testid={ `seller_orders__element-card-address${data.id}` }
          >
            { `${data.deliveryAddress}, ${data.deliveryNumber}` }
          </span>
        </div>
      </button>
    ))
  );
}

export default CustomerOrder;
