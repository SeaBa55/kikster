import React from "react";
import { Card } from "react-bootstrap";
import './style.css';
import { projectImages } from "../../images";

const About = () => {
    return (
        <>
        <div className="container-fluid d-flex bg-black py-5 ">
            <h1 className="my-5 ps-3 fw-bold"><span className="underline-green">Acerca de Nos</span>otros</h1>
        </div>

        <div className="container mt-5">
            <div className="row d-flex text-start">

            <div className="col-sm-12 col-md-12 col-lg-7 themed-grid-col">

            <h2 className="py-3">Historia</h2>
            <p>Kikster SAS fue creado en el año 2014 para el desarrollo de soluciones tecnológicas en materia de consultoría en planeación y estrategia web, marketing, dirección de campañas publicitarias, creación y producción audiovisual.</p>
            <p>Hacia el año 2017 inicia una etapa de transformación orientando su enfoque creativo al sector del turismo especialmente en escenarios de naturaleza. A partir de este momento, empieza a generar acciones concretas en la operación de senderos naturales en la búsqueda permanente de la articulación entre la institucionalidad y los liderazgos de interpretación local que por años han protegido los lugares, haciendo recorridos responsables y protegiendo las zonas de conservación desde una mirada ambiental, social y económica realiza acompañamiento a la planificación ecoturística de emprendimientos sostenibles</p>
            <p>Hen la actualidad se orienta a promover la interacción para el desarrollo de las comunidades territoriales fomentando valores de respeto, unidad, trabajo colectivo y equidad.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 themed-grid-col">
            <Card.Img
            className="img-fluid"
            variant="top"
            src={projectImages[0].url}
          ></Card.Img>
            </div>
            </div>
            </div>
            
            <div className="container-fluid border border-solid border-danger mt-5 pt-5">
                {/* todo: SEE GOOGLE DOC FOR THE IMG && update margin and padding if needed */}
            <span className="fw-bold my-5 py-5">IMAGE BANNER GOES HERE</span> 
                {/* <Card.Img
                className="img-fluid"
                src=
            ></Card.Img> */}
          </div>

          <div className="container-fluid bg-logo-blue">
          <div className="row d-flex text-start justify-content-center">
            <div className="py-5 px-3 col-md-10 col-12">
            <h2 className="py-3">Nos inspira</h2>
            <p className="pb-3">El principio universal de derechos humanos por la libertad, la justicia y la paz: <span className="fw-bold fst-italic">“todas las personas somos iguales ante cualquier condición” </span> y el objetivo de desarrollo sostenible adoptado por Naciones Unidas <span className="fw-bold fst-italic">“Ciudades y comunidades sostenibles,”</span> como el marco fundamental para desarrollar acciones colectivas de formación personal y profesional para el desarrollo humano que impacten positivamente a la naturaleza.
            </p>
            <p className="mb-5 pb-3">Nos articulamos con las políticas públicas para dinamizar el turismo sostenible, promover la reactivación económica y, con ello, estimular la consolidación de emprendimientos comunitarios y rurales desde la gobernanza.</p>
            </div>
            </div>
            </div>
           
           <div className="container">
           <div className="row d-flex text-start">
            <div className="mt-5 col-sm-12 col-md-12 col-lg-5 themed-grid-col">
            <Card.Img
            className="img-fluid"
            variant="top"
            src={projectImages[0].url}
          ></Card.Img>
            </div>
            <div className="mt-5 col-sm-12 col-md-12 col-lg-7 themed-grid-col">
            <h2 className="py-3">El Plan de Ordenamiento Turístico</h2>
            <p>Este Plan es nuestro principal desarrollo, pues su aplicación de manera amplia integra todos los componentes que se pueden llevar a cabo  para el adecuado funcionamiento de un destino o atractivo, enfocándose en el fortalecimiento de las comunidades locales mediante el diseño colaborativo de un producto turístico ambicioso e innovador, aprovechando la riqueza natural, cultural y patrimonial del territorio y su área de influencia, con criterios de sostenibilidad ambiental y desarrollo comunitario.</p>
            <p>El diseño del Plan de Ordenamiento Turístico se fundamenta a partir de la localización y caracterización territorial y se desarrolla en tres etapas:</p>
            </div>
            <ul className="list-unstyled">
                <li className="py-2"><span className="fw-bold">Etapa diagnóstica:</span> Esta etapa permite hacer el análisis para determinar la situación actual del destino. Se lleva a cabo a través de la recopilación documental, con métodos cuantitativos (información secundaria, estadísticas, estudios previos), cualitativos (entrevistas, encuestas, mesas de trabajo), indagación consultiva bien sea de fuentes internas y/o externas para ser ordenados de manera sistemática. La etapa diagnóstica permite evidenciar el panorama del lugar y su área de influencia en los siguientes componentes:</li>
                <li className="py-2"><span className="fw-bold">Etapa de planeación:</span> En esta etapa se organizan las tareas que surgen luego del diagnóstico, se trazan objetivos y diseñan estrategias para el logro de los mismos. Permite definir los aspectos puntuales en el territorio, con el fin de establecer metodologías apropiadas para ser aplicadas en el área de influencia, diseñar planes de acción, establecer cronogramas y asignar presupuestos para el desarrollo de actividades. 
               </li>
               <li className="py-2"><span className="fw-bold">Etapa de ejecución:</span> En esta etapa se materializa lo planificado, se realiza el acompañamiento para la ejecución de manera conjunta (integración de actores) y se alinean los esfuerzos individuales con la estrategia para llevar a cabo el modelo de gestión con el desarrollo del Plan de Sostenibilidad. Dependiendo del alcance se realizan intervenciones y adecuaciones de la infraestructura, y señalización.</li>
            </ul>
            </div>
        </div>
        </>
    );
}
  
export default About;