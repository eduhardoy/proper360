import React from "react";
import styled from "styled-components";

const StyledHomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: white;
  width: 100%;
  height: 70px;
  box-shadow: 0 2px 9px -1px hsl(0deg 2% 48% / 60%);
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
          padding-bottom: 4px;
          font-size: 20px;
          text-decoration: none;
          color: black;
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 50% 100%;
          background-repeat: no-repeat;
          background-size: 0% 1px;
          font-weight: 300;
          transition: background-size 0.3s;
          :hover,
          :focus {
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
        <img src='./images/logoproper.png' alt='Logo proper' />
      </HeaderImageContainer>
      <HeaderMenuContainer>
        <nav>
          <ul>
            <li>
              <a href=''>INMOBILIARIAS</a>
            </li>
            <li>
              <a href=''>NOSOTROS</a>
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
