import React from "react";
import styled from "styled-components";

import InfoContainer from "./InfoContainer";

const ProjectStyledWrapper = styled.div`
  background-color: white;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

const IframeContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
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
