import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const StudentsOutlet = () => {
  const isStudent = true;
  return isStudent ? <Outlet /> : <Navigate to="/" />;
};

export default StudentsOutlet;
