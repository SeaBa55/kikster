import React from "react";
import ImageSlider from "../../components/image-slider"
import {images, jumbotron}  from "../../images";
import './style.css';

const Home = () => {
    return (
        <div>
            <div className="jumbotron">
                <img
                src={jumbotron[0].url}
              className="img-fluid shadow-gradient"
              alt="test"
                />
                {console.log(jumbotron.url)}
            </div>
            <ImageSlider slides={images}/>
        </div>
    );
}
  
export default Home;