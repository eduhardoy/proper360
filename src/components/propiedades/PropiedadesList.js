import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import PropiedadesFiltro from "./PropiedadesFiltro";

const ListContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  margin-top: 40px;
`;

const PortadaContainer = styled.div`
  box-sizing: border-box;
  width: calc(100% / 3);
  padding: 5px;
  display: flex;
  text-align: center;
  flex-direction: column;
  position: relative;
  & :hover {
    filter: none;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: calc(95% / 2);
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Portada = styled.img`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 45vh;
  object-fit: cover;
  filter: grayscale(80%);
`;

const FiltroWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PortadaTitle = styled.div`
  width: calc(100% - 10px);
  font-size: 22px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  position: absolute;
  bottom: 9px;
  p {
    margin: 10px;
  }
`;

function PropiedadesList({ propiedades }) {
  return (
    <React.Fragment>
      <FiltroWrapper>
        <PropiedadesFiltro />
      </FiltroWrapper>
      <ListContainer>
        {propiedades.map(data => (
          <PortadaContainer>
            <Link to={`/project/${data._key}`}>
              <Portada src={data.logo} alt='' />
              <PortadaTitle>
                <p>{data.nombre}</p>
                <p>
                  {data.habitaciones} HABITACIONES - {data.banos} BAÑOS
                </p>
              </PortadaTitle>
            </Link>
          </PortadaContainer>
        ))}
      </ListContainer>
    </React.Fragment>
  );
}

export default PropiedadesList;
