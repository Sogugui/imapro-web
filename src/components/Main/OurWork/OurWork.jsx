import React from "react";
import ServicesSection from "./ServicesSection";
import { sectionData, services } from "./data";

const OurWork = () => {
  return (
    <ServicesSection
      title={sectionData.title}
      description={sectionData.description}
      services={services}
    />
  );
};

export default OurWork;
