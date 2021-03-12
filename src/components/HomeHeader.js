import React from "react";
import styled from "styled-components";

const StyledHomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
`;
const HeaderImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  height: 100%;
  width: 30%;
  img {
    height: 90%;
  }
`;
const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 70%;
  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin-right: 50px;
      li {
        padding: 20px;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
`;

const HomeHeader = () => {
  return (
    <StyledHomeHeader>
      <HeaderImageContainer>
        <img src='./images/propi.png' alt='' />
      </HeaderImageContainer>
      <HeaderMenuContainer>
        <nav>
          <ul>
            <li>
              <a href=''>NOSOTROS</a>
            </li>
            <li>
              <a href=''>CLIENTES</a>
            </li>
            <li>
              <a href=''>CONTACTO</a>
            </li>
          </ul>
        </nav>
      </HeaderMenuContainer>
    </StyledHomeHeader>
  );
};

export default HomeHeader;
