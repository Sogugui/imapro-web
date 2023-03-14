import React from 'react';
import './About.css';

import 'animate.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import material tailwind

// import required modules
import { Autoplay, Navigation } from "swiper";

//assets
import carlos from '../../../assets/Ing. Carlos Rodolfo Guardia. Director. Esp en Ing. Ambiental y en H&S.png';
import martin from '../../../assets/Ing. José Martín Glavas. Asesor. Ing. Químico.png';
import isabel from '../../../assets/isabel.jpeg';
import juankot from '../../../assets/Juan Alberto Kot. Asesor. Arquitecto.png';
// import gustavo from '../../../assets/' PEDIR
import alejandro from '../../../assets/Alejandro Benítez. Asesor. Téc. en Gestión Ambiental.jpeg';
import title from '../../../assets/icons8-certification-64.png';
import labor from '../../../assets/icons8-maletín-50.png';
import mali from '../../../assets/Ing. Hidráulica María Elina Serrano[2493].jpeg';
import jorge from '../../../assets/jorgesolis.jpeg';
import sebastian from '../../../assets/Sebastián Patricio Welch. médico.jpeg';
import anabella from '../../../assets/WhatsApp Image 2023-01-20 at 22.58.18.jpeg';
import gervasoni from '../../../assets/WhatsApp Image 2023-01-25 at 23.38.22.jpeg';
import pedro from '../../../assets/WhatsApp Image 2023-02-23 at 19.03.23.jpeg';

// import assets for swiper slide
import swiper1 from '../../../assets/swiper1.png';
import swiper10 from '../../../assets/swiper10.png';
import swiper2 from '../../../assets/swiper2.png';
import swiper3 from '../../../assets/swiper3.png';
import swiper4 from '../../../assets/swiper4.png';
import swiper5 from '../../../assets/swiper5.png';
import swiper6 from '../../../assets/swiper6.png';
import swiper7 from '../../../assets/swiper7.png';
import swiper8 from '../../../assets/swiper8.png';
import swiper9 from '../../../assets/swiper9.png';

const About = () => {

  return (
    <div>
      {/* <h1 className=' titulares animate__animated animate__backInLeft'>Nuestra Empresa</h1> */}
      <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto max-h-7xl p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper1} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper2} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper3} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper4} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper5} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper6} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper7} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper8} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper9} />
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex '>
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <img src={swiper10} />
                </div>
              </SwiperSlide>

            </Swiper>

            <div>
              <header>
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">
                    <span className='text-lime-700' >IMAPRO </span>
                    viene de las siglas de

                    Ingeniería, Mediciones, Ambiente, Producción y Riesgo Operativo

                  </a>
                </h3>
              </header>
              <p className="text-xl text-gray-400 flex-grow">Somos una consultora dedicada a la ingeniería civil, que realiza inspección, medición y evaluación de proyectos tanto ambientales como productivos y a la capacitación de Recursos Humanos a cargo de profesionales técnicos y especialistas.

                Tiene el propósito de orientar a entidades tanto públicas como privadas, a incrementar la eficiencia de sus productos y servicios, teniendo en cuenta el mercado existente, futuro, el ambiente y su capacidad de producción.</p>
            </div>
          </article>
        </div>
      </section>
      {/* Equipo de la empresa */}
      <section>
        <h1 className='titulares animate__animated animate__bounce'>Conocé a parte del equipo</h1>
        <section className=" dark:bg-gray-900">
          <div className="container px-6 flex justify-center py-12 mx-auto items-center">
            <div className=" items-center sm:max-w-7xl sm:items-center lg:flex">
              <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                  <div>
                    <img className="w-full rounded-3xl h-64 object-cover"
                      src={carlos}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Ing. Carlos R. Guardia</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Fundador y Director general</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Ingeniero en vías de comunicación</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={martin}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Ing. José Martín Glavas</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Ingeniero Químico</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={isabel}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Dra. María Isabel Guillán</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesora Técnica</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Doctora en Lingüística</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={juankot}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Arq. Juan Alberto Kot</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Arquitecto</h1>
                    </div>
                  </div>

                  {/* <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={carlos}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Lic. Gustavo Carreras</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Lic. en Seguridad e Higiene en el Trabajo</h1>
                    </div>
                  </div> */}


                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={alejandro}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Téc. Alejandro Benítez</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Téc. en Gestión Ambiental</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={pedro}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Lic. Pedro Barrios</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Lic. en Gestión Ambiental</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={sebastian}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Dr. Sebastián Patricio Welsh</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Médico</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={jorge}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Dr. Jorge Solís Carnicer</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Médico Veterinario</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={mali}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Ing. María Elina Serrano</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesora Técnica</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Ingeniera Hidráulica</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={gervasoni}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Tec. Gonzalo Gervasoni</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesor Técnico</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Téc. en Seguridad e Higiene en el Trabajo</h1>
                    </div>
                  </div>

                  <div>
                    <img className="object-cover w-full rounded-3xl h-64 "
                      src={anabella}
                      alt="" />
                    <h2 className="mt-4 text-2xl font-semibold text-slate-100 capitalize dark:text-white">Téc. Anabella Fabiana Fernándezzº</h2>
                    <div className="flex items-center mt-4 px-1 text-slate-400">
                      <img src={labor} className="w-6 h-8 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-2">Asesora Técnica</h1>
                    </div>
                    <div className="flex items-center mt-4 text-slate-400 ">
                      <img src={title} className="w-9 h-9 fill-current" alt="" />

                      <h1 className=" text-lg tracking-wider text-slate-500  px-1">Téc. Maestro Mayor de Obras</h1>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>


      </section>


    </div>
  )
}

export default About