import React from "react";

import ContactForm from "../components/projects/ContactForm";
import Footer from "../components/Footer";
import HomeHeader from "../components/home/HomeHeader";
import ProjectWrapper from "../components/projects/ProjectWrapper";
import Whatsapp from "../components/Whatsapp";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/actions/propiedades";

const Projects = ({ projectId }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getPropiedad(projectId));
  }, []);

  const propiedad = useSelector(state => state.propiedades.oneResult);
  console.log("PROROROP", propiedad);
  return (
    <div>
      <HomeHeader />
      {propiedad && (
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
