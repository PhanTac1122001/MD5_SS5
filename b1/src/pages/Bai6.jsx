import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Bai6() {
  return (
    <>
      <h3>Bai6+7</h3>
      <header
        style={{
          display: "flex",
          gap: 12,
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
        }}
      >
        <NavLink to={"/user/home"}>Home</NavLink>
        <NavLink to={"/user/contact"}>ConTact</NavLink>
      </header>
      <Outlet />
    </>
  );
}
