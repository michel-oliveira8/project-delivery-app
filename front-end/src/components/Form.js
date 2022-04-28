import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {
  const [loginInvalid, setLoginInvalid] = useState(true);

  const navigate = useNavigate();

  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    axios.post('http://localhost:3001/login', data)
      .then(async () => navigate('/customer/products'))
      .catch(() => setLoginInvalid(false));
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
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
          data-testid="common_login__input-email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          { ...register('password', { required: true, minLength: 6 }) }
          placeholder="*******"
          data-testid="common_login__input-password"
        />
      </label>
      <div>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !isValid }
        >
          Login
        </button>
        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </div>
      <div>
        <p hidden={ loginInvalid } data-testid="common_login__element-invalid-email">
          Email ou senha invalida!!
        </p>
        {/* { errors.email?.message && <span>Email is invalid</span>}
        { errors.password?.type === "minLength" && <span>Password is less than 6 characters</span>}
        { errors.password?.type === "required" && <span>Password is required</span>}
        { errors.email?.type === "required" && <span>Email is required</span>} */}
      </div>
    </form>
  );
}

export default Form;
