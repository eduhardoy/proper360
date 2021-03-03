import React from "react";
import styled from "styled-components";

import BusinessIcon from "@material-ui/icons/Business";
import ApartmentIcon from "@material-ui/icons/Apartment";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const StyledLeftSideBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: calc(100vh - 64px);
  border-right: 2px solid black;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const BarButton = styled.button`
  margin-top: 20px;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  :hover {
  }
  p {
    display: block;
    font-size: 10px;
    font-family: "Raleway";
    font-weight: 700;
  }
  svg {
    font-size: 40px;
  }
`;

const AdminLeftSide = () => {
  return (
    <StyledLeftSideBar>
      <BarButton>
        <BusinessIcon />
        <p>INMOBILIARIAS</p>
      </BarButton>
      <BarButton>
        <ApartmentIcon />
        <p>PROPIEDADES</p>
      </BarButton>
      <BarButton>
        <PersonAddIcon />
        <p>CLIENTES</p>
      </BarButton>
    </StyledLeftSideBar>
  );
};

export default AdminLeftSide;
