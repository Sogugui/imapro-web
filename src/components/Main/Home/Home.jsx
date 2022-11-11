import React from 'react'
import imaproblack from '../../../assets/imapro eslogan.jpg'

const Home = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
]
  return (

            <div className="bg-gray-900">    
                <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">   
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Somos una consultora dedicada a la ingeniería civil,que realiza
            <span className="text-lime-700"> inspección, medición y confección de proyectos </span>
            tanto ambientales como de procesos productivos.
          </h1>
        </div>
                    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                        <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                    </div>
                </section>
            </div>
        )
    }
  

export default Home