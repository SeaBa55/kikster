import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { portfolio }  from "../../portfolio";
import "./style.css";

const renderPortfolioCards = () => {
  let row = [];
  const size = portfolio.length-1;
  const rowWidth = 3;
  const fragment = [];
  for (let index = 0; index <= size; index++) {
    const collectRow = index && (index)%rowWidth === 0;
    const project = portfolio[index];
    const card = (
      <Card border="light" className="m-4 px-0" style={{ width: "20rem" }}>
        <Card.Img
          className="rounded-0 test2"
          style={{ height: "10rem" }}
          variant="top"
          src={project.primary_img}
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text className="mb-0 pb-1">
            {project.location}
          </Card.Text>
          <Card.Text>{project.desciption}</Card.Text>
            {/* <Button variant="link" className="ps-0 text-dark">
              <Link to="project">Learn More</Link>
              <span style={{ color: "green" }} className="ps-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
            </Button> */}
        </Card.Body>
      </Card>
    );
    if (collectRow) {
      fragment.push(
        [
          <div className="row d-flex justify-content-center mt-1 mb-3 text-start">
            {row}
          </div>
        ]
      );
      row = [card];
    } else {
      row.push(card);
    }
  };

  fragment.push(
    [
      <div className="row d-flex justify-content-center mt-1 mb-3 text-start">
        {row}
      </div>
    ]
  );
  
  return fragment
};

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="m-4 px-5 py-3 d-flex justify-content-start align-items-center">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="container">
        {renderPortfolioCards()}
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
