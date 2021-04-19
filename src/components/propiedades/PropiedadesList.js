import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";


const ListContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  margin-top: 60px;
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
      @media (max-width: 768px) {
        width: 50%;
      }
      @media (max-width: 425px) {
        width: 100%;
      }`

const Portada = styled.img`
      width: 100%;
      display: inline-flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      height: 45vh;
      object-fit: cover;
      filter: grayscale(80%);`

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
      bottom: 0px;
      p{
        margin: 10px;
      }
      `

function PropiedadesList() {
  return (
    <React.Fragment>
      <ListContainer>
          <PortadaContainer>
            <Portada src="https://live.staticflickr.com/65535/50742357442_6be54c293e_h.jpg" alt=""/>
            <PortadaTitle>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
            </PortadaTitle>
          </PortadaContainer>
          <PortadaContainer>
            <Portada src="https://live.staticflickr.com/65535/50742344907_3e37600442_h.jpg" alt=""/>
            <PortadaTitle>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
            </PortadaTitle>
          </PortadaContainer>
          <PortadaContainer>
            <Portada src="https://files.kuula.io/5fc0-1caa-5d46-7924/01-cover.jpg?ck=814831" alt=""/>
            <PortadaTitle>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
            </PortadaTitle>
          </PortadaContainer>
          <PortadaContainer>
            <Portada src="https://i.pinimg.com/564x/e9/06/36/e9063662508b06eaae21e1e5b8febff8.jpg" alt=""/>
            <PortadaTitle>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
            </PortadaTitle>
          </PortadaContainer>
          <PortadaContainer>
            <Portada src="https://live.staticflickr.com/65535/51107310353_1da0ddb7b9_h.jpg" alt=""/>
            <PortadaTitle>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
            </PortadaTitle>
          </PortadaContainer>
          
      </ListContainer>
    </React.Fragment>
  );
}

export default PropiedadesList;
