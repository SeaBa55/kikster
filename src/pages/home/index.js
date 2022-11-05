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

    // var _CURRENT_ANGLE = 0;
    const [currAngle, setCurrAngle] = useState(0);
    const [currIndex, setCurrIndex] = useState(0);

    // $("#button").on('click', function() {
    //     _CURRENT_ANGLE += 120;

    //     $("#parent-2").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
    //     $("#child-2").css({ transform: 'rotate(-' + _CURRENT_ANGLE + 'deg)' });
    // });

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
                <Container className="d-flex justify-content-center align-items-center services-container">
                    <Row>
                        <Col>
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
                                {/* <h2 className="entity-name style-1" style={{transform: `rotate(${-currAngle}deg)`}}>
                                    {entityCards[currIndex].type}
                                </h2> */}
                            </div>
                            <div className="d-flex justify-content-center entity-name-container">
                                <h2 className="entity-name style-1">
                                    {entityCards[currIndex].type}
                                </h2>
                            </div>
                        </Col>
                    </Row>
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
      type: "Government",
      icon: "",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      type: "Local Entrepreneurs",
      icon: "",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      type: "Nature",
      icon: "",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  
export default Home;
