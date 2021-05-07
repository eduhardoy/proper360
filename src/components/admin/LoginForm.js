import React from "react";
import styled from "styled-components";
import { useNavigate } from "@reach/router";
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  width: 80%;
  div {
    width: 60%;
    position: relative;
    border-bottom: 2px solid #000;
    margin-bottom: 30px;
    input {
      font-size: 20px;
      color: #000;
      line-height: 1.2;
      display: block;
      width: 100%;
      height: 45px;
      background: transparent;
      border-bottom: 2px solid black;
      padding: 0 5px 0 20px;
      outline: none;
      border: none;
      overflow: visible;
    }
  }
  button {
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    align-items: center;
    padding: 0 20px;
    min-width: 120px;
    height: 50px;
    border-radius: 25px;
    position: relative;
    transition: 0.5s;
    background-color: rgb(56, 56, 56);
    border: none;
    outline: none;
    :hover {
      background-color: black;
    }
    :focus {
      background-color: white;
      border: 2px solid black;
      color: black;
    }
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const navigateToEmpresa = e => {
    e.preventDefault();
    setError(null);
    let form = new FormData(e.target);
    //TODO LOGICA DE LOGIN
    axios({
      method: "POST",
      url: "http://198.58.123.120:3006/auth/login",
      data: {
        usuario: form.get("usuario"),
        contrasena: form.get("contrasena"),
      },
    })
      .then(success => localStorage.setItem("token", success.data.access_token))
      .catch(err => setError("error"));

    setTimeout(() => {
      navigate("/admin/inmobiliarias");
    }, 500);
  };

  return (
    <StyledForm action='inicio' onSubmit={e => navigateToEmpresa(e)}>
      <div>
        <input name='usuario' placeholder='Usuario'></input>
      </div>
      <div>
        <input
          name='contrasena'
          type='password'
          placeholder='Contraseña'
        ></input>
      </div>
      {error != null && <p>Usuario y/o contraseña invalidas...</p>}
      <button>LOGIN</button>
    </StyledForm>
  );
};

export default LoginForm;
