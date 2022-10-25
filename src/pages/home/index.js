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
                    className="img-fluid test"
                    alt="test"
                />
            </Card>
            <div style={{height: "50vh"}} className="bg-black container-fluid d-flex align-items-center justify-content-center"> 

            <h1 className="my-5 text-white">animated KIKSTER logo</h1>
           
            </div>
            <Card className="shadow-gradient-2">
                <div className="ofHidden">
                    <ImageSlider slides={images}/>
                </div>
            </Card>
        </div>
    );
}
  
export default Home;