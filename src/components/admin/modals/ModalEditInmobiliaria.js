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
} from "./ModalAddInmobiliaria";

const ModalEditInmobiliaria = () => {
  return (
    <ModalBackground
    >
      <ModalWrapper >
        <CloseButton >
          <CloseIcon />
        </CloseButton>
        <ModalTitleWrapper>
          <h4>EDITAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper></ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed>CANCELAR</ButtonRed>
          <ButtonGreen
          >
            ACEPTAR
          </ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalEditInmobiliaria;
