import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import './style.css';

const ImageSlider = ({slides}) => {
    const [isMobile, setIsMobile] = useOutletContext();
    const [currIndex, setCurrIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [range, setRange] = useState([]);
    const [elClicked, setElClicked] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [elDragged, setElDragged] = useState(false);
    const [iterations, setIterations] = useState(0);

    const mode = 'outer';
    const dist = 100;
    const effectType = {
        lead: [1, 1],
        inner: [-1, 1],
        outer: [1, -1],
        trail: [-1,-1]
    };
    
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
    
    useEffect(() => {
        (async () => {
            await delay(200); // 400 seems like a slower stable value here
            iterations && (direction===1 ? next(undefined, iterations) : prev(undefined, iterations));
        })()
    },[iterations]);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const calcNext = (current, action) => {
        if (action === 'prev') {
            return current - 1 < 0 ? slides.length - 1 : current - 1;
        } else {
            return current + 1 > slides.length - 1 ? 0 : current + 1;
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
        left: '3%',
        fontSize: '45px',
        zIndex: 10,
        cursor: 'pointer',
        color: 'white'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '3%',
        fontSize: '45px',
        zIndex: 10,
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
            zIndex: `${5+direction}`
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
            zIndex: `${6+direction}`
        },
        {
            position: 'relative',
            width: isMobile ? '100%' : '70%',
            border: elClicked && !elDragged ? '2px solid white' : 'none',
            boxShadow: '0px 10px 10px -5px #888888',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '1',
            zIndex: `${7+Math.abs(direction)}`
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
            zIndex: `${6-direction}`
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
            zIndex: `${5-direction}`
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
            opacity: scope ? '0.0' : '0.5',
        }
    };

    const imageSliderButtonDivStyles = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '50%',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
    }

    const imageSliderButtonStyles = (scope) => {
        return {
            position: 'relative',
            fontSize: 'clamp(10px, 2.5vw, 16px)',
            cursor: 'pointer',
            marginBottom: '10%',
        }
    };

    const prev = (event, iterations=1) => {
        setCurrIndex(calcNext(currIndex, 'prev'));
        setIterations(iterations-1)
        setDirection(-1);
        setElClicked(false);
        setElDragged(false);
    };

    const next = (event, iterations=1) => {
        setCurrIndex(calcNext(currIndex, 'next'));
        setIterations(iterations-1)
        setDirection(1);
        setElClicked(false);
        setElDragged(false);
    };

    const frameClick = async (index, rangeIndex, side) => {
        // event.stopImmediatePropagation()
        const center = Math.ceil((range.length-1)/2);
        const iterations = Math.abs(center - index);
        if (rangeIndex !== currIndex) {
            side === "left" ? prev(undefined, iterations) : next(undefined, iterations);
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
                                onClick ={(event) => !isMobile && frameClick(index, rangeIndex, detectSide(rangeIndex))}
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
                                    opacity: 0.0,
                                    // zIndex: imageSliderDivLayout[index] - 2,
                                    // zIndex: 1,
                                }}
                                transition={{
                                    // zIndex: { 
                                    //     ease: "linear",
                                    //     duration: 0.0
                                    // },
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
                                <motion.div style={imageSliderSubDivStyles(scope)}/>
                                {
                                    scope &&
                                    <motion.div 
                                        className="container d-flex justify-content-center" 
                                        style={imageSliderButtonDivStyles}
                                    >
                                        <div className="row align-items-end">
                                            <motion.div 
                                                className="col-sm"
                                                initial={{ 
                                                    y: 100,
                                                    scale: 0.8, 
                                                    opacity: 0.0,
                                                }}
                                                animate={{ 
                                                    y: 0,
                                                    scale: 1,
                                                    opacity: 1 
                                                }}
                                                transition={{
                                                    delay: 0.7,
                                                    type: 'spring',
                                                    // bounce: .5,
                                                    opacity: { 
                                                        ease: "linear",
                                                        duration: 0.6
                                                    }
                                                }}
                                            >   
                                                <Link to="/portfolio/project">
                                                    <motion.button 
                                                        layout
                                                        type="button" 
                                                        className="btn btn-light py-0 px-1"
                                                        style={imageSliderButtonStyles(scope)}
                                                        key={rangeIndex}
                                                        whileHover={{ 
                                                            scale: 1.2, 
                                                            type: 'spring',
                                                            backgroundColor: 'gold',
                                                            borderRadius: '8px'
                                                        }}
                                                        whileTap={{ 
                                                            scale: 0.9, 
                                                            type: 'spring',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                                            borderRadius: '8px'
                                                        }}
                                                        animate={{
                                                            borderRadius: '1px',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.6)'
                                                        }}
                                                        exit={{borderRadius: '6px'}}
                                                        transition={{
                                                            borderRadius: {
                                                                ease: "linear",
                                                                duration: 0.1,
                                                                delay: 0.1
                                                            },
                                                            backgroundColor: {
                                                                ease: "linear",
                                                                delay: 0.1,
                                                            }
                                                        }}
                                                    >
                                                        Ver Mas
                                                    </motion.button>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                }
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
  
export default ImageSlider;