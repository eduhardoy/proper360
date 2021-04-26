import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import {
  CloseButton,
  ModalBackground,
  ModalGridWrapper,
  ModalTitleWrapper,
  ModalWrapper,
  ModalButtonWrapper,
  ButtonRed,
  ButtonGreen,
} from "./ModalAddPropiedad";

const ModalEditPropiedad = ({closeModal}) => {
  return (
    <ModalBackground
    >
      <ModalWrapper >
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <ModalTitleWrapper>
          <h4>EDITAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper></ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed onClick={closeModal}>CANCELAR</ButtonRed>
          <ButtonGreen
          >
            ACEPTAR
          </ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalEditPropiedad;
