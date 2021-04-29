import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { actionsPropiedades } from '../../../store/actions/propiedades';
import { actionsInmobiliarias } from '../../../store/actions/inmobiliarias';

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

  const dispatch = useDispatch()
  /* const modalState = useSelector(state => state.propiedades.result[0]);
  const [data, setData] = React.useState({}); */

  const [datos, setDatos] = React.useState({
    logo: '',
    imagen: '',
    nombre: '',
    descpricion: '',
    extras: '',
    direccion: '',
    barrio: '',
    categoria: '',
    tipo: '',
    ambientes: '',
    habitaciones: '',
    banos: '',
    precio: '',
    iframe: '',
    inmobiliaria: ''
  })

  const handleInputChange = (event) => {
    /* console.log(event.target.name)
    console.log(event.target.value) */
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const handleSelectChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: JSON.parse(event.target.value)
    })
  }

  const handleModal = () => {

    console.log(datos);
    dispatch(actionsPropiedades.putPropiedad(datos))
    closeModal()
  }

  const inmobiliarias = useSelector(state => state.inmobiliarias.result);

  React.useEffect(() => {
    async function fetchInmobiliarias() {
      dispatch(actionsInmobiliarias.getInmobiliarias());
    }
    fetchInmobiliarias();
  }, []);

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
        <ModalGridWrapper>
          <input name="logo" placeholder="LOGO" onChange={handleInputChange} />
          <input name="imagen" placeholder="IMAGEN" onChange={handleInputChange} />
          <input name="nombre" placeholder="NOMBRE" onChange={handleInputChange} />
          <input name="descripcion" placeholder="DESCRIPCION" onChange={handleInputChange} />
          <input name="extras" placeholder="EXTRAS" onChange={handleInputChange} />
          <input name="direccion" placeholder="DIRECCION" onChange={handleInputChange} />
          <input name="barrio" placeholder="BARRIO" onChange={handleInputChange} />
          <select name="categoria" onChange={handleInputChange} >
            <option disabled selected>CATEGORIA</option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Local</option>
          </select>
          <select name='tipo' onChange={handleInputChange}>
            <option disabled selected>
              TIPO
            </option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>
          <input name="ambientes" placeholder="AMBIENTES" onChange={handleInputChange} />
          <input name="habitaciones" placeholder="HABITACIONES" onChange={handleInputChange} />
          <input name="banos" placeholder="BAÑOS" onChange={handleInputChange} />
          <input name="precio" placeholder="PRECIO" onChange={handleInputChange} />
          <input name="iframe" placeholder="IFRAME" onChange={handleInputChange} />
          <select name="inmobiliaria" onChange={handleSelectChange}>
            <option disabled selected>INMOBILIARIA</option>
            {inmobiliarias.map(data => (
              <option value={JSON.stringify(data)}>{data.nombre}</option>
            ))}
          </select>
        </ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed onClick={closeModal}>CANCELAR</ButtonRed>
          <ButtonGreen onClick={handleModal}
          >
            ACEPTAR
          </ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalEditPropiedad;
