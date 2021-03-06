import React from "react";
import styled from "styled-components";
import SubscribeForm from "./SubscribeForm";

const HomeStyledHero = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background-color: gray;
  background-image: url("https://live.staticflickr.com/65535/51162644248_86d25a4d61_b.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 80px;
  @media (max-width: 750px) {
    margin-bottom: 0px;
  }
`;

const HeroForm = styled.div`
  height: 70%;
  max-height: 500px;
  width: 30%;
  margin-right: 200px;
  bottom: 100px;
  min-height: 350px;
  @media (max-width: 1250px) {
    width: 40%;
  }
  @media (max-width: 950px) {
    width: 50%;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 65%;
    margin-right: 0px;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 60%;
    margin-right: 0px;
  }
`;

const HomeHero = () => {
  return (
    <HomeStyledHero>
      <HeroForm>
        <SubscribeForm />
      </HeroForm>
    </HomeStyledHero>
  );
};

export default HomeHero;
