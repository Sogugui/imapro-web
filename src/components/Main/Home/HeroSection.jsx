import React from "react";

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="bg-gray-900">
      <div className="relative select-none">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl">
                  <span className="text-lime-700">I</span>MAPRO{" "}
                  <span className="text-lime-700">A</span>rgentina
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-100">
                  {subtitle
                    .split("inspección, medición y desarrollo de proyectos")
                    .map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        {index === 0 && (
                          <span className="text-lime-700">
                            {" "}
                            inspección, medición y desarrollo de proyectos{" "}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={backgroundImage}
            alt="Imagen corporativa de IMAPRO"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
