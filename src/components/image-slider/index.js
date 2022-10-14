import React, { useState } from "react";
import './style.css';

const ImageSlider = ({slides}) => {

    const [currIndex, setCurrIndex] = useState(0);

    const containerStyles = {
        height: '100%',
        position: 'relative'
    };

    const imageSliderStyles = {
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currIndex].url})`,
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '10px',
        forntSize: '60px',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '10px',
        forntSize: '60px',
        zIndex: 1,
        cursor: 'pointer'
    };

    const prev = () => {
        const isFirst = currIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    };

    const next = () => {
        const isLast = currIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    }

    return (
        <>
            <h1>Image Slider Component</h1>
            <div style={containerStyles}>
                <div style={leftArrowStyles} onClick={prev}>👈</div>
                <div style={rightArrowStyles} onClick={next}>👉</div>
                <div style={imageSliderStyles}></div>
            </div>
        </>
    );
}
  
export default ImageSlider;