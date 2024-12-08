import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/account"); 
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Form name="login" onFinish={onFinish} style={{ maxWidth: 400, margin: "auto" }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}