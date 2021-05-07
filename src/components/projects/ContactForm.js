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
    @media (max-width: 1024px) {
      width: 300px;
    }
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

function ContactForm({ project }) {
  const [whatsAppMsgName, setWhatsAppMsgName] = useState();
  const [whatsAppMsgEmail, setWhatsAppMsgEmail] = useState();
  const [whatsAppMsgText, setWhatsAppMsgText] = useState(project.nombre);

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
      <button type='submit' id='BotonEnviar' onClick={initiateWhatsAppSMS}>
        ENVIAR
      </button>
    </Form>
  );
}

export default ContactForm;
