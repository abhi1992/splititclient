import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default function Login() {
  const {email, setEmail, password, setPassword} = useState('Login');
  function handleLogin() {
    axios.post('http://localhost:8080/login/', {
        email: email,
        password: password,
    }).then((res) => {
      console.log(res.json());
    });
  }

  const props = {
    type: 'email',
    className: 'form-control col-lg-3 marginBot20',
  };
  const passwordProps = {
    type: 'password',
    className: 'form-control col-lg-3 marginBot20',
  };
  const buttonProps = {
    login: {
      text: "Login",
      className: 'form-control col-lg-3 marginBot20',
      onClick: handleLogin,
    },
    signup: {
      text: "Sign Up",
      className: 'form-control col-lg-3',
    }
  };
  return (<>
  <div className="row">
    <div className="col-lg-3">
    </div>
    <div className="col-lg-6">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
            <TextInput value={email} {...props}></TextInput>
            <TextInput value={password} {...passwordProps}></TextInput>
            <Button {...buttonProps.login}></Button>
            <Button {...buttonProps.signup}></Button>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
    </div>
  </div>
  
  </>);
}