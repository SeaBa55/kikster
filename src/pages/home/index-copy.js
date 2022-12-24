import React from "react";
import { Card } from "react-bootstrap";
import ImageSlider from "../../components/image-slider";
import { images, jumbotron } from "../../images";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className=" container-fluid px-0">
        <img
          src={jumbotron[0].url}
          variant="top"
          className="img-fluid"
          alt="test"
        />
      </div>

      <div className="shadow-gradient-2 container-fluid">
        <div className="mt-3">
          <ImageSlider slides={images} />
        </div>
      </div>

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
    </>
  );
};

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