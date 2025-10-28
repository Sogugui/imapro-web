import React from "react";
import PillarCard from "./PillarCard";

const PillarsSection = ({ pillars }) => {
  return (
    <section className="select-none">
      <h1 className="titulares animate__animated animate__backInLeft">
        Nuestros pilares fundamentales
      </h1>
      <section className="cardsPilars">
        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              description={pillar.desc}
              image={pillar.img}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PillarsSection;
