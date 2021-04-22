import React from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions, types } from '../../store/actions/clientes'


const AccordionWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  ul{
    li{
      list-style-type: none;
    }
  }
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
      <ul>
      {
        clientes.result.map(data => (
          <li>
            <p>{data.email}</p>
            {/* <p>{data.dateCreated}</p> */}
          </li>
        ))
      }
      </ul>

    </AccordionWrapper>
  );
};

export default ClientesAdminAccordion;
