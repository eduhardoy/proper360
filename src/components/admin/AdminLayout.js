import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import HomeIcon from "@material-ui/icons/Home";
import AdminLeftSide from "./AdminLeftSide";

const alturaHeader = "64px";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const StyledHeader = styled.header`
  width: 100vw;
  height: 64px;
  z-index: 9999;
  position: sticky;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }

  & h2 {
    margin: 0;
    font-size: 35px;
    color: white;
    font-weight: 300;
  }
`;

const MenuButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 64px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  svg {
    font-size: 35px;
  }
`;

const HomeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 64px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  svg {
    font-size: 35px;
  }
`;

const StyledBody = styled.div`
  display: flex;
  min-width: 100%;
  position: relative;
`;

const RightSide = styled.div`
  position: relative;
  height: calc(100vh - ${alturaHeader});
  width: 100%;
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <MenuButton></MenuButton>
        <h2>PROPER 360</h2>
        <HomeButton>
          <Link to='/'>
            <HomeIcon />
          </Link>
        </HomeButton>
      </StyledHeader>
      <StyledBody>
        <RightSide>{children}</RightSide>
      </StyledBody>
      <AdminLeftSide />
    </StyledContainer>
  );
};

export default Layout;
