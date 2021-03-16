import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";


const LeftSideBarContainer = styled.div`
    width: 385px;
    height: 100vh;
    background-color: gray; 
`;

const InmobiliariaContainer = styled.div`

`;

function Inmobiliarias(){

    return(
        <React.Fragment>
            <LeftSideBarContainer>
                <LeftSideBar/>
            </LeftSideBarContainer>
            
            <Footer/>
        </React.Fragment>
    );
}

export default Inmobiliarias;