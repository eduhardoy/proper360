import React from "react";

import HomeHeader from "../components/home/HomeHeader";
import Footer from "../components/Footer";
import HomeHero from "../components/home/HomeHero";
import HomeInmobiliarias from "../components/home/HomeInmobiliarias";
import HomeAbout from "../components/home/HomeAbout";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      <HomeInmobiliarias />
      <HomeAbout />
      <Footer />
    </div>
  );
};

export default Home;
