import React from "react";

const TeamMemberCard = ({
  image,
  name,
  position,
  title,
  laborIcon,
  titleIcon,
}) => {
  return (
    <div>
      <img
        className="object-cover w-full rounded-3xl h-64"
        src={image}
        alt={`Foto de ${name}`}
      />
      <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">
        {name}
      </h2>
      <div className="flex items-center mt-4 px-1 text-slate-400">
        <img
          src={laborIcon}
          className="w-6 h-8 fill-current"
          alt="Icono de trabajo"
        />
        <h1 className="text-lg tracking-wider text-slate-500 px-2">
          {position}
        </h1>
      </div>
      <div className="flex items-center mt-4 text-slate-400">
        <img
          src={titleIcon}
          className="w-9 h-9 fill-current"
          alt="Icono de título"
        />
        <h1 className="text-lg tracking-wider text-slate-500 px-1">{title}</h1>
      </div>
    </div>
  );
};

export default TeamMemberCard;
