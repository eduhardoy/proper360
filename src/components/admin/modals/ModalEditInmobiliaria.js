import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { actionsInmobiliarias } from "../../../store/actions/inmobiliarias";

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

const ModalEditInmobiliaria = ({ closeModal }) => {
  const [datos, setDatos] = React.useState({});
  const selectedInmobiliaria = useSelector(
    state => state.inmobiliarias.selected
  );
  React.useEffect(() => {
    setDatos(selectedInmobiliaria);
  }, [selectedInmobiliaria]);

  const dispatch = useDispatch();
  /* const modalState = useSelector(state => state.inmobiliarias.result[0]); */

  const handleInputChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleModal = () => {
    //console.log(datos);
    //console.log(datos._key);
    dispatch(actionsInmobiliarias.putInmobiliarias(datos));
    closeModal();
  };

  return (
    <ModalBackground>
      <ModalWrapper>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <ModalTitleWrapper>
          <h4>EDITAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper>
          <input
            name='logo'
            placeholder='LOGO'
            onChange={handleInputChange}
            value={datos ? datos.logo : ""}
          />
          <input
            name='nombre'
            placeholder='NOMBRE'
            value={datos ? datos.nombre : ""}
            onChange={handleInputChange}
          />
          <input
            name='descripcion'
            placeholder='DESCRIPCION'
            value={datos ? datos.descripcion : ""}
            onChange={handleInputChange}
          />
          <input
            name='telefono'
            placeholder='TELEFONO'
            value={datos ? datos.telefono : ""}
            onChange={handleInputChange}
          />
          <input
            name='direccion'
            placeholder='DIRECCION'
            value={datos ? datos.direccion : ""}
            onChange={handleInputChange}
          />
          <input
            name='email'
            type='email'
            placeholder='EMAIL'
            value={datos ? datos.email : ""}
            onChange={handleInputChange}
          />
        </ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed onClick={closeModal}>CANCELAR</ButtonRed>
          <ButtonGreen onClick={handleModal}>ACEPTAR</ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalEditInmobiliaria;
