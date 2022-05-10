import React from 'react';
import AdminCreateUser from '../components/Admin/AdminCreateUser';
import UsersTable from '../components/Admin/UsersTable';
import NavBar from '../components/NavBar';

function AdminManage() {
  return (
    <div>
      <NavBar />
      <AdminCreateUser />
      <UsersTable />
    </div>
  );
}

export default AdminManage;
