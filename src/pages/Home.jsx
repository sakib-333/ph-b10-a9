import React, { useEffect } from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";

const Home = () => {
  useEffect(() => {
    document.title = "Winter Donation";
  }, []);

  return (
    <div>
      <Slider />
      <About />
      <HowItWorks />
      <Sponsors />
      <FAQ />
    </div>
  );
};

export default Home;
