import React from "react";

import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

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

export default function InmobiliariasAdminAccordion() {
  return (
    <AccordionWrapper>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <h2>Inmobiliaria 1</h2>
          <ButtonWrapper>
            <ButtonAccordion
              onClick={event => event.stopPropagation()}
              onFocus={event => event.stopPropagation()}
            >
              <p>EDITAR</p>
              <EditIcon />
            </ButtonAccordion>
            <ButtonAccordion
              onClick={event => event.stopPropagation()}
              onFocus={event => event.stopPropagation()}
            >
              <p>ELIMINAR</p>
              <DeleteIcon />
            </ButtonAccordion>
          </ButtonWrapper>
        </StyledAccordionSummary>
        <AccordionDetails>
          <ListDetails>
            <p>Logo:</p>
            <p>Descripcion:</p>
            <p>Telefono:</p>
            <p>Email:</p>
            <p>Direccion:</p>
            <p>Banner:</p>
          </ListDetails>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  );
}
