import React from 'react';

function AdminCreateUser() {
  return (
    <div>
      <h3>Cadastrar novo usuário</h3>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name=""
          id="name"
          data-testid="admin_manage__input-name"
          placeholder="Nome e sobrenome"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name=""
          id="email"
          data-testid="admin_manage__input-email"
          placeholder="seu-email@site.com.br"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name=""
          id="password"
          data-testid="admin_manage__input-password"
          placeholder="*********"
        />
      </label>
      <label htmlFor="role">
        Senha
        <input
          type="password"
          name=""
          id="password"
          data-testid="admin_manage__input-password"
          placeholder="*********"
        />
      </label>
      <label htmlFor="role">
        <select name="" id="role" data-testid="admin_manage__select-role">
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
          <option value="customer">Cliente</option>
        </select>
      </label>
      <button type="button" data-testid="admin_manage__button-register">CADASTRAR</button>
    </div>
  );
}

export default AdminCreateUser;
