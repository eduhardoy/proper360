import React from "react";
import styled from "styled-components";

import LogoProper from "../images/logoproper.png";
import LogoPropiedad from "../images/UNbqDI-covFZlmpCSRuqcEtRERT2kKwpdN1vBpddtMCgq6ItThhZ7ilf9tRWhf2MLEV3SmCEiiFlA1TRRzm4F5F9wyMaFQhO9JO1GwhbygpF-pBHz73FtfhyNpn1bryYm5U.png";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background:yellow;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  height: 100%;
  width: 30%;
  a{
      height: 90%;
      img {
            height: 80%;
  }
  }
`;

const HeaderLogoPropiedadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 30%;
  background: green;
  a{
    height: 90%;
    background: red;
      img{
        height: 80%;
      }
  }
`;

const HomeHeader = () => {
  return (
    <StyledHeader>
      <HeaderLogoContainer>
        <a>
            <img src={LogoProper}/>
        </a>
      </HeaderLogoContainer>
      <HeaderLogoPropiedadContainer>
        <a>
            <img src={LogoPropiedad}/>
        </a>
      </HeaderLogoPropiedadContainer>
    </StyledHeader>
  );
};

export default HomeHeader;