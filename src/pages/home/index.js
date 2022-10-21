import React from "react";
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

      <div class="shadow-gradient-2 container-fluid">
        <div className="mt-3">
        <ImageSlider slides={images} />
        </div>
    
    
      </div>
    </>
  );
};

export default Home;
