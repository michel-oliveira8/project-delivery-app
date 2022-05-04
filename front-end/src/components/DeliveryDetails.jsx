import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveyDetails() {
  // const [sellers, setSellers] = useState([]);
  const [sale, setSale] = useState(
    {
      userId: 1,
      sellerId: 1,//pegar do backend
      totalPrice: 0,
      deliveryAddress: 'Rua x',
      deliveryNumber: '123',
      status: 'Pendente',
    },
  );

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('user')).id
    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    setSale({ ...sale, userId, totalPrice: Number(carrinho) });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    // axios.get('http://localhost:3001/') //buscar nome dos vendedores no backend
    // .then(() => )
    // .catch(() => );
  }, []);

  const subimitOrder = () => {
    axios.post('http://localhost:3001/sales', sale)
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
          >
            <option value="">Cidinha do beco</option>
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
