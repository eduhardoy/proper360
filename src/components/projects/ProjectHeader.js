import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledProjectHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  width: 100%;
  height: 80px;
`;

const HeaderImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  height: 100%;
  width: 100%;
  a {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 75%;
    }
  }
`;

const ProjectHeader = () => {
  return (
    <StyledProjectHeader>
      <HeaderImageContainer>
        <Link to='/'>
          <img src='./images/logo.png' alt='Logo proper' />
        </Link>
      </HeaderImageContainer>
    </StyledProjectHeader>
  );
};

export default ProjectHeader;
