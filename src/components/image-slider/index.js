import React, { useEffect, useState } from "react";
import './style.css';

const ImageSlider = ({slides}) => {

    const [currIndex, setCurrIndex] = useState(0);
    const [range, setRange] = useState([]);
    
    useEffect(() => {
        const array = 
        [
        currIndex - 1 < 0 ? slides.length - 1 : currIndex - 1,
        currIndex,
        currIndex + 1 > slides.length - 1 ? 0 : currIndex + 1
        ];
        setRange(array);
    },[currIndex])

    const containerStyles = {
        width: '380px',
        height: '280px',
        margin: '0 auto'
    };

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const imageSliderStyles = (rangeIndex) => {
        const scope = rangeIndex === currIndex;
        return {
            position:'relative',
            height: scope ? '100%' : '80%',
            width: scope ? '50%' : '20%',
            borderRadius: '1px',
            boxShadow: scope ? '0px 15px 10px -5px #888888' : '0px 5px 10px 0px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${slides[rangeIndex].url})`,
        };
    };
    
    const leftArrowStyles = {
        position: 'absolute',
        top: '95%',
        transform: 'translate(0, -50%)',
        left: '9%',
        forntSize: '60px',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '95%',
        transform: 'translate(0, -50%)',
        right: '9%',
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
        <div style={containerStyles}>
            <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prev}>👈</div>
                <div style={rightArrowStyles} onClick={next}>👉</div>
                {range.map(rangeIndex => {
                    return <div style={imageSliderStyles(rangeIndex)}></div>
                })}
            </div>
        </div>
    );
}
  
export default ImageSlider;