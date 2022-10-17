import React from "react";
import ImageSlider from "../../components/image-slider"
import slides from "../../images";
import './style.css';

const Home = () => {
    return (
        <div>
            <h1 className="style-1">Home</h1>
            <ImageSlider slides={slides}/>
        </div>
    );
}
  
export default Home;