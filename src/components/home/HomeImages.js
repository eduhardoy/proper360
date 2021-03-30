import React from "react";
import styled from "styled-components";

const StyledHomeImages = styled.div`
  margin-top: 100px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  div {
    position: relative;
    filter: grayscale(0.7);
    width: calc(99% / 3);
    max-height: 500px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      filter: none;
    }
    p {
      width: calc(100% - 10px);
      font-size: 25px;
      font-family: "Lato", sans-serif;
      font-weight: 300;
      text-align: center;
      margin: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.7);
      text-transform: uppercase;
      position: absolute;
      bottom: 30px;
    }
    img {
      width: 100%;
    }
  }
`;

const HomeImages = () => {
  return (
    <StyledHomeImages>
      <ImagesWrapper>
        <div>
          <img src='./images/selecciona.jpeg' alt='' />
        </div>
        <div>
          <img src='./images/busca.jpg' alt='' />
        </div>
        <div>
          <img src='./images/alquila.jpg' alt='' />
        </div>
      </ImagesWrapper>
    </StyledHomeImages>
  );
};

export default HomeImages;
