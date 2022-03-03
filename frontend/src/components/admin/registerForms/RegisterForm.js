import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import "./registerForm.scss";

export default function RegisterForm() {
  const incialValue = {
    username: "",
    email: "",
    password: "",
    privacyPolicy: false,
  };
  const [inputs, setInputs] = useState(incialValue);

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const register = (e) => {
    e.preventDefaul();
  };

  return (
    <Form className="register-form" onSubmit={register}>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="text"
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={changeForm}
          className="register-form__input"
        ></Input>
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<GoogleOutlined />}
          type="email"
          name="email"
          placeholder="Correo eletronico"
          value={inputs.email}
          onChange={changeForm}
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
          onChange={changeForm}
          className="register-form__input"
        ></Input>
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          value={inputs.privacyPolicy}
          onChange={changeForm}
        >
          He leoido y aceptado la politica de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="submit" className="register-form__button">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}
