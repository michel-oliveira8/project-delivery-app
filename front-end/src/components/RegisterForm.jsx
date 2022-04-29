import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log(data);

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
        <p hidden data-testid="common_register__element-invalid_register">
          Dados inválidos
        </p>
      </div>
    </form>
  );
}

export default Form;
