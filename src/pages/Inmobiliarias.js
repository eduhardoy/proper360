import React from "react";
import styled from "styled-components";

import CloseIcon from "@material-ui/icons/Close";
import Footer from "../components/Footer";
import InmobiliariaData from "../components/inmobiliarias/InmobiliariaData";
import PropiedadesList from "../components/propiedades/PropiedadesList";
import LeftSideBar from "../components/LeftSideBar";
import InmobiliariaHeader from "../components/inmobiliarias/InmobiliariaHeader";
import Whatsapp from "../components/Whatsapp";
import HomeHeader from "../components/home/HomeHeader";
import { useDispatch, useSelector } from "react-redux";
import { actionsInmobiliarias } from "../store/actions/inmobiliarias";

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

const ButtonOpenFilter = styled.button`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    outline: none;
    border: none;
    color: white;
    padding: 2px 15px;
    background-color: #44494a;
    border-radius: 5px;
    top: 90px;
    right: 40px;
    height: 40px;
  }
`;

const ButtonCloseFilter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: white;
  outline: none;
  border: none;
  position: fixed;
  z-index: 9999999999;
  top: 0;
  right: 0;
  font-size: 40px;
  width: 40px;
  height: 40px;
  top: 0;
`;

const FilterMenu = styled.div`
  position: fixed;
  z-index: 999999999;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #44494a;
  display: none;
`;

function Inmobiliarias({ inmobiliaria }) {
  const [filtro, setFiltro] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const inmobiliarias = useSelector(state => state.inmobiliarias);

  React.useEffect(() => {
    function fetchPropiedadesByInmobiliaria() {
      dispatch(actionsInmobiliarias.getInmobiliariaWithPropiedades(inmobiliaria));
    }
    fetchPropiedadesByInmobiliaria();
  }, []);

  let inmobiliariaConditional =
    inmobiliarias.result.length > 0 ? inmobiliarias.result[0] : [];
  let headerData = {
    nombreInmobiliaria: inmobiliariaConditional.nombre,
    logoInmobiliaria: inmobiliariaConditional.logo,
    keyInmobiliaria: inmobiliariaConditional._key,
  };
  let propiedades =
    inmobiliarias.result.length > 0 ? inmobiliarias.result[0].propiedades : [];

  const ActiveFilterMenu = () => setFiltro(true);
  const DisableFilterMenu = () => setFiltro(false);

  return (
    <React.Fragment>
      <ButtonCloseFilter
        onClick={DisableFilterMenu}
        style={filtro == true ? { display: "flex" } : { display: "none" }}
      >
        <CloseIcon />
      </ButtonCloseFilter>
      <FilterMenu
        style={filtro == true ? { display: "flex" } : { display: "none" }}
      >
        <LeftSideBar />
      </FilterMenu>
      <HomeHeader />
      <Body>
        <LeftSideBarContainer>
          <LeftSideBar/>
        </LeftSideBarContainer>
        <InmobiliariaContainer>
          <ButtonOpenFilter onClick={ActiveFilterMenu}>
            FILTROS
          </ButtonOpenFilter>
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
