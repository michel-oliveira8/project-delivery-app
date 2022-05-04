/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function OrderDetails(props) {
  const [order, setOrder] = useState({});
  const { match: { params: { id } } } = props;

  const nomeDosCamposTabela = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];

  useEffect(() => {
    fetch(`http://localhost:3001/sales/${id}`)
      .then((res) => res.json())
      .then((res) => setOrder(res));
  }, []);
  return (
    <div>
      <h3>Detalhes do Pedido</h3>
      <div>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido
            { order.numeroPedido }
            ;
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P.Vend:
            { order.nomeVendedor }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { order.dataPedido }
          </p>
          <p
            data-testid="customer_order_details__element
            -order-details-label-delivery-status"
          >
            { order.statusPedido }

          </p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </button>
        </div>
        <table>
          <thead>
            <tr>
              { nomeDosCamposTabela.map((nome) => (
                <th key={ nome }>{ nome }</th>
              )) }
            </tr>
          </thead>
          <tbody>
            { order.products.map((item) => (
              <tr key={ item }>
                <td
                  data-testid="customer_order_details__element-order-table-item-number-"
                >
                  Item
                </td>
                <td
                  data-testid="customer_order_details__element-order-table-name-"
                >
                  Descrição
                </td>
                <td
                  data-testid="customer_order_details__element-order-table-quantity-"
                >
                  Quantidade
                </td>
                <td
                  data-testid="customer_order_details__element-order-table-unit-price-"
                >
                  Valor Unitário
                </td>
                <td
                  data-testid="customer_order_details__element-order-table-sub-total-"
                >
                  Sub-total
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3
          data-testid="customer_order_details__element-order-total-price-"
        >
          { precoTotal }
        </h3>
      </div>
    </div>
  );
}

export default OrderDetails;
