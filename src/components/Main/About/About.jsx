import React from "react";
import "./About.css";
import "animate.css";

// Import components
import SwiperGallery from "./SwiperGallery";
import CompanyDescription from "./CompanyDescription";
import TeamMemberCard from "./TeamMemberCard";

// Import data
import { teamMembers, swiperImages, icons } from "./data";

const About = () => {
  return (
    <div>
      {/* Company Introduction Section */}
      <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto max-h-7xl p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <SwiperGallery images={swiperImages} />
            <CompanyDescription />
          </article>
        </div>
      </section>
      {/* Team Section */}
      <section>
        <h1 className="titulares animate__animated animate__bounce">
          Conoce a parte del equipo
        </h1>
        <section className="dark:bg-gray-900">
          <div className="container px-6 flex justify-center py-12 mx-auto items-center">
            <div className="items-center sm:max-w-7xl sm:items-center lg:flex">
              <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {teamMembers.map((member) => (
                    <TeamMemberCard
                      key={member.id}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      title={member.title}
                      laborIcon={icons.labor}
                      titleIcon={icons.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
