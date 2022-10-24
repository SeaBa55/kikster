import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import './style.css';

const ImageSlider = ({slides}) => {

    const [currIndex, setCurrIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [range, setRange] = useState([]);
    const [elClicked, setElClicked] = useState(false);

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
        // width: '380px',
        // height: '280px',
        // width: '26%',
        width: '460px',
        // height: '50%',
        margin: '0 auto',
        // paddingTop: '10%',
        paddingBottom: '3.5%'
        // marginTop: '5%',
        // marginBottom: '5%'
    };

    const sliderStyles = {
        height: '50%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '0%',
        fontSize: '40px',
        zIndex: 3,
        cursor: 'pointer',
        color: 'white'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '0%',
        fontSize: '40px',
        zIndex: 3,
        cursor: 'pointer',
        color: 'white'
    };

    const imageSliderDivStyles = (scope, side) => {
        return {
            position: scope ? 'relative' : 'absolute',
            [side]: scope ? '0' : '10%',
            // height: scope ? '100%' : '80%',
            width: scope ? '50%' : '40%',
            border: scope && elClicked ? '2px solid white' : 'none',
            boxShadow: scope ? '0px 10px 10px -5px #888888' : '0px 5px 10px 0px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: scope ? '1' : '0.2',
        };
    };

    const imageSliderImgStyles = {
        // position:'absolute',
        // height: '100%',
        width: '100%',
        pointerEvents: 'none'
    };

    const imageSliderSubDivStyles = (scope, side) => {
        return {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '50%',
            transform: 'translate(0, -50%)',
            // right: '0%',
            // fontSize: '40px',
            // zIndex: 3,
            cursor: 'pointer',
            // color: 'white',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0), black)',
            backgroundColor: 'black',
            opacity: scope ? '0.0' : '0.5',
            // pointerEvents: 'none'
        }
    };

    const prev = () => {
        const isFirst = currIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
        setDirection(-1);
        setElClicked(false);
    };

    const next = () => {
        const isLast = currIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
        setDirection(1);
        setElClicked(false);
    };

    const frameClick = (rangeIndex, side) => {
        const dir = side === "left" ? -1 : 1
        if (rangeIndex !== currIndex) {
            setCurrIndex(rangeIndex);
            setElClicked(true);
            setDirection(dir);
        }
    };

    const frameDrag = (event, rangeIndex, side) => {
        console.log(event)
        // console.log(event.offsetX, event.offsetY)
        console.log(event.movementX, event.movementY) // direction
        console.log(event.pageX, event.pageY) // distance

        const dir = side === "left" ? -1 : 1
        if (rangeIndex !== currIndex) {
            setCurrIndex(rangeIndex);
            setElClicked(true);
            setDirection(dir);
        }
    };

    const detectSide = (rangeIndex) => {
        const rangeIndexPos = range.findIndex(element => element === rangeIndex);
        const currentPos = range.findIndex(element => element === currIndex);
        return rangeIndexPos < currentPos ? "left" : "right";
    }

    return (
        <div style={containerStyles}>
            <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prev}>❮</div>
                <div style={rightArrowStyles} onClick={next}>❯</div>
                <AnimatePresence initial="false" mode="popLayout">
                    {range.map(rangeIndex => {
                        const xInit = effectType[mode][0]*dist*direction;
                        const  xExit = effectType[mode][1]*dist*direction;
                        const scope = rangeIndex === currIndex;
                        const side = detectSide(rangeIndex);
                        return (
                            <motion.div
                                layout
                                key={rangeIndex}
                                onClick={() => frameClick(rangeIndex, detectSide(rangeIndex))}
                                onDrag={event => frameDrag(event, rangeIndex, detectSide(rangeIndex))}
                                style={imageSliderDivStyles(scope, side)}
                                initial={{ 
                                    x: xInit, 
                                    scale: 0.8, 
                                    opacity: 0.0,
                                }}
                                animate={{
                                    // rotate: -360,
                                    x: 0, 
                                    scale: 1, 
                                    // opacity: scope ? 1.0 : 0.5,
                                    opacity: 1.0,
                                    zIndex: scope ? 3 : 2
                                }}
                                exit={{ 
                                    x: xExit, 
                                    scale: 0.8, 
                                    opacity: 0.0
                                }}
                                transition={{
                                    opacity: { ease: "linear" },
                                    layout: { duration: .6 }, 
                                    // zIndex: { ease: "linear",
                                    // duration: 0.6 }
                                }}
                                // transition={{ type: 'spring', damping: 15 }}
                                // transition={{ type: "spring" }}
                                // transition={{ duration: 1 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                // dragListener={false}
                            >
                                <motion.img 
                                    style={imageSliderImgStyles} 
                                    src = {slides[rangeIndex].url}
                                />
                                <motion.div style={imageSliderSubDivStyles(scope, side)}>
                                    hello
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
  
export default ImageSlider;