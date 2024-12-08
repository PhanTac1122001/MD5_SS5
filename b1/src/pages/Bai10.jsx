import { Button } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Bai5 from "./Bai5";

export default function Bai10() {
  const [value, setValue] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSearch = () => {
    setSearchParam({ name: value });
  };

  const listUser = [
    {
      id: 1,
      username: "Nguyen Van A",
      email: "nva@gmail.com",
      address: "HN",
    },
    {
      id: 2,
      username: "Nguyen Van B",
      email: "nvb@gmail.com",
      address: "HCM",
    },
    {
      id: 3,
      username: "Nguyen Van C",
      email: "nvc@gmail.com",
      address: "DN",
    },
  ];
  const filteredUsers = listUser.filter((user) =>
    user.username.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <>
      <div>
        <input
          className="border-solid "
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Address: {item.address}</p>
            <Link
              to={`/user/list/${item.id}/${item.username}/${item.email}/${item.address}`}
            >
              <Button>Xem chi tiết</Button>
            </Link>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </>
  );
}
