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
} from "./ModalAdd";

const ModalEdit = ({ children, setEstado, estado, modalEditAceptar }) => {
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
          <h4>EDITAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper>{children}</ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed onClick={e => setEstado(false)}>CANCELAR</ButtonRed>
          <ButtonGreen
            onClick={e => {
              modalEditAceptar();
              setEstado(false);
            }}
          >
            ACEPTAR
          </ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalEdit;
