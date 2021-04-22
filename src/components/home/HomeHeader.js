import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

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
  height: 100%;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
  a{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    height: 80%;
    @media (max-width: 1024px) {
    height: 60%;
  }
  }
  }

`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 70%;
  @media (max-width: 1024px) {
    display: none;
  }
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
        <Link to='/'>
        <img src='https://live.staticflickr.com/65535/51132651295_d1cba6c406_n.jpg' alt='Logo proper' />
        </Link>
      </HeaderImageContainer>
      <HeaderMenuContainer>
        <nav>
          <ul>
            <li>
              <a href='/#inmobiliarias'>INMOBILIARIAS</a>
            </li>
            <li>
              <a href='/#about'>NOSOTROS</a>
            </li>
            <li>
              <a href='/#contact'>CONTACTO</a>
            </li>
          </ul>
        </nav>
      </HeaderMenuContainer>
    </StyledHomeHeader>
  );
};

export default HomeHeader;
