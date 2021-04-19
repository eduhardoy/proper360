import React from "react";
import styled from "styled-components";

const InmobiliariaData = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  height: 100%;
  margin: auto;
  margin-bottom: 50px;
  text-align: justify;
  p{
    font-size: 20px;
  }
  ul{
    width: 60%;
    list-style: none;
    li{
      font-size: 22px;
      padding: 5px;
    }
  }
`;

function Inmobiliaria() {
  return (
    <React.Fragment>
      <InmobiliariaData>
        <h2>SOBRE INMOBILIARIA</h2>
        <p>
        Somos una empresa familiar que garantiza un trato al cliente sensato, integro, respetetuoso y por sobre todo honesto. 
Buscamos brindar respuestas a los cambios del mercado con agilidad y sobre todo creatividad, adaptándonos a las nuevas tecnologías.  Actualmente nuestro director, el Martillero Publico Ricardo Maria Malgor, profesional matriculado de la ciudad de Corrientes, se encuentra acompañado por la Abogada, Ada Margarita Aguirre Martinez, y también, por su hijo, el Contador Publico Nacional, Ricardo Maria Malgor (h).
        </p>
        <br/>
        <h2>DATOS DE CONTACTO</h2>
        <ul>
          <li>Domicilio:</li>
          <li>Telefono:</li>
          <li>Email:</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </InmobiliariaData>
    </React.Fragment>
  );
}

export default Inmobiliaria;
