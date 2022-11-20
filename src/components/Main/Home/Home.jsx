import React from 'react'
import imaproblack from '../../../assets/imapro eslogan.jpg'
import './Home.css'
import target from '../../../assets/target-gb5c395d3f_1280.png'
import mision from '../../../assets/space-g3b52a94e6_1280.png'
import vision from '../../../assets/vision-gbdac8fcc2_1280.png'
const Home = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
]
const posts = [
  {
      title: "MISIÓN",
      desc:"Somos un equipo profesional de trabajo, buscamos ofrecer las mejores soluciones para nuestros clientes.Ademàs de ello, queremos que nuestros clientes concluyan satisfechos por nuestra labor ante sus necesidades.Queremos ser aliados de nuestros clientes, para poder elaborar sus ideas en proyectos y que los mismos se cumplan.",
      img: mision,

  },
  {
      title: "VISIÓN",
      desc: "Queremos que el nombre de IMAPRO sea conocido nacionalmente e internacionalmente por ofrecer las mejores calidades de soluciones y servicios de ingeniería.Además de elaborar los estrictos estándares de calidad, tiempo, seguridad y ambiente, proporcionando valor agregado a sus clientes y otras partes interesadas.",
      img: vision,

  },
  {
      title: "OBJETIVOS",
      desc: "Disminuir el impacto ambiental y prevenir riesgos que puedan ocasionar o atravesar las empresas u organizaciones. Tenemos como propósito orientar a entidades tanto publicas como privadas en el incremento de la eficiencia de sus productos y servicios, teniendo en cuenta el mercado existente, futuro, el ambiente y su capacidad de producción.",
      img: target,

  }
]
  return (
    <>
      <section className="topSection">
        <div className="headerDiv">
          <h1 className="headerText">
            Somos una consultora dedicada a la ingeniería civil,que realiza
            <span className="text-lime-700"> inspección, medición y confección de proyectos </span>
            tanto ambientales como de procesos productivos.
          </h1>
        </div>
        <div className="imgHeaderDiv">
          <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
      </section>

      <section>
        <h1 className='titulares animate__animated animate__backInLeft'>Nuestros pilares fundamentales </h1>
        <section className="cardsPilars">
          <div className="mt-8  grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {
              posts.map((items, key) => (
                <article className="flex items-center max-w-md mx-auto mb-[30px]  h-fit shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                  <a href={items.href} className="flex justify-center flex-col items-center">
                    <img src={items.img} loading="lazy" alt={items.title} className=" flex mt-2 items-end w-48 h-48 rounded-t-md" />
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