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

  const handleRemove = (e) => {
    const filter = produtos.filter((local) => local.id !== Number(e.target.id));
    const total = filter
      .reduce((acc, { price, quantity }) => (price * quantity) + acc, 0);
    const finalPrice = total.toFixed(2).replace('.', ',');
    setProdutos(filter);
    setTotalPrice(finalPrice);
    localStorage.setItem('pedidos', JSON.stringify(filter));
    localStorage.setItem('carrinho', JSON.stringify(finalPrice));
  };

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-Total</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <tbody>
          {produtos.map(({ id, price, name, quantity }, it) => (
            <tr key={ it }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${it}` }
              >
                {it + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${it}` }
              >
                {name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${it}` }
              >
                {quantity}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${it}` }
              >
                {price.replace('.', ',')}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${it}` }
              >
                {(price * quantity).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  onClick={ handleRemove }
                  id={ id }
                  data-testid={ `customer_checkout__element-order-table-remove-${it}` }
                  type="button"
                >
                  Remover Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: R$ ${totalPrice}` }
      </span>
    </div>
  );
}

export default CheckoutList;
