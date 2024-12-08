import React from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Xóa trạng thái đăng nhập
    navigate("/login"); // Chuyển hướng về trang Login
  };

  return (
    <div>
      <h1>Welcome to the Account Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
