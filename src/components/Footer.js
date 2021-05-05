import React from "react";
import styled from "styled-components";

import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  /*   height: 200px; */
  background-color: #171717;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Lato", "Open Sans", sans-serif;
  padding-top: 20px;
  margin-top: 80px;
  @media (max-width: 750px) {
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ContactSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin: 10px;
    width: 60%;
  }
  ul {
    list-style-type: none;
    margin: 0px;
    @media (max-width: 600px) {
      padding: 0;
    }
    li {
      display: flex;
      flex-direction: row;
      margin: 15px 0;
      @media (max-width: 600px) {
        justify-content: center;
      }
      h4 {
        margin: 10px;
        text-align: center;
      }
      p {
        margin: 0;
        margin-left: 10px;
      }
    }
  }
`;

const AboutSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    margin: 20px;
    width: 60%;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h4 {
    margin: 0;
  }
  p {
    margin-top: 5px;
  }
`;

const Social = styled.div`
  /* margin-top:5px; */
  display: flex;

  a {
    color: white;
    /* height: 25px;
        width: 25px; */
    margin: 0 5px;
    font-size: 1.4em;
    :hover {
      color: gray;
    }
  }
`;

const FooterCredits = styled.div`
  height: 60px;
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  a {
    color: white;
    text-decoration: none;
    font-size: 10px;
    img {
      padding: 10px;
      height: 30px;
      @media (max-width: 600px) {
        height: 20px;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterContainer id='contact'>
      <ContactSection>
        <ul>
          <li>
            <h4>
              <strong>CONTACTANOS</strong>
            </h4>
          </li>
          <li>
            <FaPhoneAlt />
            <p>3794-275060</p>
          </li>
          <li>
            <FaMailBulk />
            <p>proper360inmobiliario@gmail.com</p>
          </li>
        </ul>
      </ContactSection>
      <AboutSection>
        <About>
          <h4>Proper360</h4>
          <p>
            Venta y alquiler de propiedades
            <br /> con recorrido 360°
          </p>
        </About>
        <Social>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/Proper-360-108956058019621/'
          >
            <FaFacebookF />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://instagram.com/proper360inmobiliario?igshid=1cwibalvlxmib'
          >
            <FaInstagram />
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'>
            <FaLinkedin />
          </a>
        </Social>
      </AboutSection>
      <FooterCredits>
        <a target='_blank' rel='noreferrer' href='https://www.inibot.net'>
          © 2021 - INIBOT
        </a>
      </FooterCredits>
    </FooterContainer>
  );
}

export default Footer;
