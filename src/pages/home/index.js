import React from "react";
import ImageSlider from "../../components/image-slider"
import Card from 'react-bootstrap/Card';
import {
    images, 
    jumbotron
}  from "../../images";
import './style.css';

const Home = () => {
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
            <div className="my-5 container-fluid border boder-1 boder-danger">
                <div className="row d-flex justify-content-center">
                    <Card className="mx-3" style={{ width: "18rem" }}>
                        <Card.Body>
                        <Card.Title>{entityCards[0].type}</Card.Title>
                        <Card.Text>{entityCards[0].description}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mx-3" style={{ width: "18rem" }}>
                        <Card.Body>
                        <Card.Title>{entityCards[1].type}</Card.Title>
                        <Card.Text>{entityCards[1].description}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mx-3" style={{ width: "18rem" }}>
                        <Card.Body>
                        <Card.Title>{entityCards[2].type}</Card.Title>
                        <Card.Text>{entityCards[2].description}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <h2>Quiénes Somos</h2>
                    <p>
                    Kikster es una firma de consultoría  especializada en la gestión de escenarios de naturaleza  que considera que el rol de las comunidades en el manejo de sus territorios representa una gran oportunidad que permite generar dinámicas socio económicas que contribuyen a la sostenibilidad,  apropiación del patrimonio cultural y ambiental de un destino y su área de influencia.</p>
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
      type: "Local Entrepreneur",
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
