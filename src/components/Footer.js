import React from "react";
import styled from "styled-components";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
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
  height: 40px;
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    :hover {
      color: #bfbfbf;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ContactSection>
        <ul>
          <li>
            <FaMapMarkerAlt />
            <p>Moreno 1006 - Corrientes, Capital</p>
          </li>
          <li>
            <FaPhoneAlt />
            <p>3794-666666</p>
          </li>
          <li>
            <FaMailBulk />
            <p>proper360@gmail.com</p>
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
        <p>
          Desarrollado por <a href='https://inibotnea.com/'>inibiotnea.com©</a>
        </p>
      </FooterCredits>
    </FooterContainer>
  );
}

export default Footer;
