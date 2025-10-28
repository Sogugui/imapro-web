import React from "react";
import "./Home.css";

// Import components
import HeroSection from "./HeroSection";
import PillarsSection from "./PillarsSection";

// Import data
import { heroData, pillars } from "./data";

const Home = () => {
  return (
    <>
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage}
      />
      <PillarsSection pillars={pillars} />
    </>
  );
};

export default Home;
