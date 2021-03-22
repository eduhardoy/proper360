import React from "react";
import styled from "styled-components";
import { useNavigate } from "@reach/router";

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

  const navigateToEmpresa = e => {
    e.preventDefault();

    //TODO LOGICA DE LOGIN
    localStorage.setItem("user", "user");

    navigate("/admin/inmobiliarias");
  };

  return (
    <StyledForm action='inicio' onSubmit={e => navigateToEmpresa(e)}>
      <div>
        <input placeholder='Usuario'></input>
      </div>
      <div>
        <input type='password' placeholder='Contraseña'></input>
      </div>
      <button>LOGIN</button>
    </StyledForm>
  );
};

export default LoginForm;
