import React from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions, types } from '../../store/actions/clientes'


const AccordionWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

const ClientesAdminAccordion = () => {
  const dispatch = useDispatch()
  const [data, setData] = React.useState({})

  const clientes = useSelector(state => state.clientes)

  React.useEffect(() => {
    async function fetchClientes() {
      dispatch(actions.getClientes())
    }
    fetchClientes()
  }, [])


  return (
    <AccordionWrapper>
      {
        clientes.result.map(data => (
          <div>
            <p>{data.email}</p>
          </div>
        ))
      }

    </AccordionWrapper>
  );
};

export default ClientesAdminAccordion;
