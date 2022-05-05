import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveyDetails() {
  const navigate = useNavigate();

  const [sellerList, setSellerList] = useState([])
  const [sellerId, setSellerId] = useState(0)
  const [sale, setSale] = useState(
    {
      pedidos: [],
      userId: 0,
      sellerId: 0,
      totalPrice: 0,
      deliveryAddress: 'Rua x',
      deliveryNumber: '123',
      status: 'Pendente',
    },
  );

  const setSaleDetails = () => {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const pedidos = JSON.parse(localStorage.getItem('pedidos'));
    setSale({ ...sale, sellerId, pedidos, userId, totalPrice: Number(carrinho) });
  };

  useEffect(() => {
    axios.get('http://localhost:3001/user/seller')
      .then(({ data }) => {
        setSellerList(data)
        setSellerId(data[0].id)
      })
  }, []);

  const subimitOrder = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    setSaleDetails()
    axios.post('http://localhost:3001/sales', sale,
      { headers: { Authorization: token } })
      .then(({ data: { saleId } }) => navigate(`/customer/orders/${saleId}`));
  };

  return (
    <div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="seller">
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
            value={ sellerId }
            onChange={ (e) => setSellerId(e.target.value) }
          >
            {sellerList.map(({ name, id }) => (
              <option key={ id } value={ name }>{ name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereco">
          <input
            data-testid="customer_checkout__input-address"
            placeholder="Beco 135 - Morro dos Papagaios"
            type="text"
            name="endereco"
            id="endereco"
          />
        </label>
        <label htmlFor="numero">
          <input
            data-testid="customer_checkout__input-addressNumber"
            placeholder="125"
            type="text"
            name="numero"
            id="numero"
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ subimitOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default DeliveyDetails;
