import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    width: 80%;
    margin: auto;
    background:red;
    display: flex;
    flex-wrap: wrap;

    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        li{
            div{

                div{

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
                        <a href="#">
                            <div>
                                <div>
                                    hola
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div>
                                <div>

                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div>
                                <div>

                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </ListContainer>
        </React.Fragment>
    );
}

export default PropiedadesList;