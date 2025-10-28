import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleBar = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);
  };
  return (
    <>
      {/* phone navigation */}
      <div className="lg:hidden  select-none bg-slate-100 font-poppins">
        <div className="flex items-center gap-2 text-xl p-2">
          <Link to="/" className="">
            <span className="text-lime-700 font-semibold">I</span>mapro{" "}
            <span className="font-semibold text-action">Argentina</span>
          </Link>
        </div>
        {showSidebar ? (
          <button
            className="flex text-5xl text-white items-center cursor-pointer fixed right-12 top-0 z-50"
            onClick={toggleBar}
          >
            x
          </button>
        ) : (
          <svg
            onClick={toggleBar}
            className="fixed  z-30 flex items-center cursor-pointer right-10 top-4"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}

        <div
          className={`top-0 right-0 w-[100vw] bg-black/90
                  text-white fixed h-full z-40  ease-in-out duration-300
                  flex flex-col justify-start items-center
                  pt-20 gap-20'
        ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}
        >
          <div className="flex gap-4 w-1/3">
            <Link onClick={toggleBar} to="/" className="text-2xl">
              Inicio
            </Link>
          </div>
          <div className="flex gap-4 w-1/3">
            <Link onClick={toggleBar} to="/about" className="text-2xl">
              Quiénes somos
            </Link>
          </div>
          <div className="flex gap-4 w-1/3">
            <Link onClick={toggleBar} to="/ourwork" className="text-2xl">
              Qué hacemos
            </Link>
          </div>
          <div className="flex gap-4 w-1/3">
            <Link onClick={toggleBar} to="/contact" className="text-2xl">
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* PC navigation */}
      <div className="font-poppins hidden lg:flex justify-between px-24 py-4 bg-neutral-100/90 shadow-md items-center select-none">
        <div className="flex items-center gap-2 text-xl group">
          <Link to="/" className="text-2xl">
            <span className="text-lime-700 font-semibold">I</span>mapro{" "}
            <span className="text-action font-semibold">Argentina</span>
          </Link>
        </div>
        <div className="flex gap-14 text-xl items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span>Inicio</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 group">
            <span>Quiénes somos</span>
          </Link>
          <Link to="/ourwork" className="flex items-center gap-2 group">
            <span>Qué hacemos</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 group">
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
