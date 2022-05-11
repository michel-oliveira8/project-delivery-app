import React, { useEffect, useState } from 'react';

function NavBar() {
  const [nameUser, setNameUser] = useState('');
  const [occupation, setOccupation] = useState('');

  useEffect(() => {
    const { name, role } = JSON.parse(localStorage.getItem('user'));
    setNameUser(name);
    setOccupation(role);
  }, []);

  const changeLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('pedidos');
    localStorage.removeItem('carrinho');
  };

  return (
    <nav>
      <a
        href="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </a>
      <a
        hidden={ occupation === 'seller' }
        href="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </a>
      <a
        href="/perfil"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { nameUser }
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
