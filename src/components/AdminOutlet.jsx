import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminOutlet = () => {
  const isAdmin = true;
  return isAdmin ? <Outlet /> : <Navigate to="/admin/" />;
};

export default AdminOutlet;
