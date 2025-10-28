import React from "react";

const CompanyDescription = () => {
  return (
    <div>
      <header>
        <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-2 text-justify">
          <a
            className="hover:text-gray-100 transition duration-150 ease-in-out"
            href="#0"
          >
            <span className="text-lime-700">IMAPRO </span>
            viene de las siglas de Ingeniería, Mediciones, Ambiente, Producción
            y Riesgo Operativo
          </a>
        </h3>
      </header>
      <p className="text-xl text-gray-400 flex-grow text-justify">
        Somos una consultora especializada en ingeniería civil dedicada a la
        inspección, medición y evaluación de proyectos ambientales y
        productivos, así como a la capacitación de recursos humanos a cargo de
        profesionales técnicos y especialistas. Nuestro propósito es asesorar a
        entidades públicas y privadas para optimizar la eficiencia de sus
        productos y servicios, considerando el mercado actual y futuro, el
        entorno ambiental y su capacidad de producción.
      </p>
    </div>
  );
};

export default CompanyDescription;
