import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    height: 100%;
    width: 100%;
    color: white;
    background-color: rgba(0,0,0,0.5);
    font-family: sans-serif;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
           padding-top: 5%; 
        }
        
        
        .Form-title{
            text-align: center;
            width: 80%;
            margin-right:20px;
            h1{
                font-weight: lighter;
              .strong{
                
                font-weight: bolder;
            }  
            }
            
           
        }
        .Form-txt{
            
            width: 83%;
            h2{
                font-weight: lighter;
            }
            
        }
        .Form-input{
            width: 78%;
            height: 20%;
           
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px 2px 0 0;    
            input{
                width: 100%;
                height: 40px;
                padding: 12px 20px;
                margin: 8px 0;
                box-sizing: border-box;
                border: 0px solid black;
                border-radius: 10px 0 0 10px;
                background-color: rgba(255,255,255,0.85);
                
            }
            button{
                border:none;
                border-radius: 0 10px 10px 0;
                color: white;
                background-color: #262626;
                height: 40px;
                width:  40px;
            }
        }
        .Form-msj{
            padding-top: 0;
            width: 70%;
            display: flex;
            justify-content: flex-end;
            h2{
                font-weight: lighter;
            }
        }
    }
`;

function SubscribeForm(){
    return(
        <FormContainer>
            <form>
                <div className="Form-title">
                    <h1>BIENVENIDO A <br/><strong>  PROPER 360</strong></h1>
                </div>
                <div className="Form-txt">
                    <h2>ENCUENTRA LA PROPIEDAD QUE BUSCAS</h2>
                </div>
                < div className="Form-input">
                    <input type="email" placeholder="Tu email"/>
                    <button class="button">▶</button>
                </div>
                <div className="Form-msj">
                    <h2>Suscríbete</h2>
                </div>
                
            </form>
            
        </FormContainer>
    );
}

export default SubscribeForm; 