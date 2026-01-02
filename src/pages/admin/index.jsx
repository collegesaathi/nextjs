import React from 'react'
import AdminLayout from './common/AdminLayout';


export default function Index() {


  return (
    <AdminLayout page={"Dashboard"}>
      <div className="min-h-screen p-5 lg:p-[30px]">
        <h2>Admin Dashboard </h2>
      </div>
    </AdminLayout >
  );
}
