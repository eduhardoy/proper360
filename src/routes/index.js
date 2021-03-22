import React from "react";
import { Router} from "@reach/router";

import AdminRoute from "./AdminRoute";
import Home from "../pages/Home";
import Inmobiliarias from "../pages/Inmobiliarias";
import Propiedades from "../pages/Propiedades";
import PropiedadesProject from "../pages/PropiedadesProject";

const Routes = () => {
  return (
    <Router> 
      <Home path='/' />
      <Inmobiliarias path='/inmobiliaria'/>
      <Propiedades path='/propiedades'/>
      <PropiedadesProject path='/project'/> 
      <AdminRoute path='admin/*'/>
    </Router>
  );
};

export default Routes;
