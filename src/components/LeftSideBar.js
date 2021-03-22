import React from "react";
import styled from "styled-components";
import {Link} from "@reach/router";

import Logo from "../images/logoproper_w.png";

const LeftSideBarContainer = styled.aside`
    width: 100%;
    height: 100%;
    background: #6C7270;

    
`;

const SideBarLogo = styled.div`
    padding-top: 70px;
    width: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        height: auto;
        width: 80%;
       img{
            height: Auto;
            width: 100%;
        } 
    }
    
`;

const FilterGroups = styled.section`
    margin-top: 100px;
    dl{
        width: 100%;
        margin-top: 60px;
        margin-left: 20px;
        dt{
            display: flex;
            margin-left: 40px;
            margin-bottom: 10px;
            font-weight: bold;
            color: white;
        }
        dd{
            max-width: 100%;
            a{
                text-decoration: none;
                color: white;
                background-image: linear-gradient(currentColor, currentColor);
                background-position: 0% 100%;
                background-repeat: no-repeat;
                background-size: 0% 1px;
                transition: background-size .3s;
                :hover, :focus{
                    background-size: 100% 1px;
                }
                span{

                }
            }
        }
    }
    
`;


function LeftSideBar(){

    return(
        
            <LeftSideBarContainer>
                <SideBarLogo>
                    <a href="/">
                        <img src={Logo} alt="Logo proper"/>
                    </a> 
                </SideBarLogo>
                <FilterGroups>
                    <dl>
                        <dt>ALQUILERES</dt>
                        <dd>
                            <Link to="/propiedades">
                                <span>Departamenos</span> 
                            </Link>
                        </dd>
                        <dd>
                            <Link to="/propiedades">
                                <span>Casas</span> 
                            </Link>
                        </dd>
                        <dd>
                            <Link to="/propiedades">
                                <span>Locales Comerciales</span> 
                            </Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>VENTAS</dt>
                        <dd>
                            <Link to="/propiedades">
                                <span>Departamenos</span> 
                            </Link>
                        </dd>
                        <dd>
                            <Link to="/propiedades">
                                <span>Casas</span> 
                            </Link>
                        </dd>
                        <dd>
                            <Link to="/propiedades">
                                <span>Locales Comerciales</span> 
                            </Link>
                        </dd>
                    </dl>  
                </FilterGroups>
            </LeftSideBarContainer>
        
    );
}

export default LeftSideBar;