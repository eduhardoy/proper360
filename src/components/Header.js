import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledHeader = styled.header`
  height: 150px;
  width: 100%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      height: 100%;
      width: 100%;
      img {
        height: auto;
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to='/inmobiliaria'>
          <img src='./images/inalto.png' alt='Logo Inmobiliaria' />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
