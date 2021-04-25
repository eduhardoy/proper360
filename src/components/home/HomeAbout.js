import React from "react";
import styled from "styled-components";

const HomeSectionAbout = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  h3 {
    width: 60%;
    font-size: 25px;
    font-family: "Lato";
    font-weight: 300;
    text-align: justify;
    @media (max-width: 600px) {
      width: 90%;
      font-size: 16px;
    }
  }
`;

const HomeAbout = () => {
  return (
    <HomeSectionAbout id='about'>
      <h2>QUIENES SOMOS</h2>
      <h3>
        Proper 360 se trata de una plataforma inmobiliaria que apuesta a la
        innovación tecnológica. Hemos incursionado en el mundo del Streaming 360
        considerándolo una increíble herramienta de teletransportación, para
        ofrecer un punto de vista privilegiado de cada inmueble a cada
        interesado. <br /> <br />
        Procuramos a través de los recorridos virtuales, ofrecer a potenciales
        clientes una experiencia innovadora en primera persona, que con un
        simple recorrida pueda obtener una visión general de la propiedad.
        Desarrollamos cada proyecto en forma integral desde la toma de imagenes,
        edición, retoque y programación.
      </h3>
    </HomeSectionAbout>
  );
};

export default HomeAbout;
