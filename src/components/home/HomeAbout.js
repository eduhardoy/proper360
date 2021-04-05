import React from "react";
import styled from "styled-components";

const HomeSectionAbout = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 80%;
    font-family: "Lato";
  }
`;

const HomeAbout = () => {
  return (
    <HomeSectionAbout>
      <h2>QUIENES SOMOS</h2>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h3>
    </HomeSectionAbout>
  );
};

export default HomeAbout;
