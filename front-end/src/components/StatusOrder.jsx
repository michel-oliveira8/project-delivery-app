import React, { useState, useEffect } from 'react';

function StatusOrder() {
  const [order, setOrder] = useState([]);


  useEffect(() => {
    const userId  = JSON.parse(localStorage.getItem('user'))
    console.log(userId);
    // axios.get('http://localhost:3001/order/${userId.id}')
    // .then(() => )
    // .catch(() => );
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
