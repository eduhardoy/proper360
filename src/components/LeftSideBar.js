import React from "react";
import styled from "styled-components";

import Logo from "../images/logoproper.png";

const LeftSideBarContainer = styled.aside`
    width: 100%;
    height: 100%;
    background-color: #F1F1F1;
    
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
        }
        dd{
            max-width: 100%;
            a{
                text-decoration: none;
                color: black;
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
                            <a href="#">
                                <span>Departamenos</span> 
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>Casas</span> 
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>Locales Comerciales</span> 
                            </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>VENTAS</dt>
                        <dd>
                            <a href="#">
                                <span>Departamenos</span> 
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>Casas</span> 
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <span>Locales Comerciales</span> 
                            </a>
                        </dd>
                    </dl>  
                </FilterGroups>
            </LeftSideBarContainer>
        
    );
}

export default LeftSideBar;