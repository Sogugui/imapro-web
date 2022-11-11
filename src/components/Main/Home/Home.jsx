import React from 'react'
import imaproblack from '../../../assets/imapro eslogan.jpg'
import './Home.css'

const Home = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
]
const posts = [
  {
      title: "MISIÓN",
      desc:"Somos un equipo profesional de trabajo, buscamos ofrecer las mejores soluciones para nuestros clientes.Ademàs de ello, queremos que nuestros clientes concluyan satisfechos por nuestra labor ante sus necesidades.Queremos ser aliados de nuestros clientes, para poder elaborar sus ideas en proyectos y que los mismos se cumplan.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  },
  {
      title: "VISIÓN",
      desc: "Queremos que el nombre de IMAPRO sea conocido nacionalmente e internacionalmente por ofrecer las mejores calidades de soluciones y servicios de ingeniería.Además de elaborar los estrictos estándares de calidad, tiempo, seguridad y ambiente, proporcionando valor agregado a sus clientes y otras partes interesadas.",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  },
  {
      title: "OBJETIVOS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida leo eget mi vestibulum, sit amet dapibus turpis mattis. In sit amet magna ut justo fringilla consequat sed et erat. Nunc quis placerat diam. Maecenas tempor luctus diam, id semper ex semper vitae. Fusce at ullamcorper nunc, ut lacinia erat. Morbi a nisl nec metus tristique tristique eget in nibh.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

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
                <article className="max-w-md mx-auto mb-[30px] h-fit shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                  <a href={items.href}>
                    <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />
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