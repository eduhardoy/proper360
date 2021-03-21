import React from "react";
import styled from "styled-components";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectWrapper from "../components/projects/ProjectWrapper";

const StyledProjects = styled.div``;

const Projects = () => {
  return (
    <StyledProjects>
      <ProjectHeader />
      <ProjectWrapper></ProjectWrapper>
    </StyledProjects>
  );
};

export default Projects;
