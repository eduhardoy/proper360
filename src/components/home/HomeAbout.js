import React from "react";
import styled from "styled-components";

const HomeSectionAbout = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 70%;
    font-size: 25px;
    font-family: "Lato";
    font-weight: 300;
    text-align: justify;
  }
`;

const HomeAbout = () => {
  return (
    <HomeSectionAbout>
      <h2>QUIENES SOMOS</h2>
      <h3>
      Proper 360 se trata de una plataforma inmobiliaria que apuesta a la innovación tecnológica. Hemos incursionado en el mundo del Streaming 360 considerándolo una increíble herramienta de teletransportación,  para ofrecer un punto de vista privilegiado de cada inmueble a cada interesado. Procuramos a través de los recorridos virtuales, ofrecer a potenciales clientes una experiencia innovadora en primera persona, que con un simple recorrida pueda obtener una visión general de la propiedad.
      <br/>
      <br/>
      Desarrollamos cada proyecto en forma integral desde la toma de imagenes, edición, retoque y programación.  
      </h3>
    </HomeSectionAbout>
  );
};

export default HomeAbout;
