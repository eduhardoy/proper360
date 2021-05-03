import React from "react";

import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ModalEditInmobiliaria from "./modals/ModalEditInmobiliaria";
import ModalDeleteInmobiliaria from "./modals/ModalDeleteInmobiliaria";
import { actionsInmobiliarias } from "../../store/actions/inmobiliarias";

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
  img {
    width: 150px;
    height: 150px;
  }
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

export default function InmobiliariasAdminAccordion() {
  const dispatch = useDispatch();
  const [editModalInmobiliaria, setEditModalInmobiliaria] = React.useState(
    false
  );
  const [deleteModalInmobiliaria, setDeleteModalInmobiliaria] = React.useState(
    false
  );

  const OpenEditModalInmobiliaria = () => setEditModalInmobiliaria(true);
  const CloseEditModalInmobiliaria = () => setEditModalInmobiliaria(false);
  const OpenDeleteModalInmobiliaria = () => setDeleteModalInmobiliaria(true);
  const CloseDeleteModalInmobiliaria = () => setDeleteModalInmobiliaria(false);

  const inmobiliarias = useSelector(state => state.inmobiliarias);

  React.useEffect(() => {
    async function fetchInmobiliarias() {
      dispatch(actionsInmobiliarias.getInmobiliarias());
    }
    fetchInmobiliarias();
  }, []);
  
  return (
    <AccordionWrapper>
      {inmobiliarias.result.map(data => (
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
                  OpenEditModalInmobiliaria();
                }}
                onFocus={event => event.stopPropagation()}
              >
                <p>EDITAR</p>
                <EditIcon />
              </ButtonAccordion>
              <ButtonAccordion
                onClick={event => {
                  event.stopPropagation();
                  OpenDeleteModalInmobiliaria();
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
              <p>Descripcion: {data.descripcion}</p>
              <p>Telefono: {data.telefono}</p>
              <p>Email: {data.email}</p>
              <p>Direccion: {data.direccion}</p>
              <img alt='Logo de la propiedad' src={data.logo} />
            </ListDetails>
          </AccordionDetails>
          <div
            style={
              editModalInmobiliaria === true
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <ModalEditInmobiliaria
              Datos={data}
              closeModal={CloseEditModalInmobiliaria}
            />
          </div>
          <div
            style={
              deleteModalInmobiliaria === true
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <ModalDeleteInmobiliaria
             inmobiliariaId={data._key}
             closeModal={CloseDeleteModalInmobiliaria} />
          </div>
        </Accordion>
      ))}
    </AccordionWrapper>
  );
}
