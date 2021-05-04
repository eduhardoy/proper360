import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsInmobiliarias } from "../../../store/actions/inmobiliarias";

import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import {
  CloseButton,
  ModalBackground,
  ModalTitleWrapper,
  ModalButtonWrapper,
  ButtonRed,
} from "./ModalAddInmobiliaria";

const ModalDeleteWrapper = styled.div`
  width: 40%;
  min-width: 350px;
  height: 40%;
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

const ModalDescriptionWrapper = styled.div`
  height: 50%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBlack = styled.button`
  width: 30%;
  margin: 10px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  background-color: #343a40;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #23272b;
    color: white;
  }
  :focus {
    background-color: #23272b;
    border: 5px solid #b1b3b6;
  }
`;

const ModalDeleteInmobiliaria = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [datos, setDatos] = React.useState({});
  const selectedInmobiliaria = useSelector(
    state => state.inmobiliarias.selected
  );
  React.useEffect(() => {
    setDatos(selectedInmobiliaria);
  }, [selectedInmobiliaria]);

  const handleModal = () => {
    //console.log(datos._key);
    dispatch(actionsInmobiliarias.deleteInmobiliarias(datos._key));
    closeModal();
  };

  return (
    <ModalBackground>
      <ModalDeleteWrapper>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <ModalTitleWrapper>
          <h4>ELIMINAR</h4>
        </ModalTitleWrapper>
        <ModalDescriptionWrapper>
          <p>¿Esta seguro que desea eliminar?</p>
        </ModalDescriptionWrapper>
        <ModalButtonWrapper>
          <ButtonBlack onClick={closeModal}>CANCELAR</ButtonBlack>
          <ButtonRed onClick={handleModal}>ELIMINAR</ButtonRed>
        </ModalButtonWrapper>
      </ModalDeleteWrapper>
    </ModalBackground>
  );
};

export default ModalDeleteInmobiliaria;
