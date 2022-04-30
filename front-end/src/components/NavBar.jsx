import React from 'react';

function NavBar() {
  return (
    <nav>
      <a
        href="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </a>
      <a href=".." data-testid="customer_products__element-navbar-link-orders">
        MEUS PEDIDOS
      </a>
      <a
        href=".."
        data-testid="customer_products__element-navbar-user-full-name"
      >
        NOME CLIENTE
      </a>
      <a href=".." data-testid="customer_products__element-navbar-link-logout">
        SAIR
      </a>
    </nav>
  );
}

export default NavBar;
