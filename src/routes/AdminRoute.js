import React from "react";
import { Router, useNavigate } from "@reach/router";
import Admin from "../pages/admin";
import InmobiliariasAdmin from "../pages/admin/InmobiliariasAdmin";
import PropiedadesAdmin from "../pages/admin/PropiedadesAdmin";
import ClientesAdmin from "../pages/admin/ClientesAdmin";
import axios from "axios";

const AdminRoute = () => {
  return (
    <Router>
      <IsLogged as={Admin} path='/' />
      <PrivateRoute as={InmobiliariasAdmin} path='inmobiliarias/*' />
      <PrivateRoute as={PropiedadesAdmin} path='propiedades/*' />
      <PrivateRoute as={ClientesAdmin} path='clientes/*' />
    </Router>
  );
};

const PrivateRoute = ({ as: Comp, ...props }) => {
  const navigate = useNavigate();

  React.useEffect(async () => {
    const token = localStorage.getItem("token");
    const tokenValidated = await (
      await axios.post("https://proper360.net/api/auth/validate", { token })
    ).data;
    if (tokenValidated === false) navigate("/admin");
  }, []);

  return <Comp {...props} />;
};

const IsLogged = ({ as: Comp, ...props }) => {
  const navigate = useNavigate();

  React.useEffect(async () => {
    const token = localStorage.getItem("token");
    const tokenValidated = await (
      await axios.post("https://proper360.net/api/auth/validate", { token })
    ).data;
    if (tokenValidated === true) navigate("/admin/inmobiliarias");
  }, []);

  return <Admin path='/' />;
};

export default AdminRoute;
