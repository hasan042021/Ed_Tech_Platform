import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminOutlet = () => {
  const { role } = useSelector((state) => state.auth.user) || {};
  return role === "admin" ? <Outlet /> : <Navigate to="/admin/" />;
};

export default AdminOutlet;
