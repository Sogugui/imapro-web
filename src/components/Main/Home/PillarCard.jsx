import React from "react";

const PillarCard = ({ title, description, image }) => {
  return (
    <article className="flex items-center max-w-md mx-auto h-full shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <div className="flex justify-center flex-col items-center">
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="flex w-screen max-h-fit rounded-t-md"
        />
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-slate-100">{title}</h3>
          <p className="text-gray-400 text-lg mt-1">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default PillarCard;
