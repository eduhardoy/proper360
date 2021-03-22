import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  input {
    width: 40%;
    height: 40px;
    margin-top: 20px;
    border: 1px solid black;
  }
  textarea {
    margin-top: 20px;
    width: 40%;
    height: 150px;
    resize: none;
    border: 1px solid black;
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
  return (
    <Form>
      <h2>CONTACTO</h2>
      <input type='text' placeholder='Tu nombre'></input>
      <input type='email' placeholder='Tu email'></input>
      <textarea></textarea>
      <button type='button'>ENVIAR</button>
    </Form>
  );
}

export default ContactForm;
