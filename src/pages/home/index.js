import React, { useState } from "react";
import ImageSlider from "../../components/image-slider"
import { Card, Col, Container, Row } from 'react-bootstrap';
import { portfolio }  from "../../portfolio";
import {
    images,
    portfolioImages,
    homeIcons,
    jumbotron
}  from "../../images";
import './style.css';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Home = () => {
    const baseURL = process.env.PUBLIC_URL; 
    const [currAngle, setCurrAngle] = useState(0);
    const [currIndex, setCurrIndex] = useState(0);

    const rotate = () => {
        setCurrAngle(currAngle + 120);
        setCurrIndex(currIndex === 2 ? 0 : currIndex + 1)
    }

    return (
        <>
            <Card className="shadow-gradient card-alt">
                <Card.Img
                    src={jumbotron[0].url}
                    variant="top"
                    className="test"
                    alt="test"
                />
            </Card>
            
            <div 
                style={{height: "20vh"}} 
                className="bg-black container-fluid d-flex flex-column align-items-center justify-content-center"
            > 
                {/* <h1 className="my-5 text-white">Kikster_Oficial_Recuadros_v2.png</h1> */}
                <Row>
                    <img
                        src={`${baseURL}/Kikster_Oficial_Transparente_Name.png`}
                        // style= {iconImageStyle}
                        width="386"
                        height="59"
                        className="d-inline-block align-top"
                        alt="Kikster logo"
                    />
                </Row>
                <Row>
                    <AnimatePresence initial="false" mode="popLayout">
                        <motion.div
                            initial={{ 
                                y: 10,
                            }}
                            animate={{ 
                                y: 20,
                            }}
                            exit={{ 
                                y: 0,
                            }}
                            transition={{
                                delay: 0.7,
                                type: 'spring',
                                // bounce: .5,
                                opacity: { 
                                    ease: "linear",
                                    duration: 1
                                }
                            }}
                        >
                            ⯆
                        </motion.div>
                    </AnimatePresence>
                </Row>
            </div>

            <Card className="shadow-gradient-2 card-alt">
                <div className="ofHidden">
                    <ImageSlider slides={portfolio}/>
                </div>
            </Card>
 
            <div className="container">
                <div className="row d-flex">
                    <h2 className="py-3">Quiénes Somos</h2>
                    <p className="text-start">Kikster es una firma de consultoría  especializada en la gestión de escenarios de naturaleza  que considera que el rol de las comunidades en el manejo de sus territorios representa una gran oportunidad que permite generar dinámicas socio económicas que contribuyen a la sostenibilidad,  apropiación del patrimonio cultural y ambiental de un destino y su área de influencia.</p>
    
                    {/* add link to learn more and redirect to the about page */}
                </div>
            </div>

            <div className="container mt-3">
                <div className="row d-flex text-start">
                    <div className="mt-5 col-sm-12 col-md-12 col-lg-6 themed-grid-col">
                        <h3>{entityCards[0].type}</h3>
                        <p>{entityCards[0].description}</p>       
                        <h3>{entityCards[1].type}</h3>
                        <p>{entityCards[1].description}</p> 
                    </div>
                    <div className="mt-5 col-sm-12 col-md-12 col-lg-6 themed-grid-col">
                        <h3>{entityCards[2].type}</h3>
                        <p>{entityCards[2].description}</p>  
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row d-flex my-3">
                    <h2>Para Quién lo Hacemos</h2>
                    <ul className="mx-5 col-md-5 text-start">
                        <li>Destinos con vocación de uso público.</li>
                        <li>Entidades territoriales: Gobernaciones, alcaldías, entidades de gobierno.</li>
                        <li>Operadores turísticos: agencias de viaje, operadores de destino, operadores turísticos, operadores de turismo comunitario, emprendimientos,  y aquellos que  apuntan a ser operadores.</li>
                        <li>Entidades de cooperación internacional.</li>
                    </ul>                
                </div>

                <div className="row d-flex my-3">
                    <h2>Qué Más Podemos Hacer </h2>
                    <ul className="mx-5 col-md-5 text-start">
                        <li>Diseño de estrategias de fortalecimiento para iniciativas orientadas al diseño de productos ecoturísticos.</li>
                        <li>Acompañamiento a emprendimientos basados en proyectos de ecoturismo.</li>
                        <li>Estudios de capacidad de carga para escenarios de naturaleza (senderos ecológicos, rondas hídricas, parques ecológicos, topografía de montaña)</li>
                        <li>Elaboración de cartografías sociales, análisis de roles, niveles de relacionamiento y estrategias para promover nuevas formas de comunicación.</li>
                        <li>Acompañamiento para el fortalecimiento de proyectos de turismo comunitario como alternativa de emprendimiento y desarrollo para los territorios.</li>
                        <li>Planificación interpretativa para el acercamiento al patrimonio natural y cultural desde la construcción colectiva.</li>
                        <li>Diseño de estrategias de mitigación de impactos ambientales causados por factores antrópicos.</li>
                        <li>Elaboración de protocolos de uso, protocolos de seguridad turística y bioseguridad.</li>
                        <li>Diseño de modelos de operación desde la gobernanza con administración sustentable, eficiente y sostenible.</li>
                    </ul>                
                </div>
            </div>
        </>
    );
}

const entityCards = [
    {
      type: "Gestión Social",
      icon: "",
      description: "Construir tejido social a través de la participación de la comunidad y en donde se busca que sea esta misma la encargada de asegurar el funcionamiento del escenario.",
    },
    {
      type: "Gestión Ambiental",
      icon: "",
      description: "El paisaje es el marco de referencia, allí se identifica, se protege y se le otorga el valor preponderante a su riqueza. La educación ambiental es, por lo tanto, un eje fundamental del desarrollo del escenario y su área de influencia.",
    },
    {
      type: "Gestión Turística",
      icon: "",
      description: "Es definitivo fortalecer la red física de infraestructura (planta turística), así como las experiencias de recreación y de visita. En tal sentido,  elementos como miradores, senderos, muelles, aulas ambientales, accesos  y servicios turísticos deben guardar concordancia con la  visión del escenario de naturaleza, soportado todo en la formulación de planes de operación y financiamiento que permitan asegurar  el correcto desarrollo del turismo.",
    },
  ];
  
export default Home;
