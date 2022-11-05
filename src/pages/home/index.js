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
