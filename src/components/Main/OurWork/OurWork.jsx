import React from 'react'
import gestion from '../../../assets/gestionAMb.jpg'
import ingenieria from '../../../assets/ingenieria.jpg'
import mantenimiento from '../../../assets/mantenimin.jpg'
import seminarios from '../../../assets/seminarios.jpg'
import planeamiento from '../../../assets/PLANEAMMM.jpg'
import hys from '../../../assets/hys.jpg'
import drone from '../../../assets/drone.jpg'
import paneles from '../../../assets/paneles.jpg'

const OurWork = () => {
  return (<section className="bg-gray-900 min-h-screen w-full text-gray-200">
    <div className="container px-6 py-10 mx-auto">
    <h1 className="animate__animated animate__backInDown text-3xl font-semibold capitalize lg:text-4xl">Nuestros servicios</h1>

        <p className="mt-4 text-gray-100 text-2xl xl:mt-6 dark:text-gray-300">
          
IMAPRO tiene como objetivo brindarle soluciones a las distintas necesidades de cada cliente, proporcionando un servicio con eficiencia y calidad, contamos con personal idóneo con experiencia, así como profesionales capacitados en el rubro.

Utilizamos productos, recursos y materiales de primera calidad, con el fin de que sólo tenga el placer de disfrutar y administrar su tiempo. Para ello, tener en cuenta que nuestros presupuestos son altamente competitivos en el mercado actual.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 h-1/3">

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400">
                <img src={gestion} className='w-[280px] h-[240px]' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">SERVICIOS DE GESTIÓN AMBIENTAL</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Estudios de Impacto Ambiental.</li>
                    <li>- Adecuaciones productivas en relación con el Ambiente.</li>
                    <li>- Manejo de Residuos Peligrosos.</li>
                    <li>- Proyectos y Programas de Residuos Sólidos Municipales.</li>
                    <li>- Representación Técnica Ambiental exigidas por contratos de obra.</li>
                    <li>- Gestión Ambiental Responsabilidad Ambiental de Obras.</li>
                </ol>
            </div>

           <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400">
                <img src={ingenieria} className='w-[280px] h-[240px]' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">SERVICIOS DE INGENIERÍA</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Inspección de Obras Civiles.</li>
                    <li>- Inspección de Obras Hidráulicas.</li>
                    <li>- Inspección de Obras Viales.</li>
                    <li>- Inspecciones Ambientales de Obras.</li>
                    <li>- Mediciones y Relevamientos de Obra.</li>
                    <li>- Mediciones Ambientales. (particulado, ruidos, suelo y agua).</li>
                    <li>- Manejo de Residuos Peligrosos.</li>
                    
                </ol>
            </div>

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400">
                <img src={mantenimiento} className='w-[280px] h-[240px]' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">MANTENIMIENTO Y SERVICIOS</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Mantenimiento en espacios verdes Públicos y Privados.</li>
                    <li>- Realizamos podas y destronques.</li>
                    <li>- Suministros y colocación de césped y plantas ornamentales.</li>
                    <li>- Fumigaciones en propiedades públicas y privadas.</li>
                    <li>- Servicio de pintura en lugares privados y públicos</li>
                    <li>- Servicio de albañilería y plomería.</li>
                    <li>- Servicio de instalación de electricidad.</li>
                </ol>
            </div>

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400">
                <img src={seminarios} className='w-[280px] h-[240px]' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">SEMINARIOS</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                  <p>Los siguientes seminarios se dictan en forma individual o colectiva y están dirigidos a ejecutivos y  al personal de cualquier empresa u organismo. Las mismas incluyen:</p>
                    <li>- Buenas Prácticas Ambientales.</li>
                    <li>- Herramientas de Administración para Ejecutivos.</li>
                    <li>- Como ejecutar un programa.</li>
                    <li>- Contratación de Recursos Humanos.</li>
                    <li>- Imagen y Relaciones Públicas.</li>
                    <li>- Educación y Competencia laboral.</li>
                    <li>- Ética Empresarial.</li>
                </ol>
            </div>

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400">
                <img src={planeamiento} className='w-[280px] h-[240px]' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">PLANEAMIENTO</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Dirección de una investigación  metódica, realizada  por profesionales que se requieran en el área y reportes de progreso permanentes sin tener que abandonar sus obligaciones ejecutivas.</li>
                    <li>-  Un programa detallado para seguir paso a paso reduciendo en un altísimo porcentaje la especulación y la improvisación.</li>
                    <li>- Una certeza de poder tener resultados en un tiempo estipulado según la dificultad y cantidad de la tarea de investigación, planificación y  ejecución demandada.</li>
                    <li>- Considerable reducción de tiempo de ejecución (en un 30% o 40%) y ahorro de  dinero en el corto y largo plazo.</li>
                    <li>- Una garantía de éxito mucho mayor.</li>
                </ol>
            </div>

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400">
                <img src={hys} className='w-[280px] h-[240px]' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">SERVICIOS DE HIGIENE Y SEGURIDAD EN EL TRABAJO</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Dirección de una investigación  metódica, realizada  por profesionales que se requieran en el área y reportes de progreso permanentes sin tener que abandonar sus obligaciones ejecutivas.</li>
                    <li>-  Un programa detallado para seguir paso a paso reduciendo en un altísimo porcentaje la especulación y la improvisación.</li>
                    <li>- Una certeza de poder tener resultados en un tiempo estipulado según la dificultad y cantidad de la tarea de investigación, planificación y  ejecución demandada.</li>
                    <li>- Considerable reducción de tiempo de ejecución (en un 30% o 40%) y ahorro de  dinero en el corto y largo plazo.</li>
                    <li>- Una garantía de éxito mucho mayor.</li>
                </ol>
            </div>

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400 ">
                <img src={drone} className='w-[280px] h-[240px] ' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">SERVICIO DE RELEVAMIENTO AÉREO</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Relevamiento de obras en ejecución.</li>
                    <li>- Relevamiento de zonas rurales anegadas.</li>
                </ol>
            </div>

            <div className="p-8 space-y-3 border-2 border-lime-700  rounded-xl hover:scale-110 transition-transform">
                <span className="inline-block text-blue-100 dark:text-blue-400 ">
                <img src={paneles} className='w-[280px] h-[240px] ' alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-gray-200 capitalize dark:text-white">LUMINARIAS SOLARES</h1>

                <ol className=" text-xl text-gray-100 dark:text-gray-300 flex flex-col items-start text-left">
                    <li>- Desarrollamos los proyectos de alumbrado público de forma conjunta con nuestros clientes. Proporcionamos un servicio todo en uno, desde la fabricación de las estructuras hasta la ejecución completa de los proyectos, incluyendo la provisión y montaje.</li>
                </ol>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurWork