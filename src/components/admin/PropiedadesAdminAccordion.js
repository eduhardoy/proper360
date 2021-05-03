import React, { useEffect } from "react";

import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionsPropiedades } from "../../store/actions/propiedades";
import ModalEditPropiedad from "./modals/ModalEditPropiedad";
import ModalDeletePropiedad from "./modals/ModalDeletePropiedad";

const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  align-items: center;
  h2 {
    margin: 0;
    width: 40%;
    padding-left: 40px;
    display: flex;
    align-items: center;
  }
`;

const AccordionWrapper = styled.div`
  width: 80%;
`;

const ListDetails = styled.div`
  width: 100%;
  padding-left: 40px;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonAccordion = styled.button`
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  svg {
    padding-left: 5px;
    font-size: 20px;
  }
`;

export default function PropiedadesAdminAccordion() {
  const dispatch = useDispatch();

  const [editModalPropiedad, setEditModalPropiedad] = React.useState(false);
  const [deleteModalPropiedad, setDeleteModalPropiedad] = React.useState(false);

  const OpenEditModalPropiedad = data => {
    dispatch(actionsPropiedades.setSelectedPropiedad(data));
    setEditModalPropiedad(true);
  };

  const CloseEditModalPropiedad = () => setEditModalPropiedad(false);

  const OpenDeleteModalPropiedad = data => {
    dispatch(actionsPropiedades.setSelectedPropiedad(data));
    setDeleteModalPropiedad(true);
  };

  const CloseDeleteModalPropiedad = () => setDeleteModalPropiedad(false);

  const propiedades = useSelector(state => state.propiedades);

  useEffect(() => {
    async function fetchPropiedades() {
      dispatch(actionsPropiedades.getPropiedades());
    }
    fetchPropiedades();
  }, []);

  return (
    <AccordionWrapper>
      {propiedades.result.map(data => (
        <Accordion key={data._key}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <h2>{data.nombre}</h2>
            <ButtonWrapper>
              <ButtonAccordion
                onClick={event => {
                  event.stopPropagation();
                  OpenEditModalPropiedad(data);
                }}
                onFocus={event => event.stopPropagation()}
              >
                <p>EDITAR</p>
                <EditIcon />
              </ButtonAccordion>
              <ButtonAccordion
                onClick={event => {
                  event.stopPropagation();
                  OpenDeleteModalPropiedad(data);
                }}
                onFocus={event => event.stopPropagation()}
              >
                <p>ELIMINAR</p>
                <DeleteIcon />
              </ButtonAccordion>
            </ButtonWrapper>
          </StyledAccordionSummary>
          <AccordionDetails>
            <ListDetails>
              <h3>
                <strong>
                  {data.inmobiliaria ? data.inmobiliaria.nombre : ""}
                </strong>
              </h3>
              <p>Descripcion: {data.descripcion}</p>
              <p>Direccion: {data.direccion}</p>
              <p>Barrio: {data.barrio}</p>
              <p>Categoria: {data.categoria}</p>
              <p>Tipo: {data.tipo}</p>
              <p>Ambientes: {data.ambientes}</p>
              <p>Habitaciones: {data.habitaciones}</p>
              <p>Baños: {data.banos}</p>
            </ListDetails>
          </AccordionDetails>
        </Accordion>
      ))}
      <div
        style={
          editModalPropiedad === true
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <ModalEditPropiedad closeModal={CloseEditModalPropiedad} />
      </div>
      <div
        style={
          deleteModalPropiedad === true
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <ModalDeletePropiedad closeModal={CloseDeleteModalPropiedad} />
      </div>
    </AccordionWrapper>
  );
}
