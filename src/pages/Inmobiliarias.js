import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import InmobiliariaData from "../components/inmobiliarias/InmobiliariaData";
import PropiedadesList from "../components/inmobiliarias/PropiedadesList";
import InmobiliariaHeader from "../components/inmobiliarias/InmobiliariaHeader";
import Whatsapp from "../components/Whatsapp";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { actionsInmobiliarias } from "../store/actions/inmobiliarias";



const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const InmobiliariaContainer = styled.div`
  width: calc(100vw);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function Inmobiliarias({ inmobiliaria }) {
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

  return (
    <React.Fragment>
      <Header />
      <Body>
        <InmobiliariaContainer>
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
