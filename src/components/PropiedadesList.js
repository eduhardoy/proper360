import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "@reach/router";
import Axios from "axios";

import Edificio from "../images/CP-Patio-EdificioAlonso-0081mod.jpg";

const ListContainer = styled.div`
    width: 80%;
    margin: auto;
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
        padding: 0;

        
        li{
            height: 340px;
            width: 400px;
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

/* function usePropiedades(){
    const [propiedades, setPropiedades] = useState([])

    useEffect (()=>{
        fetch("server/propiedades.json")
        .then(response => response.json())
        .then(datos=>{
            setPropiedades(datos)
        })
        
    }, [])
    
    return propiedades
} */

const api = Axios.create({
        baseURL: "http://inibotnea.com:3001"
    })

function PropiedadesList(){

    

    /* const propiedades = usePropiedades() */
    const getPropiedades = async () => {
        try {
            const response = await api.get('/propiedades')
            // console.log(response.data)
            return [response.data, null]
        } catch (error) {
            return [null, error]
        }
    }

    const [propiedades, setPropiedades] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const [data, err] = await getPropiedades()
            console.log(data)
            if (err != null){
                return {
                    //Handle error
                }
            }
            setPropiedades(data)
        }
        fetchData()
    },[setPropiedades]);

    return(
        <React.Fragment>
            
            <ListContainer>
                <ul>
                    {propiedades.map( item =>(
                        <Link to="/project">
                            <img src={item.img}/>
                            <div>
                                
                                <p>{item.id}</p>
                                <p>{item.ambientes} - {item.baños}</p>    
                            </div>
                        </Link>
                    ))}
                   {/*  <li>
                        <Link to="/project">
                            <img src={Edificio}/>
                            <div>
                                <p>DOMICILIO</p>
                                <p>X HABITACIONES - X BAÑOS</p>
                                
                            </div>
                            
                        </Link>
                    </li> */}
                    
                </ul>
            </ListContainer>
        </React.Fragment>
    );
}

export default PropiedadesList;