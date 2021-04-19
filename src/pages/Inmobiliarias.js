import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import InmobiliariaData from "../components/inmobiliarias/InmobiliariaData";
import LeftSideBar from "../components/LeftSideBar";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";
import HomeHeader from "../components/home/HomeHeader";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/actions/inmobiliarias";


const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftSideBarContainer = styled.div`
  display: block;
  width: 150px;
  min-height: 100vh;
  background-color: gray;
`;

const InmobiliariaContainer = styled.div`
  width: calc(100vw - 150px);
`;

function Inmobiliarias({ inmobiliaria }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch()

  const inmobiliarias = useSelector(state => state.inmobiliarias)

  React.useEffect(() => {
    function fetchPropiedadesByInmobiliaria() {
      dispatch(actions.getInmobiliariaWithPropiedades(inmobiliaria))
    }
    fetchPropiedadesByInmobiliaria()
  }, [])

  let inmobiliariaConditional = inmobiliarias.result.length > 0 ? inmobiliarias.result[0] : []
  let headerData = {
    nombreInmobiliaria: inmobiliariaConditional.nombre,
    logoInmobiliaria: inmobiliariaConditional.logo,
    keyInmobiliaria: inmobiliariaConditional._key
  }
  return (
    <React.Fragment>
      <HomeHeader />
      <Body>
        <LeftSideBarContainer>
          <LeftSideBar />
        </LeftSideBarContainer>
        <InmobiliariaContainer>
          <Header {...headerData} />
          <InmobiliariaData inmobiliaria={inmobiliariaConditional} />
        </InmobiliariaContainer>
      </Body>
      <Footer />
      <Whatsapp />
    </React.Fragment>
  );
}

export default Inmobiliarias;
