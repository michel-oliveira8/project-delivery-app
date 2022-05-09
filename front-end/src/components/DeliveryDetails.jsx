import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveryDetails() {
  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [userId, setUserId] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState('');
  const [sale, setSale] = useState(
    {
      userId: 1,
      sellerId: 1,
      totalPrice: 1,
      deliveryAddress: '',
      deliveryNumber: '',
    },
  );

  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('pedidos')));
    setUserId(JSON.parse(localStorage.getItem('user')).id);
    setTotalPrice(Number(JSON.parse(localStorage.getItem('carrinho'))));
    setToken(JSON.parse(localStorage.getItem('user')).token);
  }, []);

  useEffect(() => {
    setSale(
      {
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
      },
    );
  }, [userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart]);

  useEffect(() => {
    axios.get('http://localhost:3001/user/seller')
      .then(({ data }) => {
        setSellerList(data);
        setSellerId(data[0].id);
      });
  }, []);

  const sendOrder = () => {
    axios.post('http://localhost:3001/sales', sale, { headers: { authorization: token } })
      .then(({ data: { id } }) => {
        axios.post(`http://localhost:3001/sales/${id}/products`, { cart })
          .then(() => {
            navigate(`/customer/orders/${id}`);
          });
      });
  };

  const handleChange = (e) => {
    setSellerId(e.target.value);
  };

  const handleNumber = (e) => {
    setDeliveryNumber(e.target.value);
  };

  const handleAddress = (e) => {
    setDeliveryAddress(e.target.value);
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
              <option key={ id } value={ id }>{ name }</option>
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
            value={ deliveryAddress }
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="numero">
          <input
            data-testid="customer_checkout__input-addressNumber"
            placeholder="125"
            type="text"
            name="numero"
            id="numero"
            value={ deliveryNumber }
            onChange={ handleNumber }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ sendOrder }
          disabled={ (deliveryAddress === '') || (deliveryNumber === '') }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default DeliveryDetails;
