import React from "react";
import styled from "styled-components";

import ContactForm from "../components/projects/ContactForm";
import Footer from "../components/Footer";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectWrapper from "../components/projects/ProjectWrapper";

const StyledProjects = styled.div`
  p {
    text-align: center;
    font-size: 30px;
    padding: 30px;
    margin: 0px;
    font-weight: 400;
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <ProjectHeader />
      <p>Hosteria Caballo Campana - Jujuy 3200</p>
      <ProjectWrapper></ProjectWrapper>
      <ContactForm />
      <Footer />
    </StyledProjects>
  );
};

export default Projects;
