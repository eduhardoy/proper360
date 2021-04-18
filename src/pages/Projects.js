import React from "react";

import ContactForm from "../components/projects/ContactForm";
import Footer from "../components/Footer";
import HomeHeader from "../components/home/HomeHeader";
import ProjectWrapper from "../components/projects/ProjectWrapper";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomeHeader />

      <ProjectWrapper></ProjectWrapper>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Projects;
