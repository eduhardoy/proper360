import React from "react";

import ContactForm from "../components/projects/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectWrapper from "../components/projects/ProjectWrapper";
import Whatsapp from "../components/Whatsapp";
import { useDispatch, useSelector } from "react-redux";
import { actionsPropiedades } from "../store/actions/propiedades";

const Projects = ({ projectId }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actionsPropiedades.getPropiedad(projectId));
  }, []);

  const propiedad = useSelector(state => state.propiedades.oneResult);
  console.log("PROROROP", propiedad);
  return (
    <div>
      <Header />
      {propiedad != null && (
        <>
          <ProjectWrapper project={propiedad}></ProjectWrapper>
          <ContactForm project={propiedad} />
        </>
      )}

      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Projects;
