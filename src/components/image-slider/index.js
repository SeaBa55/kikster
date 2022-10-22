import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import './style.css';

const ImageSlider = ({slides}) => {

    const [currIndex, setCurrIndex] = useState(0);
    const [direction, setDirection] = useState(0);
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

    const mode = 'outer';
    const dist = 100;
    const effectType = {
        lead: [1, 1],
        inner: [-1, 1],
        outer: [1, -1],
        trail: [-1,-1]
    };

    const containerStyles = {
        overflow: 'hidden',
        width: '380px',
        height: '280px',
        margin: '0 auto',
        paddingBottom: '5%'
    };

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '95%',
        transform: 'translate(0, -50%)',
        left: '9%',
        forntSize: '60px',
        zIndex: 3,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '95%',
        transform: 'translate(0, -50%)',
        right: '9%',
        forntSize: '60px',
        zIndex: 3,
        cursor: 'pointer'
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
            opacity: scope ? 1 : 0.2,
            zIndex: scope ? 2 : 1
        };
    };

    const prev = () => {
        const isFirst = currIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
        setDirection(-1)
    };

    const next = () => {
        const isLast = currIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
        setDirection(1)
    }

    return (
        <div style={containerStyles}>
            <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prev}>👈</div>
                <div style={rightArrowStyles} onClick={next}>👉</div>
                <AnimatePresence initial="false" mode="popLayout">
                    {range.map(rangeIndex => {
                        let xInit = effectType[mode][0]*dist*direction;
                        let xExit = effectType[mode][1]*dist*direction;
                        return (
                            <motion.img
                                layout
                                key={rangeIndex} 
                                style={imageSliderStyles(rangeIndex)}
                                src = {slides[rangeIndex].url}
                                initial={{ 
                                    x: xInit, 
                                    scale: 0.8, 
                                    opacity: 0 
                                }}
                                animate={{
                                    // rotate: -360,
                                    x: 0, 
                                    scale: 1, 
                                    opacity: 0.9
                                }}
                                exit={{ 
                                    x: xExit, 
                                    scale: 0.8, 
                                    opacity: 0 
                                }}
                                transition={{
                                    opacity: { ease: "linear" },
                                    layout: { duration: 0.3 }
                                }}
                                // transition={{ type: 'spring', damping: 15 }}
                                // transition={{ type: "spring" }}
                                // transition={{ duration: 1 }}
                                // drag="x"
                                // dragConstraints={{ left: 0, right: 0 }}
                            />
                        )
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
  
export default ImageSlider;