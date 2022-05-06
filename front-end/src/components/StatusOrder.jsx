import React, { useState, useEffect } from 'react';

function StatusOrder() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const userId  = JSON.parse(localStorage.getItem('user'))
    axios.get('http://localhost:3001/sales')
    .then((res) => setOrder(res))
    .catch((err) => console.log(err) );
  }, []);

  return (
    <div>
      {order.map(({ userId, status, saleDate, totalPrice }) => (
      <button
        type="button"
        key={ userId }
      >
        <table>
          <tr>
            <td
              data-testid={ `customer_orders__element-order-${userId}` }
            >
              { userId  }
            </td>
            <td
              data-testid={`customer_orders__element-delivery-status-${userId}`}
              type="button"
            >
              { status }
            </td>
            <td
              data-testid={`customer_orders__element-order-date-${userId}`}
            >
              { saleDate }
            </td>
            <td>
              { totalPrice }
            </td>
          </tr>
        </table>

      </button>
      ))}
    </div>
  );
}

export default StatusOrder;
