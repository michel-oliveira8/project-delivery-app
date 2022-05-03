import React, { useEffect, useState } from 'react';

function CheckoutList() {
  const [produtos, setProdutos] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const pedidos = JSON.parse(localStorage.getItem('pedidos'));
    const price = JSON.parse(localStorage.getItem('carrinho'));
    setTotalPrice(price.replace('.', ','));
    setProdutos(pedidos);
  }, []);

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
        {produtos.map(({ price, name, quantity }, id) => (
          <tr key={ id }>
            <td
              data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
            >
              {id + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${id}` }
            >
              {name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
            >
              {quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
            >
              {price}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
            >
              {(price * quantity).toFixed(2)}
            </td>
            <td>
              <button
                data-testid={ `customer_checkout__element-order-table-remove-${id}` }
                type="button"
              >
                Remover Item
              </button>
            </td>
          </tr>
        ))}
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { `Total: R$ ${totalPrice}` }
        </span>
      </table>
    </div>
  );
}

export default CheckoutList;
