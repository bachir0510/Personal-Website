import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, GoogleOutlined } from "@ant-design/icons";
import "./loginForm.scss";

export default function LoginForm() {
  const incialValue = {
    username: "",
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(incialValue);

  const changeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefaul();
  };

  return (
    <Form className="register-form" onSubmit={login} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<GoogleOutlined />}
          type="email"
          name="email"
          placeholder="Correo eletronico"
          value={inputs.email}
          className="register-form__input"
        ></Input>
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password}
          className="register-form__input"
        ></Input>
      </Form.Item>

      <Form.Item>
        <Button type="submit" className="register-form__button">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
