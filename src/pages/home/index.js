import React, { useState } from "react";
import ImageSlider from "../../components/image-slider"
import { Card, Col, Container, Row } from 'react-bootstrap';
import {
    images, 
    homeIcons,
    jumbotron
}  from "../../images";
import './style.css';

const Home = () => {

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
                    className="img-fluid test"
                    alt="test"
                />
            </Card>
            <div 
                style={{height: "50vh"}} 
                className="bg-black container-fluid d-flex align-items-center justify-content-center"> 
                <h1 className="my-5 text-white">animated KIKSTER logo</h1>
            </div>
            <Card className="shadow-gradient-2 card-alt">
                <div className="ofHidden">
                    <ImageSlider slides={images}/>
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
  
export default Home;
