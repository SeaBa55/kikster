import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import './style.css';

const ImageSlider = ({slides}) => {

    const [currIndex, setCurrIndex] = useState(0);
    const [range, setRange] = useState([]);
    
    useEffect(() => {
       
    },[])

    const prev = () => {
        const isFirst = currIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    };
    
    const next = () => {
        const isLast = currIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    };

    const containerStyles = {
        width: '880px'
    };

    const carouselStyles = {
        cursor: 'grab',
        overflow: 'hidden',
        background: 'lightpink'
    };

    const innerCarouselStyles = {
        display: 'flex',
        background: 'lightblue'
    };

    const imgStyles = {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '2rem',
        pointerEvents: 'none'
    };
    
    const itemStyles = {
        minHeight: '40rem',
        minWidth: '30rem',
        padding: '40px',
    };

    return (
        <div style={containerStyles}>
            <motion.div className="carousel" style={carouselStyles}>
                <motion.div drag='x' dragConstraints={{right:0}} className="inner-carousel" style={innerCarouselStyles}>
                    {slides.map(image => {
                        return (
                            <motion.div style={itemStyles}>
                                <img src={image.url} style={imgStyles} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}
  
export default ImageSlider;