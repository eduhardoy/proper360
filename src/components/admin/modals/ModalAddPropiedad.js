import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionsPropiedades, typesPropiedades } from '../../../store/actions/propiedades';
import { actionsInmobiliarias, typesInmobiliarias } from '../../../store/actions/inmobiliarias';

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
  height: 95%;
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
  height: 70%;
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
  select {
    height: 36px;
    width: 42%;
    margin: 5px;
  }
`;

export const ModalTitleWrapper = styled.div`
  height: 15%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonWrapper = styled.div`
  height: 15%;
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

const ModalAddPropiedad = ({ closeModal }) => {

  const dispatch = useDispatch()
  const modalState = useSelector(state => state.propiedades.result[0]);
  const [data, setData] = React.useState({});

  const [datos, setDatos] = React.useState({
    logo: '',
    nombre: '',
    descripcion: '',
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
    //dispatch(actionsPropiedades.postPropiedad(datos))
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
    <ModalBackground>
      <ModalWrapper>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <ModalTitleWrapper>
          <h4>AGREGAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper>
          <input name="logo" placeholder="LOGO" onChange={handleInputChange} />
          <input name="nombre" placeholder="NOMBRE" onChange={handleInputChange} />
          <input name="descripcion" placeholder="DESCRIPCION" onChange={handleInputChange} />
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
          <ButtonGreen
            onClick={handleModal}
          >
            AGREGAR
          </ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalAddPropiedad;
