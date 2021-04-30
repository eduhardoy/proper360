import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
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

const ModalEditInmobiliaria = ({ closeModal, Datos }) => {
  const dispatch = useDispatch();
  /* const modalState = useSelector(state => state.inmobiliarias.result[0]); */

  const [datos, setDatos] = React.useState({
    logo: "",
    nombre: "",
    descpricion: "",
    telefono: "",
    direccion: "",
    email: "",
  });

  const handleInputChange = event => {
    /* console.log(event.target.name)
     console.log(event.target.value) */
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleModal = () => {
    console.log(datos);
    dispatch(actionsInmobiliarias.putInmobiliarias(datos));
    closeModal();
  };

  /* const inmobiliarias = useSelector(state => state.inmobiliarias);

  React.useEffect(() => {
    async function fetchInmobiliarias() {
      dispatch(actionsInmobiliarias.getInmobiliarias());
    }
    fetchInmobiliarias();
  }, []); */

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
            value={Datos.logo}
          />
          <input
            name='nombre'
            placeholder='NOMBRE'
            value={Datos.nombre}
            onChange={handleInputChange}
          />
          <input
            name='descripcion'
            placeholder='DESCRIPCION'
            value={Datos.descripcion}
            onChange={handleInputChange}
          />
          <input
            name='telefono'
            placeholder='TELEFONO'
            value={Datos.telefono}
            onChange={handleInputChange}
          />
          <input
            name='direccion'
            placeholder='DIRECCION'
            value={Datos.direccion}
            onChange={handleInputChange}
          />
          <input
            name='email'
            type='email'
            placeholder='EMAIL'
            value={Datos.email}
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
