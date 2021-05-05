import React from "react";
import { Router } from "@reach/router";

import AdminRoute from "./AdminRoute";
import Home from "../pages/Home";
import Inmobiliarias from "../pages/Inmobiliarias";
import Projects from "../pages/Projects";
import ReactGA from "react-ga";


const Routes = () => {
  React.useEffect(() => {
    ReactGA.initialize('UA-196385228-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router>
      <Home path='/' />
      <Inmobiliarias path='/inmobiliaria/:inmobiliaria' />
      <Projects path='/project/:projectId' />
      <AdminRoute path='admin/*' />
    </Router>
  );
};

export default Routes;
