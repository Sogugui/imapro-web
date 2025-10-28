import React from "react";
import vision from "../../../assets/image vision.png";
import mision from "../../../assets/mission1.png";
import swiper1 from "../../../assets/swiper1.png";
import target from "../../../assets/target2.png";
import "./Home.css";
const Home = () => {
  const posts = [
    {
      title: "OBJETIVOS",
      desc: "Disminuir el impacto ambiental y prevenir riesgos que puedan ocasionar o atravesar las empresas u organizaciones. Tenemos como propósito orientar a entidades tanto publicas como privadas en el incremento de la eficiencia de sus productos y servicios, teniendo en cuenta el mercado existente, futuro, el ambiente y su capacidad de producción.",
      img: target,
    },
    {
      title: "MISIÓN",
      desc: "Somos un equipo profesional de trabajo, buscamos ofrecer las mejores soluciones para nuestros clientes.Ademàs de ello, queremos que nuestros clientes concluyan satisfechos por nuestra labor ante sus necesidades.Queremos ser aliados de nuestros clientes, para poder elaborar sus ideas en proyectos y que los mismos se cumplan.",
      img: mision,
    },
    {
      title: "VISIÓN",
      desc: "Queremos que el nombre de IMAPRO sea conocido nacional e internacionalmente por ofrecer las mejores calidades de soluciones y servicios de ingeniería.Además de elaborar los estrictos estándares de calidad, tiempo, seguridad y ambiente, proporcionando valor agregado a sus clientes y otras partes interesadas.",
      img: vision,
    },
  ];
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
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
                    Somos una consultora dedicada a la ingeniería civil,que
                    realiza
                    <span className="text-lime-700">
                      {" "}
                      inspección, medición y confección de proyectos{" "}
                    </span>
                    tanto ambientales como de procesos productivos.
                  </p>
                  {/* <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src={swiper1}
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="select-none">
        <h1 className="titulares animate__animated animate__backInLeft">
          Nuestros pilares fundamentales{" "}
        </h1>
        <section className="cardsPilars">
          <div className="mt-8  grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((items, key) => (
              <article
                className="flex items-center max-w-md mx-auto  h-full shadow-lg border rounded-md duration-300 hover:shadow-sm"
                key={key}
              >
                <a
                  href={items.href}
                  className="flex justify-center flex-col items-center"
                >
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className=" flex   w-screen max-h-fit rounded-t-md"
                  />
                  <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-slate-100">{items.title}</h3>
                    <p className="text-gray-400 text-lg mt-1">{items.desc}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
