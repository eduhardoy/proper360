import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  actionsInmobiliarias,
  typesInmobiliarias,
} from "../../../store/actions/inmobiliarias";

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

const ModalEditInmobiliaria = ({closeModal}) => {

  const dispatch = useDispatch();
  const modalState = useSelector(state => state.inmobiliarias.result[0]);

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
    closeModal()
  };

  const inmobiliarias = useSelector(state => state.inmobiliarias);

  React.useEffect(() => {
    async function fetchInmobiliarias() {
      dispatch(actionsInmobiliarias.getInmobiliarias());
    }
    fetchInmobiliarias();
  }, []);

  
  return (
    <ModalBackground>
      <ModalWrapper >
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
          />
          <input
            name='nombre'
            placeholder='NOMBRE'
            onChange={handleInputChange}
          />
          <input
            name='descripcion'
            placeholder='DESCRIPCION'
            onChange={handleInputChange}
          />
          <input
            name='telefono'
            placeholder='TELEFONO'
            onChange={handleInputChange}
          />
          <input
            name='direccion'
            placeholder='DIRECCION'
            onChange={handleInputChange}
          />
          <input
            name='email'
            type='email'
            placeholder='EMAIL'
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
