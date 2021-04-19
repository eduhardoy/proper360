import React from "react";
import styled from "styled-components";

import InfoContainer from "./InfoContainer";

const ProjectStyledWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
`;

const IframeContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  iframe {
    border: none;
    width: 90%;
    height: 90%;
  }
`;

const ProjectsWrapper = ({ project }) => {
  return (
    <ProjectStyledWrapper>
      <InfoContainer project={project} />
      <IframeContainer>
        <iframe src={project.tour}></iframe>
      </IframeContainer>
    </ProjectStyledWrapper>
  );
};

export default ProjectsWrapper;
