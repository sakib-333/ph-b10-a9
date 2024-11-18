import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <HowItWorks />
      <Sponsors />
    </div>
  );
};

export default Home;
