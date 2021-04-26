import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import ModalAddInmobiliaria from "../../components/admin/modals/ModalAddInmobiliaria";

import AdminLayout from "../../components/admin/AdminLayout";
import InmobiliariasAdminAccordion from "../../components/admin/InmobiliariasAdminAccordion";

const Container = styled.div`
  padding: 1%;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const ButtonModal = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  :hover {
    svg {
      font-size: 60px;
    }
  }
  svg {
    font-size: 40px;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
`;

const InmobiliariasAdmin = () => {
  const [addModalInmobiliaria, setAddModalInmobiliaria] = React.useState(false);

  const OpenAddModalInmobiliaria = () => setAddModalInmobiliaria(true);
  const CloseAddModalInmobiliaria = () => setAddModalInmobiliaria(false);

  return (
    <AdminLayout>
      <Container>
        <TitleWrapper>
          <h1>Inmobiliarias</h1>
          <ButtonModal onClick={OpenAddModalInmobiliaria}>
            <AddIcon />
          </ButtonModal>
          <div style={addModalInmobiliaria == true ? { display: "flex" } : { display: "none" }}>
            <ModalAddInmobiliaria/>
          </div>
        </TitleWrapper>
        <ListWrapper>
          <InmobiliariasAdminAccordion />
        </ListWrapper>
      </Container>
    </AdminLayout>
  );
};

export default InmobiliariasAdmin;
