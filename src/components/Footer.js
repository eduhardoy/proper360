import React from "react";
import styled from "styled-components";

import {
  FaWhatsapp,
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
`;

const ContactSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style-type: none;
    li {
      display: flex;
      flex-direction: row;
      margin: 15px 0;
      h4{
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
  height: 80px;
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  a {
    color: white;
    text-decoration: none;
    img{
      padding: 10px;
      height: 30px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ContactSection>
        <ul>
        <li>
          <h4><strong>CONTACTANOS</strong></h4>
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
          <a href='https://www.facebook.com/'>
            <FaFacebookF />
          </a>
          <a href='https://www.instagram.com/'>
            <FaInstagram />
          </a>
          <a href='https://web.whatsapp.com/'>
            <FaWhatsapp />
          </a>
        </Social>
      </AboutSection>
      <FooterCredits>
        <a href="">
          <img src="./images/inibot.png" alt=""/>
        </a>
      </FooterCredits>
    </FooterContainer>
  );
}

export default Footer;
