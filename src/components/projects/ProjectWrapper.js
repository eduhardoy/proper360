import React from "react";
import styled from "styled-components";

import InfoContainer from "./InfoContainer";

const ProjectStyledWrapper = styled.div`
  background-color: white;
  padding-top: 60px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 120px);
`;

const IframeContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  iframe {
    border: none;
    width: 95%;
    height: 95%;
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
