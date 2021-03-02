import React from "react";
import Home from "../pages/Home";
import { Router } from "@reach/router";

const Routes = () => {
  return (
    <Router>
      <Home path='/' />
    </Router>
  );
};

export default Routes;
