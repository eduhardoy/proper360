import React from "react";
import { Router } from "@reach/router";

import AdminRoute from "./AdminRoute";
import Home from "../pages/Home";
import Inmobiliarias from "../pages/Inmobiliarias";
import Propiedades from "../pages/Propiedades";
import Projects from "../pages/Projects";

const Routes = () => {
  return (
    <Router>
      <Home path='/' />
      <Inmobiliarias path='/inmobiliaria/:inmobiliaria' />
      {/* <Propiedades path='/propiedades/:inmobiliaria' /> */}
      <Projects path='/project/:projectId' />
      <AdminRoute path='admin/*' />
    </Router>
  );
};

export default Routes;
