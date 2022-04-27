import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input
          {...register("email")}
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
        />
      </label>
      <label>
        Senha
        <input
          {...register("password")}
          placeholder="*******"
          data-testid="common_login__input-password"
        />
      </label>
      <div>
        <button
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </div>
      <div data-testid="common_login__element-invalid-email">
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
    </form>
  )
}

export default Form;