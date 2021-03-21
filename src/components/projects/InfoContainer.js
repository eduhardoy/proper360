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
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProjectTitle = styled.div``;
const ProjectDetails = styled.div``;

const InfoContainer = () => {
  return (
    <StyledInfoContainer>
      <LogoInmobiliariaWrapper>
        <Link to='/inmobiliaria'>
          <img src='./images/inalto.png' alt='Logo Inmobilria Forte' />
        </Link>
      </LogoInmobiliariaWrapper>
      <ProjectTitle>
        <h1>TITULO DE LA PROPIEDAD</h1>
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
    </StyledInfoContainer>
  );
};

export default InfoContainer;
