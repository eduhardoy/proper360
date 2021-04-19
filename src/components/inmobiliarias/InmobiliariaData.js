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

function Inmobiliaria({ inmobiliaria }) {
  return (
    <React.Fragment>
      <InmobiliariaData>
        <h2>SOBRE INMOBILIARIA</h2>
        <p>
          {inmobiliaria.descripcion}
        </p>
        <br />
        <h2>DATOS DE CONTACTO</h2>
        <ul>
          <li>Domicilio: {inmobiliaria.direccion}</li>
          <li>Telefono: {inmobiliaria.telefono}</li>
          <li>Email: {inmobiliaria.email}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </InmobiliariaData>
    </React.Fragment>
  );
}

export default Inmobiliaria;
