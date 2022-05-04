// import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveyDetails() {
  // const [sellers, setSellers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // axios.get('http://localhost:3001/') //buscar nome dos vendedores no backend
    // .then(() => )
    // .catch(() => );
  }, []);

  const subimitOrder = () => {
    // axios.post('http://localhost:3001/sales', sale)
    //   .then((saleId) => navigate(`/customer/orders/${saleId}`)) //trocar saleId para resposta do backend
    navigate('/customer/orders/3');
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
