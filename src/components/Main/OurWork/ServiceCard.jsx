import React from "react";

const ServiceCard = ({ title, image, services }) => {
  return (
    <div className="p-8 space-y-3 border-2 border-lime-700 rounded-xl hover:scale-110 transition-transform">
      <span className="inline-block text-blue-100 dark:text-blue-400">
        <img
          src={image}
          className="w-[280px] h-[240px]"
          alt={`Imagen de ${title}`}
        />
      </span>

      <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">
        {title}
      </h1>

      <ol className="text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
        {services.map((service, index) => (
          <li key={index}>
            {index === 0 && service.includes("Los siguientes seminarios") ? (
              <p>{service}</p>
            ) : (
              `- ${service}`
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ServiceCard;
