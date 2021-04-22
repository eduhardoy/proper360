import React from "react";
import styled from "styled-components";

const InmobiliariaData = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin: auto;
  margin-bottom: 50px;
  text-align: justify;
  h2{
    margin: 10px;
  }
  p{
    margin: 10px;
    font-size: 20px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
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
        <p>
          {inmobiliaria.descripcion}
        </p>
        <br />
        <h2>DATOS DE CONTACTO</h2>
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
