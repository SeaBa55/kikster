import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import './style.css';

const ImageSlider = ({slides}) => {

    const [currIndex, setCurrIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [range, setRange] = useState([]);
    const [elClicked, setElClicked] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [elDragged, setElDragged] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const mode = 'outer';
    const dist = 100;
    const effectType = {
        lead: [1, 1],
        inner: [-1, 1],
        outer: [1, -1],
        trail: [-1,-1]
    };

    useEffect(() => {
        window.addEventListener('load', handleResize);
        window.addEventListener("resize", handleResize);
    })

    useEffect(() => {
        const array =  [];

        const second =  calcNext(currIndex,'prev');
        const first = calcNext(second, 'prev');
        const fourth = calcNext(currIndex, 'next');
        const fifth = calcNext(fourth, 'next');

        !isMobile && array.push(first);
        array.push(second);
        array.push(currIndex);
        array.push(fourth);
        !isMobile && array.push(fifth);

        setRange(array);
    },[currIndex, isMobile]);

    const calcNext = (current, action) => {
        if (action === 'prev') {
            return current - 1 < 0 ? slides.length - 1 : current - 1;
        } else {
            return current + 1 > slides.length - 1 ? 0 : current + 1;
        }
    };

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    };

    const containerStyles = {
        maxWidth: '80%',
        margin: '0 auto',
        paddingBottom: '3.5%'
    };

    const sliderStyles = {
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
        zIndex: 4,
        cursor: 'pointer',
        color: 'white'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '0%',
        fontSize: '40px',
        zIndex: 4,
        cursor: 'pointer',
        color: 'white'
    };


    const imageSliderDivLayout = [
        {
            position: 'relative',
            left: '10%',
            width: '40%',
            border: 'none',
            boxShadow: '0px 5px 10px 0px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '0.2',
            zIndex: `${2+direction}`
        },
        {
            position: 'relative',
            left: isMobile ? '10%' : '5%',
            width: isMobile ? '70%' : '50%',
            border: 'none',
            boxShadow: '0px 5px 10px 0px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '0.2',
            zIndex: `${3+direction}`
        },
        {
            position: 'relative',
            width: isMobile ? '100%' : '70%',
            border: elClicked && !elDragged ? '2px solid white' : 'none',
            boxShadow: '0px 10px 10px -5px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '1',
            zIndex: `${4+Math.abs(direction)}`
        },
        {
            position: 'relative',
            right: isMobile ? '10%' : '5%',
            width: isMobile ? '70%' : '50%',
            border: 'none',
            boxShadow: '0px 5px 10px 0px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '0.2',
            zIndex: `${3-direction}`
        },
        {
            position: 'relative',
            right: '10%',
            width: '40%',
            border: 'none',
            boxShadow: '0px 5px 10px 0px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '0.2',
            zIndex: `${2-direction}`
        }
    ];

    const imageSliderDivStyles = (index) => imageSliderDivLayout[index];

    const imageSliderImgStyles = {
        width: '100%',
        pointerEvents: 'none'
    };

    const imageSliderSubDivStyles = (scope) => {
        return {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '50%',
            transform: 'translate(0, -50%)',
            fontSize: '40px',
            cursor: 'pointer',
            // backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0), black)',
            backgroundColor: 'black',
            opacity: scope ? '0.0' : '0.4',
        }
    };

    const prev = () => {
        setCurrIndex(calcNext(currIndex, 'prev'));
        setDirection(-1);
        setElClicked(false);
        setElDragged(false);
    };

    const next = () => {
        setCurrIndex(calcNext(currIndex, 'next'));
        setDirection(1);
        setElClicked(false);
        setElDragged(false);
    };

    const frameClick = (event, rangeIndex, side) => {
        // event.stopImmediatePropagation()
        const dir = side === "left" ? -1 : 1
        console.log(event)
        if (rangeIndex !== currIndex) {
            setCurrIndex(rangeIndex);
            setElClicked(true);
            setDirection(dir);
        }
    }

    const frameDragStart = (event) => {
        setDragStart(event.pageX);
        setElDragged(true);
    };

    const frameDragEnd = (event, rangeIndex, side) => {
        const moveDist = event.pageX-dragStart;
        const next = moveDist > 0 ?  range[0] : range[2];
        const dragThld = 30;
        const dragThldCrossed = Math.abs(moveDist) > dragThld ? true : false;
        const dir = moveDist > 0 ? -1 : 1
        if (dragThldCrossed) {
            setCurrIndex(next);
            setDirection(dir);
            setElDragged(true);
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
                {
                    !isMobile &&
                    <>
                        <div style={leftArrowStyles} onClick={prev}>❮</div>
                        <div style={rightArrowStyles} onClick={next}>❯</div>
                    </>
                }
            <AnimatePresence initial="false" mode="popLayout">
                    {range.map((rangeIndex, index) => {
                        const xInit = effectType[mode][0]*dist*direction;
                        const xExit = effectType[mode][1]*dist*direction;
                        const scope = rangeIndex === currIndex;
                        return (
                            <motion.div
                                layout
                                key={rangeIndex}
                                onClick ={(event) => !isMobile && frameClick(event, rangeIndex, detectSide(rangeIndex))}
                                onDragStart={(event) => isMobile && frameDragStart(event)}
                                onDragEnd={event => isMobile && frameDragEnd(event, rangeIndex, detectSide(rangeIndex))}
                                style={imageSliderDivStyles(isMobile ? index + 1 : index)}
                                initial={{ 
                                    x: xInit, 
                                    scale: 0.8, 
                                    opacity: 0.0,
                                }}
                                animate={{
                                    x: 0, 
                                    scale: 1, 
                                    opacity: 1.0,
                                }}
                                exit={{ 
                                    x: xExit, 
                                    scale: 0.8, 
                                    opacity: 0.0
                                }}
                                transition={{
                                    opacity: { 
                                        ease: "linear",
                                        duration: 0.3
                                    },
                                    layout: { 
                                        duration: .6,
                                        type: 'spring',
                                        damping: 25,
                                    }
                                }}
                                drag = {isMobile ? 'x' : 'none'}
                                dragConstraints={{ left: 0, right: 0 }}
                            >
                                <motion.img 
                                    style={imageSliderImgStyles} 
                                    src = {slides[rangeIndex].url}
                                />
                                <motion.div style={imageSliderSubDivStyles(scope)}>
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