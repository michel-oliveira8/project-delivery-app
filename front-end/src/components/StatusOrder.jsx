import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StatusOrder() {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();
  const MAX = 10;

  useEffect(() => {
    JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/sales')
      .then(({ data }) => setOrder(data))
      .catch((err) => console.log(err));
  }, []);

  function formatDate(saleDate) {
    const date = new Date(saleDate);
    const newDate = date.getDate() >= MAX ? date.getDate() : `0${date.getDate()}`;
    const newMonth = date.getMonth() + 1 >= MAX
      ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const newYear = date.getFullYear();
    return `${newDate}/${newMonth}/${newYear}`;
  }

  return (
    <div>
      {order.map((data) => (
        <button
          type="button"
          key={ data.id }
          onClick={ () => navigate(`/customer/orders/${data.id}`) }
        >
          <div>
            <span
              data-testid={ `customer_orders__element-order-id-${data.id}` }
            >
              { `Pedido 000${data.id}` }
            </span>
          </div>
          <div>
            <span
              data-testid={ `customer_orders__element-delivery-status-${data.id}` }
              type="button"
            >
              { data.status }
            </span>
          </div>
          <div>
            <span
              data-testid={ `customer_orders__element-order-date-${data.id}` }
            >
              { formatDate(data.saleDate) }
            </span>
          </div>
          <div>
            <span
              data-testid={ `customer_orders__element-card-price-${data.id}` }
            >
              { data.totalPrice.replace('.', ',') }
            </span>
          </div>

        </button>
      ))}
    </div>
  );
}

export default StatusOrder;
