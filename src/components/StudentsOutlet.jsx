import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const StudentsOutlet = () => {
  const { role } = useSelector((state) => state.auth.user) || {};

  return role === "student" ? <Outlet /> : <Navigate to="/" />;
};

export default StudentsOutlet;
