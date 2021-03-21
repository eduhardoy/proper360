import React from "react";
import styled from "styled-components";

import ProjectHeader from "../components/projects/ProjectHeader";
import InmobiliariaHeader from "../components/Header";
import ContactForm from "../components/projects/ContactForm";

import Footer from "../components/Footer";

const ProjectsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
`;

const ProjectContainer = styled.div`
  min-height: calc(100vh - 200px);
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PropiedadTitle = styled.div``;

const PropiedadView = styled.div`
  min-height: 80vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IframeContainer = styled.div`
  height: 600px;
  width: 300px;
  iframe {
    height: 100%;
    width: 100%;
    border: none;
  }
`;

const PropiedadDetails = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    width: 50%;
  }
`;

const PropiedadContactForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

function PropiedadesProject() {
  return (
    <React.Fragment>
      <ProjectHeader />
      <InmobiliariaHeader />
      <ProjectContainer>
        <PropiedadTitle>
          <h1>TITULO DE LA PROPIEDAD</h1>
        </PropiedadTitle>
        <PropiedadView>
          <IframeContainer>
            <iframe src='https://kuula.co/share/7wW3l/collection/7YhvC?fs=1&vr=1&initload=0&thumbs=4&margin=10&inst=es&info=0&logo=1&logosize=83'></iframe>
          </IframeContainer>
        </PropiedadView>
        <PropiedadDetails>
          <ul>
            <li>Direccion...</li>
            <li>Ambientes...</li>
            <li>Dormitorios...</li>
            <li>Baños...</li>
            <li>Cochera...</li>
            <li>X M2</li>
            <li>Amueblado...</li>
          </ul>
        </PropiedadDetails>

        <PropiedadContactForm>
          <h2>Contacto</h2>
          <ContactForm />
        </PropiedadContactForm>
      </ProjectContainer>
      <Footer />
    </React.Fragment>
  );
}

export default PropiedadesProject;
