import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { actionsPropiedades } from "../../../store/actions/propiedades";
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
} from "./ModalAddPropiedad";

const ModalEditPropiedad = ({ closeModal }) => {
  const [datos, setDatos] = React.useState({});
  const selectedPropiedad = useSelector(state => state.propiedades.selected);
  React.useEffect(() => {
    setDatos(selectedPropiedad);
  }, [selectedPropiedad]);

  const dispatch = useDispatch();
  // const modalState = useSelector(state => state.propiedades.result[0]);

  const handleInputChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };

  const handleSelectChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: JSON.parse(event.target.value),
    });
  };

  const handleModal = () => {
    //dispatch(actionsPropiedades.putPropiedad(datos))
    closeModal();
  };

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
          <h4>EDITAR</h4>
        </ModalTitleWrapper>
        <ModalGridWrapper>
          <input
            name='logo'
            placeholder='LOGO'
            value={datos ? datos.logo : ""}
            onChange={handleInputChange}
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
            name='direccion'
            placeholder='DIRECCION'
            value={datos ? datos.direccion : ""}
            onChange={handleInputChange}
          />
          <input
            name='barrio'
            placeholder='BARRIO'
            value={datos ? datos.barrio : ""}
            onChange={handleInputChange}
          />
          <select
            name='categoria'
            value={datos ? datos.categoria : ""}
            onChange={handleInputChange}
          >
            <option disabled selected>
              CATEGORIA
            </option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Local</option>
          </select>
          <select
            name='tipo'
            value={datos ? datos.tipo : ""}
            onChange={handleInputChange}
          >
            <option disabled selected>
              {" "}
              TIPO
            </option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>
          <input
            name='ambientes'
            placeholder='AMBIENTES'
            value={datos ? datos.ambientes : ""}
            onChange={handleInputChange}
          />
          <input
            name='habitaciones'
            placeholder='HABITACIONES'
            value={datos ? datos.habitaciones : ""}
            onChange={handleInputChange}
          />
          <input
            name='banos'
            placeholder='BAÑOS'
            value={datos ? datos.banos : ""}
            onChange={handleInputChange}
          />
          <input
            name='precio'
            placeholder='PRECIO'
            value={datos ? datos.precio : ""}
            onChange={handleInputChange}
          />
          <input
            name='iframe'
            placeholder='IFRAME'
            value={datos ? datos.iframe : ""}
            onChange={handleInputChange}
          />
          <select
            name='inmobiliaria'
            value={datos ? datos.inmobiliaria : ""}
            onChange={handleSelectChange}
          >
            <option disabled selected>
              INMOBILIARIA
            </option>
            {inmobiliarias.map(data => (
              <option value={JSON.stringify(data)}>{data.nombre}</option>
            ))}
          </select>
        </ModalGridWrapper>
        <ModalButtonWrapper>
          <ButtonRed onClick={closeModal}>CANCELAR</ButtonRed>
          <ButtonGreen onClick={handleModal}>ACEPTAR</ButtonGreen>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ModalEditPropiedad;
