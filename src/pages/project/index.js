import { Card } from "react-bootstrap";
import Banner from "../../components/banner";
import { projectImages } from "../../images";

const Project = () => {
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
            src={projectImages[0].url}
          ></Card.Img>
        </div>
      </div>

      <div className="container-fluid" style={{ position: "relative" }}>
        <div className="row d-flex justify-content-start mt-4 mt-md-0 ms-md-2">
          <h2 className="ms-5 py-2 col-6 col-lg-4 col-xl-3 bg-success text-white">
            Project Name
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
              Lobortis Quisque
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
                  class="bi bi-map-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
                  />
                </svg>
              </span>
              24,000 sq. ft.
            </p>
          </div>
        </div>

        <div className="ms-5 my-2 row d-flex justify-content-center text-start">
          <div className="col-4">
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
              Feb 2022
            </p>
          </div>
          <div className="col-4">
            <p className="text-sm-white">
              <span className="px-2 text-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>
              </span>
              Quisque
            </p>
          </div>
          <div className="col-4">
            <p className="text-sm-white">
              <span className="px-2 text-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-coin"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </span>
              570,000
            </p>
          </div>
        </div>
      </div>

      <div className="container border-top border-success border-3">
        <div className="mt-5 mt-md-0 d-flex row text-start">
          <h3 className="my-3">Donec Dolor Non</h3>
          <p>
            Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id
            pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum
            maecenas molestie consequat congue.
          </p>
          <div className="col-md-7">
            <h3 className="my-3">Vulputate morbi leo</h3>
            <p>
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
            </p>
            <h3 className="my-3">Amet</h3>
            <p>
              Viverra imperdiet amet accumsan blandit quis gravida urna enim,
              integer. Sit tellus mi tempor libero id. Proin pharetra, vulputate
              nunc enim, ac, lorem quis. Fermentum proin eget in eget maecenas
              imperdiet tristique. Odio massa, ipsum neque molestie sit purus,
              diam dolor tempor.
            </p>
          </div>
          <div className="col-md-5">
            <Card.Img
              className="rounded-0"
              style={{
                height: "600px",
                width: "400px",
                padding: "12px",
                objectFit: "cover",
              }}
              variant="top"
              src={projectImages[1].url}
            ></Card.Img>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
