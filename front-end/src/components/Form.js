import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });

  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input
          {...register("email", { required: true, pattern: {
            value: EMAIL_VALIDATION,
            message: 'Invalid email'
          } })}
          placeholder="email@trybe.com.br"
          data-testid="common_login__input-email"
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          {...register("password", { required: true, minLength: 6  })}
          placeholder="*******"
          data-testid="common_login__input-password"
        />
      </label>
      <div>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={!isValid}
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </div>
      <div data-testid="common_login__element-invalid-email">
        {/* { errors.email?.message && <span>Email is invalid</span>}
        { errors.password?.type === "minLength" && <span>Password is less than 6 characters</span>}
        { errors.password?.type === "required" && <span>Password is required</span>}
        { errors.email?.type === "required" && <span>Email is required</span>} */}
      </div>
    </form>
  )
}

export default Form;