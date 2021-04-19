import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledHeader = styled.header`
  width: 100%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      color: black;
      font-size: 22px;
      h2{
        margin: 20px;
      }
      img {
        height: auto;
        width: 150px;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to='/inmobiliaria'>
          <img src='./images/malgor.jpg' alt='Logo Inmobiliaria' />
          <h2>INMOBILIARIA MALGOR</h2>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
