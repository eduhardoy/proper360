import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/admin/LoginForm";

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("images/banner.jpg");
  background-size: cover;
  filter: grayscale(0.5);
  background-repeat: no-repeat;
  background-color: #f2f2f2;
  background-position: center top;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 40%;
  height: 50%;
  background-color: white;
  margin: 0;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 9px -1px hsl(0deg 2% 48% / 60%);
  h1 {
    height: 20%;
    font-weight: 300;
    margin: 0;
  }
`;

const Admin = () => {
  return (
    <StyledLogin>
      <LoginContainer>
        <h1>PROPER 360</h1>
        <LoginForm />
      </LoginContainer>
    </StyledLogin>
  );
};

export default Admin;
