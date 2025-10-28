import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ title, description, services }) => {
  return (
    <section className="bg-gray-900 min-h-screen w-full text-gray-200">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="animate__animated animate__backInDown text-3xl font-semibold capitalize lg:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-gray-100 text-2xl xl:mt-6 dark:text-gray-300">
          {description}
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 h-1/3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              services={service.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
