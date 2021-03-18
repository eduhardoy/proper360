import React from "react";
import styled from "styled-components";

import Header from "../components/ProjectHeader";
import InmobiliariaHeader from "../components/InmobiliariaHeader";
import ContactForm from "../components/ContactForm";

import Footer from "../components/Footer";

const ProjectsHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
`;

const ProjectContainer = styled.div`
    min-height: calc( 100vh - 200px);
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PropiedadTitle = styled.div`
    /* background: pink; */
`;

const PropiedadView = styled.div`
    /* height: 100%; */
    min-height: 80vh;
    width: 90%;
    /* background: lightblue; */
    display:flex;
    align-items: center;
    justify-content: center;
`;

const IframeContainer = styled.div`
    height: 600px;
    width: 90%;
    /* background: lightgray; */
    iframe{
        height: 100%;
        width: 100%;
        border: none;
    }
`;

const PropiedadDetails = styled.section`
    /* background: lightgreen; */
    width: 100%;
    display: flex;
    justify-content: center;

    ul{
        /* background-color: gray; */
        width: 50%;
       
    }

`;

const PropiedadContactForm = styled.div`
    /* background:red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;

function PropiedadesProject (){
    return(
        <React.Fragment>
            <Header/>
            <InmobiliariaHeader/>
            <ProjectContainer>
                <PropiedadTitle>
                   <h1>TITULO DE LA PROPIEDAD</h1>
                </PropiedadTitle>
                <PropiedadDetails>
                    <ul>
                        <li>Direccion...</li>
                        <li>Hambientes...</li>
                        <li>Habitaciones...</li>
                        <li>Baños...</li>
                        <li>Cochera...</li>
                        <li>Servicios...</li>
                        <li>Amueblado...</li>
                    </ul>
                </PropiedadDetails>
                <PropiedadView>
                    <IframeContainer>
                        <iframe src="https://kuula.co/share/7wW3l/collection/7YhvC?fs=1&vr=1&initload=0&thumbs=4&margin=10&inst=es&info=0&logo=1&logosize=83"></iframe>
                    </IframeContainer>
                </PropiedadView>
                
                <PropiedadContactForm>
                    <h2>Contacto</h2>
                   <ContactForm/>
                </PropiedadContactForm>
            </ProjectContainer>
            <Footer/>
        </React.Fragment>
    );
}

export default PropiedadesProject;