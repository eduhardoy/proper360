import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LogoInmobiliariaWrapper = styled.div`
  padding-top: 20px;
  a {
    img {
      height: 150px;
    }
  }
`;

const StyledInfoContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledInfoBackground = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e8e8e8;
  border-radius: 20px;
  box-shadow: 0 0 14px 0 #7a7a7a;
`;

const ProjectTitle = styled.div`
  width: 80%;
  padding-top: 20px;
`;
const ProjectDetails = styled.div`
  width: 80%;
  ul {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InfoContainer = () => {
  return (
    <StyledInfoContainer>
      <StyledInfoBackground>
        <LogoInmobiliariaWrapper>
          <Link to='/inmobiliaria'>
            <img src='./images/inalto.png' alt='Logo Inmobilria Forte' />
          </Link>
        </LogoInmobiliariaWrapper>
        <ProjectTitle>
          <h2>Hosteria Caballo Campana - Jujuy 3200</h2>
        </ProjectTitle>
        <ProjectDetails>
          <ul>
            <li>Direccion...</li>
            <li>Ambientes...</li>
            <li>Dormitorios...</li>
            <li>Baños...</li>
            <li>Cochera...</li>
            <li>X M2</li>
            <li>Amueblado...</li>
          </ul>
        </ProjectDetails>
      </StyledInfoBackground>
    </StyledInfoContainer>
  );
};

export default InfoContainer;
