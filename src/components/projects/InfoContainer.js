import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LogoInmobiliariaWrapper = styled.div`
  padding: 10px;
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
  justify-content: center;
  flex-direction: column;
`;

const StyledInfoBackground = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
`;

const ProjectDetails = styled.div`
  width: 95%;
  ul {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    list-style-type: none;
    li {
      padding: 5px;
      font-weight: 300;
    }
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
        <ProjectDetails>
          <ul>
            <li>Direccion:</li>
            <li>Ambientes:</li>
            <li>Dormitorios:</li>
            <li>Baños:</li>
            <li>Cochera:</li>
            <li>Metros cuadrados:</li>
            <li>Amueblado:</li>
          </ul>
        </ProjectDetails>
      </StyledInfoBackground>
    </StyledInfoContainer>
  );
};

export default InfoContainer;
