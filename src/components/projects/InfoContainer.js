import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LogoInmobiliariaWrapper = styled.div`
  a {
    img {
      height: 150px;
    }
  }
`;

const StyledInfoContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledInfoBackground = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.div`
  width: 80%;
`;
const ProjectDetails = styled.div`
  width: 80%;
  ul {
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
