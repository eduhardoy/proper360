import React from "react";
import styled from "styled-components";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const WhatsappButton = styled.a`
  z-index: 3;
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
  svg {
    font-size: 40px;
  }
`;

const Whatsapp = () => {
  return (
    <WhatsappButton href='https://api.whatsapp.com/send?phone=543794290578&text=Hola,%20necesitaria%20una%20cotizaci%C3%B3n'>
      <WhatsAppIcon></WhatsAppIcon>
    </WhatsappButton>
  );
};

export default Whatsapp;