import React from 'react'
import './About.css'

import 'animate.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Navigation } from "swiper";

const About = () => {
 
  return (
    <div>
      <h1 className=' titulares animate__animated animate__backInLeft'>Nuestra Empresa</h1>
      <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><a className="relative block group" href="#0">
              <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg" width="540" height="303" alt="Blog post" />
                
              </figure>
            </a></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
            
            <div>
              <header>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">IMAPRO Argentina proviene de los nombres

                    Ingeniería, Mediciones, Ambiente y Producción.

                  </a>
                </h3>
              </header>
              <p className="text-lg text-gray-400 flex-grow">Somos una consultora dedicada a la ingeniería civil, que realiza inspección, medición y evaluación de proyectos tanto ambientales como productivos y a la capacitación de Recursos Humanos a cargo de profesionales técnicos y especialistas.

                Tiene el propósito de orientar a entidades tanto públicas como privadas, a incrementar la eficiencia de sus productos y servicios, teniendo en cuenta el mercado existente, futuro, el ambiente y su capacidad de producción.</p>
            </div>
          </article>
        </div>
      </section>

      
    </div>
  )
}

export default About