import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AdminCreateUser() {
  const [registerInvalid, setRegisterInvalid] = useState(true);

  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/register/admin', data)
      .then(() => setRegisterInvalid(true))
      .catch(() => setRegisterInvalid(false));
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <h3>Cadastrar novo usuário</h3>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          { ...register('name', {
            required: true,
            minLength: 12,
            pattern: {
              message: 'Invalid name',
            },
          }) }
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
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
          placeholder="seu-email@site.com.br"
          data-testid="admin_manage__input-email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          { ...register('password', { required: true, minLength: 6 }) }
          placeholder="*******"
          data-testid="admin_manage__input-password"
        />
      </label>
      <label htmlFor="role">
        <select
          data-testid="admin_manage__select-role"
          { ...register('role') }
        >
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
          <option value="customer">Cliente</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        disabled={ !isValid }
      >
        CADASTRAR
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

export default AdminCreateUser;
