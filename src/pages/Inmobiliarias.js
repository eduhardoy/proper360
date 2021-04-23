import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import InmobiliariaData from "../components/inmobiliarias/InmobiliariaData";
import PropiedadesList from "../components/propiedades/PropiedadesList";
import LeftSideBar from "../components/LeftSideBar";
import InmobiliariaHeader from "../components/inmobiliarias/InmobiliariaHeader";
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
  width: 180px;
  min-height: 100vh;
  background-color: gray;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const InmobiliariaContainer = styled.div`
  width: calc(100vw - 180px);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const FilterMenu = styled.div`
position: fixed;
z-index: 999999999;
top: 0;
height: 100vh;
width: 100vw;
background-color: #44494A;
display: none;
@media (max-width: 1024px) {
  display: flex;
  }
`

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
  let propiedades = inmobiliarias.result.length > 0 ? inmobiliarias.result[0].propiedades : []
  return (
    <React.Fragment>
      <FilterMenu>
        <LeftSideBar />
      </FilterMenu>
      <HomeHeader />
      <Body>
        <LeftSideBarContainer>
          <LeftSideBar />
        </LeftSideBarContainer>
        <InmobiliariaContainer>
          <InmobiliariaHeader {...headerData} />
          <InmobiliariaData inmobiliaria={inmobiliariaConditional} />
          <PropiedadesList propiedades={propiedades} />
        </InmobiliariaContainer>
      </Body>
      <Footer />
      <Whatsapp />
    </React.Fragment>
  );
}

export default Inmobiliarias;
