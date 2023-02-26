import React from 'react'
import imaproblack from '../../../assets/imapro eslogan.jpg'
import './Home.css'
import target from '../../../assets/target2.png'
import mision from '../../../assets/mission1.png'
import vision from '../../../assets/image vision.png'
import engineer from '../../../assets/engineerProfile.png'
const Home = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ]
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
      desc: "Queremos que el nombre de IMAPRO sea conocido nacionalmente e internacionalmente por ofrecer las mejores calidades de soluciones y servicios de ingeniería.Además de elaborar los estrictos estándares de calidad, tiempo, seguridad y ambiente, proporcionando valor agregado a sus clientes y otras partes interesadas.",
      img: vision,

    },

  ]
  return (
    <>
      <section className="topSection">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 px-6 sm:py-32 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <svg
            viewBox="0 0 1097 845"
            aria-hidden="true"
            className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
          >
            <path
              fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
              fillOpacity=".2"
              d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
            />
            <defs>
              <linearGradient
                id="10724532-9d81-43d2-bb94-866e98dd6e42"
                x1="1097.04"
                x2="-141.165"
                y1=".22"
                y2="363.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 1097 845"
            aria-hidden="true"
            className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
          >
            <path
              fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
              fillOpacity=".2"
              d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
            />
            <defs>
              <linearGradient
                id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                x1="1097.04"
                x2="-141.165"
                y1=".22"
                y2="363.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
        {/* <div className="headerDiv">
          <h1 className="headerText">
            Somos una consultora dedicada a la ingeniería civil,que realiza
            <span className="text-lime-700"> inspección, medición y confección de proyectos </span>
            tanto ambientales como de procesos productivos.
          </h1>
        </div>
        <div className="imgHeaderDiv">
          <img src={engineer} className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div> */}
      </section>

      <section>
        <h1 className='titulares animate__animated animate__backInLeft'>Nuestros pilares fundamentales </h1>
        <section className="cardsPilars">
          <div className="mt-8  grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {
              posts.map((items, key) => (
                <article className="flex items-center max-w-md mx-auto mb-[30px]  h-fit shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                  <a href={items.href} className="flex justify-center flex-col items-center">
                    <img src={items.img} loading="lazy" alt={items.title} className=" flex  items-end w-screen max-h-fit rounded-t-md" />
                    <div className="pt-3 ml-4 mr-2 mb-3">
                      <h3 className="text-xl text-slate-100">
                        {items.title}
                      </h3>
                      <p className="text-gray-400 text-lg mt-1">{items.desc}</p>
                    </div>
                  </a>
                </article>
              ))
            }
          </div>
        </section>
      </section>
    </>
  )
}


export default Home