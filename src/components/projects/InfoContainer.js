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
  @media (max-width: 1024px) {
    width: 90%;
  }
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
  display: flex;
  justify-content: center;
  ul {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-decoration: none;
    list-style-type: none;
    padding: 20px;
    @media (max-width: 1300px) {
      padding: 10px;
      align-items: center;
      justify-content: center;
    }
    li {
      padding: 5px;
      font-weight: 300;
      display: flex;
      text-align: center;
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
  h2 {
    font-size: 28px;
    margin: 0;
    @media (max-width: 1300px) {
      font-size: 22px;
    }
  }
`;

const InfoContainer = ({ project }) => {
  console.log(project);
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
          <h2>PROPER 360°: {project.nombre}</h2>
        </StyledProjectsTitle>
        <ProjectDetails>
          <ul>
            <li>Barrio/Zona: {project.barrio}</li>
            <li>Ambientes: {project.ambientes}</li>
            <li>Baños: {project.banos}</li>
            <li>Habitaciones: {project.habitaciones}</li>
            <br />

            <li>
              <strong>Alquiler inicial/Monto: ${project.precio}</strong>
            </li>
          </ul>
        </ProjectDetails>
      </StyledInfoBackground>
    </StyledInfoContainer>
  );
};

export default InfoContainer;
