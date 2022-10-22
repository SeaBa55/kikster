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
            <Card className="shadow-gradient">
                <Card.Img
                    src={jumbotron[0].url}
                    variant="top"
                    className="img-fluid"
                    alt="test"
                />
            </Card>
            <Card className="shadow-gradient-2">
                <ImageSlider slides={images}/>
            </Card>
        </div>
    );
}
  
export default Home;