import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveryDetails() {
  const navigate = useNavigate();

  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState(1);
  const [address, setAddress] = useState('default');
  const [number, setNumber] = useState('default');
  const [pedidos, setPedidos] = useState([]);
  const [userId, setUserId] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sale, setSale] = useState(
    {
      pedidos: [],
      userId: 1,
      sellerId: 1,
      totalPrice: 0,
      deliveryAddress: 'default',
      deliveryNumber: 'default',
    },
  );

  useEffect(() => {
    setPedidos(JSON.parse(localStorage.getItem('pedidos')));
    setUserId(JSON.parse(localStorage.getItem('user')).id);
    setTotalPrice(JSON.parse(localStorage.getItem('carrinho')));
  }, []);

  useEffect(() => {
    setSale(
      {
        pedidos,
        userId,
        sellerId,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: number,
      },
    );
  }, [pedidos, userId, sellerId, totalPrice, address, number]);

  useEffect(() => {
    axios.get('http://localhost:3001/user/seller')
      .then(({ data }) => {
        setSellerList(data);
        setSellerId(data[0].id);
      });
  }, []);

  const submitOrder = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    axios.post('http://localhost:3001/sales', sale, { headers: { Authorization: token } })
      .then(({ data: { saleId } }) => navigate(`/customer/orders/${saleId}`))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSellerId(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="seller">
          <select
            required
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

export default DeliveryDetails;
