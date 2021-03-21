import React from "react";
import styled from "styled-components";

import InfoContainer from "./InfoContainer";

const ProjectStyledWrapper = styled.div`
  background-color: white;
  margin-top: 60px;
  margin-bottom: 80px;
  display: flex;
  width: 100%;
  height: calc(100vh - 120px);
`;

const IframeContainer = styled.div`
  width: 60%;
  iframe {
    border: none;
    width: 90%;
    height: 90%;
  }
`;

const ProjectsWrapper = () => {
  return (
    <ProjectStyledWrapper>
      <InfoContainer />
      <IframeContainer>
        <iframe src='https://kuula.co/share/7wW3l/collection/7YhvC?fs=1&vr=1&initload=0&thumbs=4&margin=10&inst=es&info=0&logo=1&logosize=83'></iframe>
      </IframeContainer>
    </ProjectStyledWrapper>
  );
};

export default ProjectsWrapper;
