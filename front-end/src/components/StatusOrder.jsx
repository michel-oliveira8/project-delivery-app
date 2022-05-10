import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StatusOrder() {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/sales')
      .then(({ data }) => setOrder(data))
      .catch((err) => console.log(err));
  }, []);

  function formatDate(saleDate) {
    const date = new Date(saleDate);
    const newDate = date.getDate();
    const newMonth = date.getMonth();
    const TWO = -2;
    const newYear = date.getFullYear().toString().substr(TWO);
    return `${newDate}/${newMonth}/${newYear}`;
  }

  return (
    <div>
      {order.map(({ userId, status, saleDate, totalPrice }) => (
        <button
          type="button"
          key={ userId }
          onClick={ () => navigate(`/customer/orders/${userId}`) }
        >
          <table>
            <tr>
              <td
                data-testid={ `customer_orders__element-order-${userId}` }
              >
                { `Pedido 000${userId}` }
              </td>
              <td
                data-testid={ `customer_orders__element-delivery-status-${userId}` }
                type="button"
              >
                { status }
              </td>
              <td
                data-testid={ `customer_orders__element-order-date-${userId}` }
              >
                { formatDate(saleDate) }
              </td>
              <td>
                { `R$${totalPrice}` }
              </td>
            </tr>
          </table>

        </button>
      ))}
    </div>
  );
}

export default StatusOrder;
