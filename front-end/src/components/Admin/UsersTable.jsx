import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('user')).token);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/users/admin', { headers: { authorization: token } })
      .then(({ data }) => setUsers(data));
  }, [token]);

  const handleRemove = () => {

  };

  return (
    <div>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Tipo</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, role }, it) => (
            <tr key={ it }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${it}` }
              >
                {it + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${it}` }
              >
                {name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${it}` }
              >
                {email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${it}` }
              >
                {role}
              </td>
              <td>
                <button
                  onClick={ handleRemove }
                  id={ id }
                  data-testid={ `admin_manage__element-user-table-remove-${it}` }
                  type="button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
