import React from "react";
import styled from "styled-components";

const InmobiliariaData = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  @media (max-width: 750px) {
    width: 90%;
  }
  h2 {
    margin: 10px;
  }
  p {
    text-align: justify;
    margin: 10px;
    font-size: 20px;
    @media (max-width: 750px) {
      font-size: 15px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 10px;
      text-align: center;
      font-size: 22px;
      padding: 5px;
    }
  }
`;

function Inmobiliaria({ inmobiliaria }) {
  return (
    <React.Fragment>
      <InmobiliariaData>
        <p>{inmobiliaria.descripcion}</p>
        <br />
        <h2>CONTACTO</h2>
        <ul>
          <li>{inmobiliaria.direccion}</li>
          <li>{inmobiliaria.telefono}</li>
          <li>{inmobiliaria.email}</li>
        </ul>
      </InmobiliariaData>
    </React.Fragment>
  );
}

export default Inmobiliaria;
