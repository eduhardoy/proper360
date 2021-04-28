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
import ListIcon from "@material-ui/icons/List";

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
    background-color: black;
    border-radius: 5px;
    top: 100px;
    right: 20px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    svg {
      width: 40px;
    }
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

  const inmobiliariaData = useSelector(state => state.inmobiliarias.resultOne);

  React.useEffect(() => {
    function fetchPropiedadesByInmobiliaria() {
      dispatch(
        actionsInmobiliarias.getInmobiliariaWithPropiedades(inmobiliaria)
      );
    }
    fetchPropiedadesByInmobiliaria();
  }, []);

  let headerData = {
    nombreInmobiliaria: inmobiliariaData.nombre,
    logoInmobiliaria: inmobiliariaData.logo,
    keyInmobiliaria: inmobiliariaData._key,
  };
  let propiedades = inmobiliariaData.propiedades;

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
        <LeftSideBar closeMenu={DisableFilterMenu} />
      </FilterMenu>
      <HomeHeader />
      <Body>
        <LeftSideBarContainer>
          <LeftSideBar />
        </LeftSideBarContainer>
        <InmobiliariaContainer>
          <ButtonOpenFilter onClick={ActiveFilterMenu}>
            <ListIcon />
          </ButtonOpenFilter>
          <InmobiliariaHeader {...headerData} />
          <InmobiliariaData inmobiliaria={inmobiliariaData} />
          {propiedades != null && <PropiedadesList propiedades={propiedades} />}
        </InmobiliariaContainer>
      </Body>
      <Footer />
      <Whatsapp />
    </React.Fragment>
  );
}

export default Inmobiliarias;
