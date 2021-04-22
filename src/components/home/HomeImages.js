import React from "react";
import styled from "styled-components";

const StyledHomeImages = styled.div`
  margin-top: 100px;
  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    position: relative;
    filter: grayscale(0.7);
    width: calc(97% / 3);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
      width: calc(95% / 2);
  }
  @media (max-width: 600px) {
      width: 100%;
  }
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
      object-fit: cover;
      width: 100%;
    }
  }
`;

const HomeImages = () => {
  return (
    <StyledHomeImages>
      <ImagesWrapper>
        <div>
          <img src='https://live.staticflickr.com/65535/51130892154_ac74eec166_h.jpg' alt='' />
        </div>
        <div>
          <img src='https://live.staticflickr.com/65535/51130890099_83767e8f09_c.jpg' alt='' />
        </div>
        <div>
          <img src='https://live.staticflickr.com/65535/51130890134_e72f1b372d_c.jpg' alt='' />
        </div>
      </ImagesWrapper>
    </StyledHomeImages>
  );
};

export default HomeImages;
