import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LogoInmobiliariaWrapper = styled.div`
  padding: 10px;
  a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    text-align: center;
    img {
      width: 150px;
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
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
`;

const ProjectDetails = styled.div`
  width: 95%;
  height: auto;
  ul {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-decoration: none;
    list-style-type: none;
    li {
      padding: 5px;
      font-weight: 300;
    }
  }
`;

const StyledProjectsTitle = styled.div`
  text-align: center;
  font-size: 28px;
  padding: 10px;
  margin: 0px;
  font-weight: 400;
  text-transform: uppercase;
  h2{ 
  font-size: 28px;
    margin: 0;
  }
`;

const InfoContainer = ({ project }) => {
  console.log(project)
  return (
    <StyledInfoContainer>
      <StyledInfoBackground>
        <LogoInmobiliariaWrapper>
          <Link to={`/inmobiliaria/${project.inmobiliaria._key}`}>
            <img src={project.inmobiliaria.logo} alt='Logo Inmobilria Forte' />
            <p>VOLVER A INMOBILIARIA</p>
          </Link>
        </LogoInmobiliariaWrapper>
        <StyledProjectsTitle>
          <h2>PROPER 360°: {project.direccion}</h2>
      </StyledProjectsTitle>
        <ProjectDetails>
          <ul>
            <li>Barrio/Zona: {project.direccion}</li>
            <li>Ambientes: {project.ambientes}</li>
            <li>Habitaciones: {project.habitaciones}</li>
            <li>Baños: {project.banos}</li>
            <li>Extras: {project.extras}</li>
            {/* <li>Cochera: </li> */}
            {/* <li>Metros cuadrados (m²):</li> */}
            {/* <li>Amueblado:</li> */}
          </ul>
        </ProjectDetails>
      </StyledInfoBackground>
    </StyledInfoContainer>
  );
};

export default InfoContainer;
