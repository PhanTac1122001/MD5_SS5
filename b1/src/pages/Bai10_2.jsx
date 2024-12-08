import React from "react";
import { useParams } from "react-router-dom";
import Bai10 from "./Bai10";

export default function Bai10_2() {
  const { userId, email, username ,address} = useParams();
  return (
    <>
      <div>
        <p>User chi tiết có id = {userId}</p>
        <p>User chi tiết có name = {username}</p>
        <p>User chi tiết có email = {email}</p>
        <p>User chi tiết có address = {address}</p>
      </div>
    </>
  );
}
