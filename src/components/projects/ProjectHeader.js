import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

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
  width: 100%;
  a {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 90%;
    }
  }
`;

const HomeHeader = () => {
  return (
    <StyledHomeHeader>
      <HeaderImageContainer>
        <Link to='/'>
          <img src='./images/logo.png' alt='Logo proper' />
        </Link>
      </HeaderImageContainer>
    </StyledHomeHeader>
  );
};

export default HomeHeader;
