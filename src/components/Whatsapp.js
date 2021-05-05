import React from "react";
import styled from "styled-components";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const WhatsappButton = styled.a`
  z-index: 9999;
  bottom: 70px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 40px;
  position: fixed;
  border-radius: 50px;
  border-width: 0px;
  color: #ffffff;
  background-color: #24d366;
  box-shadow: none;
  cursor: pointer;
  outline: 0;
  vertical-align: baseline;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    width: 50px;
    height: 50px;
    bottom: 40px;
    z-index: 9999;
  }
  svg {
    font-size: 40px;
    @media (max-width: 750px) {
      font-size: 40px;
    }
  }
`;

const Whatsapp = () => {
  return (
    <WhatsappButton
      target='_blank'
      href='https://api.whatsapp.com/send?phone=543794275060text=Hola,%20necesitaria%20agendar%20una%20visita'
    >
      <WhatsAppIcon></WhatsAppIcon>
    </WhatsappButton>
  );
};

export default Whatsapp;
