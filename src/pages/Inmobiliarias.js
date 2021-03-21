import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import InmobiliariaData from "../components/InmobiliariaData";
import LeftSideBar from "../components/LeftSideBar";
import InmobiliariaHeader from "../components/InmobiliariaHeader";

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftSideBarContainer = styled.div`
  display: block;
  width: 300px;
  min-height: 100vh;
  background-color: gray;
`;

const InmobiliariaContainer = styled.div`
  width: calc(100vw - 300px);
`;

function Inmobiliarias() {
  return (
    <React.Fragment>
      <Body>
        <LeftSideBarContainer>
          <LeftSideBar />
        </LeftSideBarContainer>
        <InmobiliariaContainer>
          <InmobiliariaHeader />
          <InmobiliariaData />
        </InmobiliariaContainer>
      </Body>
      <Footer />
    </React.Fragment>
  );
}

export default Inmobiliarias;
