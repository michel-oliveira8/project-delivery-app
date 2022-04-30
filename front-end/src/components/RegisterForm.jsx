import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [registerInvalid, setRegisterInvalid] = useState(true);
  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    axios.post('http://localhost:3001/register', data)
      .then(async () => navigate('/customer/products'))
      .catch(() => setRegisterInvalid(false));
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          { ...register('name', {
            required: true,
            minLength: 12,
          }) }
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          { ...register('email', {
            required: true,
            pattern: {
              value: EMAIL_VALIDATION,
              message: 'Invalid email',
            },
          }) }
          placeholder="email@trybe.com.br"
          data-testid="common_register__input-email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          { ...register('password', {
            required: true,
            minLength: 6,
          }) }
          placeholder="******"
          data-testid="common_register__input-password"
        />
      </label>
      <button
        type="submit"
        data-testid="common_register__button-register"
        disabled={ !isValid }
      >
        Cadastrar
      </button>
      <div>
        <p
          hidden={ registerInvalid }
          data-testid="common_register__element-invalid_register"
        >
          Dados inválidos
        </p>
      </div>
    </form>
  );
}

export default Form;
