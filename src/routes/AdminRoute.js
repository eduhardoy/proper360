import React from "react";
import { Router } from "@reach/router";
import Admin from "../pages/admin";
import InmobiliariasAdmin from "../pages/admin/InmobiliariasAdmin";
import PropiedadesAdmin from "../pages/admin/PropiedadesAdmin";
import ClientesAdmin from "../pages/admin/ClientesAdmin";

const AdminRoute = () => {
  return (
    <Router>
      <Admin path='/' />
      <InmobiliariasAdmin path='inmobiliarias/*' />
      <PropiedadesAdmin path='propiedades/*' />
      <ClientesAdmin path='clientes/*' />
    </Router>
  );
};

export default AdminRoute;
