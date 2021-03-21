import React from "react";
import styled from "styled-components";

const Form = styled.form`
    
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    input{
        width:80%;
        height: 40px;
        margin-top: 20px;
        border: 1px solid black;
        
    }
    textarea{
        margin-top: 20px;
        width: 80%;
        height: 150px;
        resize: none;
        border: 1px solid black;
    }
    button{
        height: 40px;
        width: 80px;
        margin-top: 20px;
        border: none;
        background-color: black;
        color: white;
    }
`;

function ContactForm (){

    return(
        <Form>
            <input type="text" placeholder="Tu nombre"></input>
            <input type="email" placeholder="Tu email"></input>
            <textarea ></textarea>
            <button type="button">ENVIAR</button>
        </Form>
    );
}

export default ContactForm;