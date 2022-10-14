import React from "react";
import ImageSlider from "../../components/image-slider"
import './style.css';

const Home = () => {

    const slides = [
        {
            title: "pika-1",
            url: `${process.env.PUBLIC_URL}/images/pika-0.jpg`
        },
        {
            title: "pika-2",
            url: `${process.env.PUBLIC_URL}/images/pika-1.jpg`
        },
        {
            title: "pika-3",
            url: `${process.env.PUBLIC_URL}/images/pika-2.jpg`
        },
        {
            title: "pika-4",
            url: `${process.env.PUBLIC_URL}/images/pika-3.jpg`
        },
        {
            title: "pika-5",
            url: `${process.env.PUBLIC_URL}/images/pika-4.jpg`
        },
    ];

    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto'
    };

    return (
        <div>
            <h1 className="style-1">Home</h1>
            <div style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
        </div>
    );
}
  
export default Home;