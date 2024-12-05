import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Banner from "../../components/banner";
import { portfolio } from "../../portfolio";
import { startCase } from "lodash";

const Project = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(false);

  useEffect(() => {
    const project = portfolio.find(item => item.id === projectId);

    if (project) { 
      setProject(project);
    } else { 
      navigate(-1);
    };
  }, [])
  
  return (
    <>
      <Banner></Banner>
      <div className="container-fluid">
        <div className="text-start d-none d-md-block ms-4">
          <Card.Img
            className="rounded-0 img-fluid"
            style={{
              height: "400px",
              width: "auto",
              top: "5vh",
              left: "10px",
              position: "relative",
            }}
            variant="top"
            src={project.primary_img}
          ></Card.Img>
        </div>
      </div>
      <div className="container-fluid" style={{ position: "relative" }}>
        <div className="row d-flex justify-content-start mt-4 mt-md-0 ms-md-2">
          <h2 className="ms-5 py-2 col-6 col-lg-4 col-xl-3 bg-success text-white">
            {/* Project Name */}
            {startCase(project.id)}
          </h2>
        </div>
        <div className="ms-5 my-3 row d-flex justify-content-center text-start">
          <div className="col-6">
            <p className="text-sm-white">
              <span className="px-2 text-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </span>
              {/* Lobortis Quisque */}
              {project.location}
            </p>
          </div>
          <div className="col-6">
            <p className="text-sm-white">
              <span className="px-2 text-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar-date-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                  <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                </svg>
              </span>
              {/* Feb 2022 */}
              {project.date}
            </p>
          </div>
        </div>

        
      </div>

      <div className="container border-top border-success border-3">
        <div className="mt-5 mt-md-0 d-flex row text-start">
          {/* <h3 className="my-3">Donec Dolor Non</h3>
          <p>
            Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id
            pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum
            maecenas molestie consequat congue.
          </p> */}
          <div className="col-md-7">
            <h3 className="my-3">{project.title}</h3>
            {project.desciption}
            {/* <p>
              Risus turpis feugiat eu, mauris etiam sit amet dolor ipsum.
              Pretium nunc consectetur ac quis. Neque euismod proin tortor
              turpis ornare magna id vestibulum. Egestas aliquam vitae, integer
              egestas placerat aenean vitae. Ac eget ullamcorper vestibulum et
              in felis, sagittis. Lorem ut morbi morbi quisque tortor at
              vulputate platea. Ut nisi, tellus nulla nulla molestie vulputate
              interdum etiam ultrices. Nunc, viverra lectus ultrices amet purus
              eu quam.
            </p>
            <p>
              Turpis sociis duis sapien et, netus morbi. Sed tristique lectus
              massa mattis non mattis in mus rhoncus. Volutpat mattis sociis
              duis aliquam. Luctus interdum ornare laoreet quam lectus amet.
              Imperdiet convallis pellentesque sed turpis leo posuere est. Eu
              vel dignissim sem massa tempus sit. Vitae, sed id nunc libero
              vitae ridiculus pharetra.
            </p> */}
            {/* <h3 className="my-3">Amet</h3>
            <p>
              Viverra imperdiet amet accumsan blandit quis gravida urna enim,
              integer. Sit tellus mi tempor libero id. Proin pharetra, vulputate
              nunc enim, ac, lorem quis. Fermentum proin eget in eget maecenas
              imperdiet tristique. Odio massa, ipsum neque molestie sit purus,
              diam dolor tempor.
            </p> */}
          </div>
          <div className="col-md-5">
            {project.secondary_img && <Card.Img
              className="rounded-0"
              style={{
                height: "600px",
                width: "535px",
                padding: "12px",
                objectFit: "cover",
              }}
              variant="top"
              src={project.secondary_img}
            ></Card.Img>}
            {false && <>
              <p className="ps-3">
                <span className="text-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </span>{" "}
                Print
              </p>
              <p className="ps-3">
                <span className="text-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-pdf-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                    <path
                      fill-rule="evenodd"
                      d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                    />
                  </svg>
                </span>{" "}
                Download
              </p>
            </>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
