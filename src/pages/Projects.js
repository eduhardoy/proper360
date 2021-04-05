import React from "react";
import styled from "styled-components";

import ContactForm from "../components/projects/ContactForm";
import Footer from "../components/Footer";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectWrapper from "../components/projects/ProjectWrapper";

const StyledProjectsTitle = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 30px;
  margin: 0px;
  font-weight: 400;
`;

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProjectHeader />
      <StyledProjectsTitle>
        Hosteria Caballo Campana - Jujuy 3200
      </StyledProjectsTitle>
      <ProjectWrapper></ProjectWrapper>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Projects;
