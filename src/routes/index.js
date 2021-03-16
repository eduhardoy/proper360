import React from "react";
import Home from "../pages/Home";
import Inmobiliarias from "../pages/Inmobiliarias";
import { Router } from "@reach/router";
import AdminRoute from "./AdminRoute";

const Routes = () => {
  return (
    <Router>
      <Home path='/' />
      <Inmobiliarias path='/inmobiliaria'/>
      <AdminRoute path='admin/*' />
    </Router>
  );
};

export default Routes;
