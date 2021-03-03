import React from "react";
import Home from "../pages/Home";
import { Router } from "@reach/router";
import AdminRoute from "./AdminRoute";

const Routes = () => {
  return (
    <Router>
      <Home path='/' />
      <AdminRoute path='admin/*' />
    </Router>
  );
};

export default Routes;
