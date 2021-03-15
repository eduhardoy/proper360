import React from "react";
import styled from "styled-components";

import Logo from "../images/logoproper.png";

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
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 50% 100%;
          background-repeat: no-repeat;
          background-size: 0% 1px;
          transition: background-size .3s;
          :hover, :focus{
            background-size: 100% 1px;
          }
        }
      }
    }
  }
`;

const HomeHeader = () => {
  return (
    <StyledHomeHeader>
      <HeaderImageContainer>
        <img src={Logo} alt='Logo proper'/>
      </HeaderImageContainer>
      <HeaderMenuContainer>
        <nav>
          <ul>
            <li>
              <a href=''>NOSOTROS</a>
            </li>
            <li>
              <a href=''>PROYECTOS</a>
            </li>
            <li>
              <a href=''>PRECIOS</a>
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