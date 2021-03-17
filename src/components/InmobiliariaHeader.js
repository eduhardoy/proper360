import React from "react";
import styled from "styled-components";

import Logo from "../images/UNbqDI-covFZlmpCSRuqcEtRERT2kKwpdN1vBpddtMCgq6ItThhZ7ilf9tRWhf2MLEV3SmCEiiFlA1TRRzm4F5F9wyMaFQhO9JO1GwhbygpF-pBHz73FtfhyNpn1bryYm5U.png";

const StyledHeader = styled.header`
    height:280px;
    width: 80%;
    margin: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    div{
        height: 150px;
        width: 150px;
       /*  background: lightblue; */
        display:flex;
        justify-content: center;
        align-items: center;
        a{
            height: 100%;
            width: 100%;
            img{
                height: auto;
                width:100%;
            }
        }
    }
`;

function InmobiliariaHeader(){

    return(
        <StyledHeader>
            <div>
                <a>
                    <img src={Logo} alt="Logo Inmobiliaria"/>
                </a>
            </div>
        </StyledHeader>
    );
}

export default InmobiliariaHeader;