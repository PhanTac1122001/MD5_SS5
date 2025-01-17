import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Kiểm tra trạng thái đăng nhập
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
