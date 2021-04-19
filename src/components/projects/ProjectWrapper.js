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
      <iframe class="ku-embed" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="https://kuula.co/share/collection/7YGFL?fs=1&vr=1&sd=1&thumbs=1&info=1&logo=0"></iframe>
      </IframeContainer>
    </ProjectStyledWrapper>
  );
};

export default ProjectsWrapper;
