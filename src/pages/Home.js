import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import HomeHero from "../components/home/HomeHero";
import HomeImages from "../components/home/HomeImages";
import HomeStepper from "../components/home/HomeStepper";
import HomeInmobiliariasCarrousel from "../components/home/HomeInmobiliariasCarrousel";
import HomeAbout from "../components/home/HomeAbout";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Whatsapp />
      <HomeHero />
      <HomeStepper />
      <HomeInmobiliariasCarrousel />
      <HomeImages />
      <HomeAbout />
      <Footer />
    </div>
  );
};

export default Home;
