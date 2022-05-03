import React, { useEffect, useState } from 'react';

function NavBar() {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(JSON.parse(localStorage.getItem('user')).name);
  }, []);

  const changeLogout = () => {
    localStorage.removeItem('user');
  };

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
        { name }
      </a>
      <a
        href="/login"
        onClick={ changeLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        SAIR
      </a>
    </nav>
  );
}

export default NavBar;
