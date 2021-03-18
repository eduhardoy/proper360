import React from "react";
import styled from "styled-components";
import {Link} from "@reach/router";

import Edificio from "../images/CP-Patio-EdificioAlonso-0081mod.jpg";

const ListContainer = styled.div`
    width: 80%;
    margin: auto;
    /* background:gray; */
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;

    ul{
        width: 100%;
        height: 100%;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content:center;
        background-color: lightgray;
        padding: 0;

        
        li{
            height: 320px;
            width: 380px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 40px;
            
            a{
                height: auto;
                width: auto;
                text-decoration: none;
                color: black;
                background-color: green;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                
                img{
                    height: auto;
                    width: auto;
                    max-height: 100%;
                    max-width: 100%;
                }
                div{
                    position: absolute; 
                    background-color: white;
                    height: 20%;
                    width:90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    bottom:10px;
                    p{
                        margin: 1px;
                    }
                }
                    
                
            }           
        }
    }
`;

function PropiedadesList(){

    return(
        <React.Fragment>
            <ListContainer>
                <ul>
                    <li>
                        <Link to="/project">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </a>
                    </li>
                    
                    
                </ul>
            </ListContainer>
        </React.Fragment>
    );
}

export default PropiedadesList;