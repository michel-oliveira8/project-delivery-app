import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveyDetails() {
  const navigate = useNavigate();

  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sale, setSale] = useState(
    {
      pedidos: [],
      userId: 1,
      sellerId: 1,
      totalPrice: 0,
      deliveryAddress: '',
      deliveryNumber: '',
      status: 'Pendente',
    },
  );

  const setSaleDetails = () => {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const pedidos = JSON.parse(localStorage.getItem('pedidos'));
    setSale(
      { ...sale,
        pedidos,
        sellerId,
        userId,
        totalPrice: Number(carrinho),
        deliveryAddress: address,
        deliveryNumber: number,
      },
    );
  };

  useEffect(() => {
    axios.get('http://localhost:3001/user/seller')
      .then(({ data }) => {
        setSellerList(data);
        setSellerId(data[0].id);
      });
  }, []);

  const submitOrder = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    axios.post('http://localhost:3001/sales', sale,
      { headers: { Authorization: token } })
      .then(({ data: { saleId } }) => navigate(`/customer/orders/${saleId}`))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSellerId(e.target.value);
    setSaleDetails();
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
    setSaleDetails();
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSaleDetails();
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
            onChange={ handleChange }
          >
            {sellerList.map(({ name, id }) => (
              <option key={ id } value={ name }>{ name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereco">
          <input
            required
            data-testid="customer_checkout__input-address"
            placeholder="Beco 135 - Morro dos Papagaios"
            type="text"
            name="endereco"
            id="endereco"
            value={ address }
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="numero">
          <input
            required
            data-testid="customer_checkout__input-addressNumber"
            placeholder="125"
            type="text"
            name="numero"
            id="numero"
            value={ number }
            onChange={ handleNumber }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ submitOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default DeliveyDetails;
