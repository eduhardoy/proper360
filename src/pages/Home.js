import React from "react";

import HomeHeader from "../components/home/HomeHeader";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import HomeHero from "../components/home/HomeHero";
import HomeInmobiliarias from "../components/home/HomeInmobiliarias";
import HomeImages from "../components/home/HomeImages";
import HomeStepper from "../components/home/HomeStepper";
import HomeAbout from "../components/home/HomeAbout";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Whatsapp />
      <HomeHero />
      <HomeStepper />
      <HomeInmobiliarias />
      <HomeImages />
      <HomeAbout />
      <Footer />
    </div>
  );
};

export default Home;
