import React from "react";
import { Button, Card, Dropdown, Form, InputGroup } from "react-bootstrap";
import SearchFilterBarComponent from "../../components/search-filter-bar";
import { portfolioImages } from "../../images";
import "./style.css";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="m-4 px-5 py-3 d-flex justify-content-start align-items-center">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="container">
        <SearchFilterBarComponent></SearchFilterBarComponent>       

        <div className="row d-flex justify-content-center mt-1 mb-3 text-start">
            {/* Create component for cards */}
          <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded-0"
              style={{ height: "15rem" }}
              variant="top"
              src={portfolioImages[0].url}
            ></Card.Img>
            <Card.Body>
              <Card.Title>{entityCards[0].type}</Card.Title>
              <Card.Text className="mb-0 pb-1">
                {entityCards[0].location}
              </Card.Text>
              <Card.Text>{entityCards[0].description}</Card.Text>
              <Button href="#" variant="link" className="ps-0 text-dark">
                Learn More
                <span style={{ color: "green" }} className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </Button>
            </Card.Body>
          </Card>
          <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded-0"
              style={{ height: "15rem" }}
              variant="top"
              src={portfolioImages[1].url}
            ></Card.Img>
            <Card.Body>
              <Card.Title>{entityCards[0].type}</Card.Title>
              <Card.Text className="text-start mb-0 pb-1">
                {entityCards[0].location}
              </Card.Text>
              <Card.Text>{entityCards[0].description}</Card.Text>
              <Button href="#" variant="link" className="ps-0 text-dark">
                Learn More
                <span style={{ color: "green" }} className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </Button>
            </Card.Body>
          </Card>
          <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded-0"
              style={{ height: "15rem" }}
              variant="top"
              src={portfolioImages[2].url}
            ></Card.Img>
            <Card.Body>
              <Card.Title>{entityCards[0].type}</Card.Title>
              <Card.Text className="text-start mb-0 pb-1">
                {entityCards[0].location}
              </Card.Text>
              <Card.Text>{entityCards[0].description}</Card.Text>
              <Button href="#" variant="link" className="ps-0 text-dark">
                Learn More
                <span style={{ color: "green" }} className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="row d-flex justify-content-center my-3 text-start">
          <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded-0"
              style={{ height: "15rem" }}
              variant="top"
              src={portfolioImages[3].url}
            ></Card.Img>
            <Card.Body>
              <Card.Title>{entityCards[0].type}</Card.Title>
              <Card.Text className="mb-0 pb-1">
                {entityCards[0].location}
              </Card.Text>
              <Card.Text>{entityCards[0].description}</Card.Text>
              <Button href="#" variant="link" className="ps-0 text-dark">
                Learn More
                <span style={{ color: "green" }} className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </Button>
            </Card.Body>
          </Card>
          <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded-0"
              style={{ height: "15rem" }}
              variant="top"
              src={portfolioImages[4].url}
            ></Card.Img>
            <Card.Body>
              <Card.Title>{entityCards[0].type}</Card.Title>
              <Card.Text className="text-start mb-0 pb-1">
                {entityCards[0].location}
              </Card.Text>
              <Card.Text>{entityCards[0].description}</Card.Text>
              <Button href="#" variant="link" className="ps-0 text-dark">
                Learn More
                <span style={{ color: "green" }} className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </Button>
            </Card.Body>
          </Card>
          <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded-0"
              style={{ height: "15rem" }}
              variant="top"
              src={portfolioImages[5].url}
            ></Card.Img>
            <Card.Body>
              <Card.Title>{entityCards[0].type}</Card.Title>
              <Card.Text className="text-start mb-0 pb-1">
                {entityCards[0].location}
              </Card.Text>
              <Card.Text>{entityCards[0].description}</Card.Text>
              <Button href="#" variant="link" className="ps-0 text-dark">
                Learn More
                <span style={{ color: "green" }} className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

let entityCards = [
  {
    type: "PROJECT NAME",
    location: "CITY",
    description:
      "Ipsum faucibus nec tellus orci nunc facilisi aliquet sapien. Phasellus sollicitudin lorem morbi suspendisse mattis. Tellus quis venenatis interdum adipiscing sem.",
  },
];

export default Portfolio;
