import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function DeliveyDetails() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sale, setSale] = useState(
    {
      pedidos: [],
      userId: 0,
      sellerId: 0,
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
  // { headers: { Authorization: token } }
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
      .then(({ data: { saleId } }) => {
        console.log(sale);
        navigate(`/customer/orders/${saleId}`);
      });
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
    <form onSubmit={ handleSubmit(submitOrder) }>
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
            id="endereco"
            type="text"
            { ...register('endereco', {
              required: true,
              message: 'Invalid email',
            }) }
            placeholder="Beco 135 - Morro dos Papagaios"
            data-testid="customer_checkout__input-address"
            value={ address }
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="numero">
          <input
            id="numero"
            type="text"
            { ...register('numero', { required: true }) }
            placeholder="125"
            data-testid="customer_checkout__input-addressNumber"
            value={ number }
            onChange={ handleNumber }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="submit"
        >
          FINALIZAR PEDIDO
        </button>
        {errors.endereco?.type === 'required' && 'Endereço obrigatório'}
        {errors.numero?.type === 'required' && 'Número obrigatório'}
      </div>
    </form>
  );
}

export default DeliveyDetails;
