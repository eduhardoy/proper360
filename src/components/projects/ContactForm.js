import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  input {
    width: 400px;
    height: 40px;
    margin-top: 20px;
    border: 1px solid black;
    padding: 5px;
    font-size: 15px;
  }
  button {
    height: 40px;
    width: 80px;
    margin-top: 20px;
    border: none;
    background-color: black;
    color: white;
  }
`;

function ContactForm() {
  const [whatsAppMsgName, setWhatsAppMsgName] = useState();
  const [whatsAppMsgEmail, setWhatsAppMsgEmail] = useState();
  const [whatsAppMsgText, setWhatsAppMsgText] = useState();

  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const initiateWhatsAppSMS = () => {
    let url =
      "https://wa.me/543794275060?text=" +
      "Hola, mi nombre es " +
      whatsAppMsgName +
      ". Me gustaria agendar una visita a la propiedad " +
      whatsAppMsgText +
      ". Mi email es " +
      whatsAppMsgEmail +
      ". Muchas gracias, espero su respuesta.";
    openInNewTab(url);
  };

  return (
    <Form>
      <h2>AGENDAR UNA VISITA</h2>
      <input
        value={whatsAppMsgName}
        onChange={e => setWhatsAppMsgName(e.target.value)}
        placeholder={"Nombre"}
        type='text'
      />
      <input
        value={whatsAppMsgEmail}
        onChange={e => setWhatsAppMsgEmail(e.target.value)}
        placeholder={"Email"}
        type='email'
      />
      <input
        value={whatsAppMsgText}
        onChange={e => setWhatsAppMsgText(e.target.value)}
        placeholder={"Propiedad"}
        type='text'
      />
      <button type='submit' id='BotonEnviar' onClick={initiateWhatsAppSMS}>
        ENVIAR
      </button>
    </Form>
  );
}

export default ContactForm;
