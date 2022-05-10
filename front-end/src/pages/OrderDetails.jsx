/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [saleStatus, setSaleStatus] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [sellerName, setSellerName] = useState('');

  const { id } = useParams();

  const MAX = 10;

  const delivId = 'customer_order_details__element-order-details-label-delivery-status';


  const nomeDosCamposTabela = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];

  function formatDate(saleDate) {
    const date = new Date(saleDate);
    const newDate = date.getDate() >= MAX ? date.getDate() : `0${date.getDate()}`;
    const newMonth = date.getMonth() + 1 >= MAX
      ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const newYear = date.getFullYear();
    return `${newDate}/${newMonth}/${newYear}`;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/sales/${id}`)
      .then(({ data }) => {
        const { salesInfo, totalPrice, status, saleDate, sellerId } = data;
        setOrder(salesInfo);
        setTotal(totalPrice);
        setSaleStatus(status);
        setCreatedAt(formatDate(saleDate));
        axios.get(`http://localhost:3001/user/${sellerId}/id`)
          .then(({ data: seller }) => setSellerName(seller.name));
      });
  }, [id]);


  return (
    <div>
      <NavBar />
      <h3>Detalhes do Pedido</h3>
      <div>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { `Pedido: 000${id}` }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { `P.Vend: ${sellerName}` }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { createdAt }
          </p>
          <p
            data-testid={ delivId }
          >
            { saleStatus }
          </p>
          <button
            disabled={ saleStatus !== 'Em Trânsito' }
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
            { order.map(({ products }, it) => (
              <tr key={ it }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${id}`
                  }
                >
                  { it + 1 }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${id}`
                  }
                >
                  {products[0].name}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${id}`
                  }
                >
                  {products[0].salesProduct.quantity}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${id}`
                  }
                >
                  {`R$ ${products[0].price.replace('.', ',')}`}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${id}`
                  }
                >
                  {`R$ ${(products[0].price * products[0].salesProduct.quantity)
                    .toFixed(2)
                    .replace('.', ',')}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 data-testid="customer_order_details__element-order-total-price">
          {`R$: ${Number(total).toFixed(2).replace('.', ',')}` }
        </h3>
      </div>
    </div>
  );
}

export default OrderDetails;
