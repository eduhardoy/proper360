import React from "react";
import styled from "styled-components";
import SubscribeForm from "./SubscribeForm";

const HomeStyledHero = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background-color: gray;
  background-image: url("images/banner.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 80px;
`;

const HeroForm = styled.div`
  height: 70%;
  max-height: 500px;
  width: 30%;
  margin-right: 200px;
  bottom: 100px;
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
