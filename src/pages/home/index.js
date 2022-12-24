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
        <div>
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
            <div className="my-5 container-fluid">
                {/* <Container className="d-flex justify-content-center align-items-center services-container"> */}
                <Container className="services-container d-flex align-items-center">
                    <Container className="">
                        <Row>
                            <Col className="d-flex justify-content-start align-items-end">
                                <h3 className="style-1" style={{color: "darkblue"}} > 
                                    {entityCards[currIndex].decloration} 
                                </h3>
                            </Col>
                        </Row>
                        <Row className="services-container-partition">
                            <Col className="d-flex justify-content-center align-items-center">
                                <div className="spinner-container">
                                    <div 
                                        className="circle-path" 
                                        style={{transform: `rotate(${currAngle}deg)`}}
                                        onClick={rotate}
                                        >
                                        <div className="child" style={{transform: `rotate(${-currAngle}deg)`}}>
                                            <img src={homeIcons.gov}/>
                                        </div>
                                        <div className="child1" style={{transform: `rotate(${-currAngle}deg)`}}>
                                            <img src={homeIcons.nat}/>
                                        </div>
                                        <div className="child2" style={{transform: `rotate(${-currAngle}deg)`}}>
                                            <img src={homeIcons.bus}/>
                                        </div>
                                    </div>
                                    <div className="entity-name-container">
                                        <h2 className="entity-name style-1">
                                            {entityCards[currIndex].type}
                                        </h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-end">
                                <h3 className="style-1" style={{color: "darkblue"}}> 
                                    {entityCards[currIndex].description} 
                                </h3> 
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <div>
                    <h2>Servicios</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                        congue nunc volutpat risus fusce turpis lectus. Purus, gravida
                        sagittis accumsan sem odio sed. Malesuada tortor nibh nibh nulla nec
                        neque. Enim, suscipit auctor tristique pharetra, egestas risus urna
                        imperdiet felis. Suspendisse maecenas ut egestas donec fermentum.
                        Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id
                        pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum
                        maecenas molestie consequat congue.
                    </p>
                </div>
            </div>
        </div>
    );
}


// Entidades territoriales: Gobernaciones, alcaldías, entidades de gobierno. 

// Operadores turísticos: agencias de viaje, operadores de destino, operadores turísticos, operadores de turismo comunitario, emprendimientos,  y aquellos que  apuntan a ser operadores.


// Entidades de cooperación internacional.

const entityCards = [
    {
        decloration: "Kikster provides services for",
        type: "Government",
        icon: "",
        description: "Lorem ipsum dolor sit amet, consectetur 1",
    },
    {
        decloration: " Kikster is here to assist",
        type: "Local Entrepreneurs",
        icon: "",
        description: "Lorem ipsum dolor sit amet, consectetur 2",
    },
    {
        decloration: "At the core of Kikster is",
        type: "Nature",
        icon: "",
        description: "Lorem ipsum dolor sit amet, consectetur 3",
    },
];

// const entityCards = [
//     {
//         decloration: "Kikster provides services for",
//         type: "Government",
//         icon: "",
//         description: "Lorem ipsum dolor sit amet, consectetur 1",
//     },
//     {
//         decloration: " Kikster is here to assist",
//         type: "Local Entrepreneurs",
//         icon: "",
//         description: "Lorem ipsum dolor sit amet, consectetur 2",
//     },
//     {
//         decloration: "At the core of Kikster is",
//         type: "Nature",
//         icon: "",
//         description: "Lorem ipsum dolor sit amet, consectetur 3",
//     },
// ];
  
export default Home;
