import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import InmobiliariaData from "../components/InmobiliariaData";
import LeftSideBar from "../components/LeftSideBar";
import InmobiliariaHeader from "../components/InmobiliariaHeader";
import PropiedadesList from "../components/PropiedadesList";

const Body = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    
`;

const LeftSideBarContainer = styled.div`
    display: block;
    width: 385px;
    min-height: 100vh;
    background-color: gray; 
`;

const InmobiliariaContainer = styled.div`
    width: calc(100vw - 385px);
`;

function Propiedades(){

    return(
        <React.Fragment>
            <Body>
                <LeftSideBarContainer>
                    <LeftSideBar/>
                </LeftSideBarContainer>
                <InmobiliariaContainer>
                    <InmobiliariaHeader/>
                    <PropiedadesList/>
                </InmobiliariaContainer>
            </Body>
            <Footer/>
        </React.Fragment>
    );
}

export default Propiedades;