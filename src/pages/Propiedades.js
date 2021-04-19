import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";
import Header from "../components/Header";
import PropiedadesList from "../components/propiedades/PropiedadesList";
import Whatsapp from "../components/Whatsapp";
import HomeHeader from "../components/home/HomeHeader";

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftSideBarContainer = styled.div`
  display: block;
  width: 200px;
  min-height: 100vh;
  background-color: gray;
`;

const InmobiliariaContainer = styled.div`
  width: calc(100vw - 200px);
`;

function Propiedades() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <HomeHeader/>
      <Body>
        <LeftSideBarContainer>
          <LeftSideBar />
        </LeftSideBarContainer>
        <InmobiliariaContainer>
          <Header />
          <PropiedadesList />
        </InmobiliariaContainer>
      </Body>
      <Footer />
      <Whatsapp/>
    </React.Fragment>
  );
}

export default Propiedades;
