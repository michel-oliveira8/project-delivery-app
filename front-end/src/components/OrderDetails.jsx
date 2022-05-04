/* eslint-disable react/prop-types */
import React from 'react';

function OrderDetails({
  numeroPedido, nomeVendedor, dataPedido, statusPedido, itens, precoTotal,
}) {
  const nomeDosCamposTabela = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];
  return (
    <div>
      <h3>Detalhes do Pedido</h3>
      <div>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido
            { numeroPedido }
            ;
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P.Vend:
            { nomeVendedor }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { dataPedido }
          </p>
          <p
            data-testid="customer_order_details__element
            -order-details-label-delivery-status"
          >
            { statusPedido }

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
            { itens.map((item) => (
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
