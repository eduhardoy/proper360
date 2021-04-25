import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions, types } from '../../../store/actions/propiedades';

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(40, 40, 40, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  min-width: 350px;
  height: 80%;
  z-index: 99999;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 426px) {
    height: 80%;
    width: 80%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const ModalGridWrapper = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  input {
    height: 30px;
    width: 40%;
    margin: 5px;
  }
`;

export const ModalTitleWrapper = styled.div`
  height: 20%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonWrapper = styled.div`
  height: 20%;
  width: 80%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonGreen = styled.button`
  width: 30%;
  margin: 10px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  background-color: #28a745;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #218838;
    color: white;
  }
  :focus {
    border: 3px solid #bfe5c8;
    background-color: #28a745;
  }
`;

export const ButtonRed = styled.button`
  width: 30%;
  margin: 10px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  background-color: #dc3545;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #c82333;
    color: white;
  }
  :focus {
    border: 3px solid #f2b1b8;
    background-color: #dc3545;
  }
`;

const ModalAdd = ({ setEstado, estado }) => {

  const dispatch = useDispatch()

  const [datos, setDatos] = React.useState({
    logo:'',
    nombre:'',
    descpricion:'',
    direccion:'',
    barrio:'',
    categoria:'',
    tipo:'',
    ambientes:'',
    habitaciones:'',
    banos:'',
    precio:'',
    iframe:'',
    inmobiliaria:''
  })

  const handleInputChange = (event) => {
     /* console.log(event.target.name)
     console.log(event.target.value) */
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  const modalAdd= (e) =>{ 
    
    /* console.log(datos) */
    dispatch(actions.postPropiedad(datos))
  }

  return (
    <ModalBackground
      style={{ display: estado ? "" : "none" }}
      onClick={e => setEstado(false)}
    >
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <CloseButton onClick={e => setEstado(false)}>
          <CloseIcon />
        </CloseButton>
        <ModalTitleWrapper>
          <h4>AGREGAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper>
          <input name="logo" placeholder="LOGO" onChange={handleInputChange}/>
          <input name="nombre" placeholder="NOMBRE" onChange={handleInputChange}/>
          <input name="descripcion" placeholder="DESCRIPCION" onChange={handleInputChange}/>
          <input name="direccion" placeholder="DIRECCION" onChange={handleInputChange}/>
          <input name="barrio" placeholder="BARRIO" onChange={handleInputChange}/>
          <input name="categoria" placeholder="CATEGORIA" onChange={handleInputChange}/>
          <input name="tipo" placeholder="TIPO" onChange={handleInputChange}/>
          <input name="ambientes" placeholder="AMBIENTES" onChange={handleInputChange}/>
          <input name="habitaciones" placeholder="HABITACIONES" onChange={handleInputChange}/>
          <input name="banos" placeholder="BAÑOS" onChange={handleInputChange}/>
          <input name="precio" placeholder="PRECIO" onChange={handleInputChange}/>
          <input name="iframe" placeholder="IFRAME" onChange={handleInputChange}/>
          <input name="inmobiliaria" placeholder="INMOBILIARIA" onChange={handleInputChange}/>
        </ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed onClick={e => setEstado(false)}>CANCELAR</ButtonRed>
          <ButtonGreen
            onClick={() => {
              modalAdd();
              setEstado(false);
            }}
          >
            AGREGAR
          </ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalAdd;
