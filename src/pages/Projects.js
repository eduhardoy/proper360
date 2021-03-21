import React from "react";
import styled from "styled-components";

import ContactForm from "../components/projects/ContactForm";
import Footer from "../components/Footer";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectWrapper from "../components/projects/ProjectWrapper";

const StyledProjects = styled.div``;

const Projects = () => {
  return (
    <StyledProjects>
      <ProjectHeader />
      <ProjectWrapper></ProjectWrapper>
      <ContactForm />
      <Footer />
    </StyledProjects>
  );
};

export default Projects;
