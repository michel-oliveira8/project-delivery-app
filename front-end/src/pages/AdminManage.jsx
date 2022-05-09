import React from 'react';
import AdminCreateUser from '../components/Admin/AdminCreateUser';
import NavBar from '../components/NavBar';

function AdminManage() {
  return (
    <div>
      <NavBar />
      <AdminCreateUser />
    </div>
  );
}

export default AdminManage;
