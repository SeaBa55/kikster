import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = ({ children, style }) => {
    const ref = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);

    useLayoutEffect(() => {
        setContentWidth(ref.current.scrollWidth);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, - (contentWidth - window.innerWidth)]
    );

    return (
        <section
            ref={ref}
            style={{
                position: 'relative',
                height: `${contentWidth - window.innerWidth + window.innerHeight}px`,
                width: '100vw',
                ...style,
            }}
        >
            <motion.div
                style={{
                    x,
                    position: 'sticky',
                    top: '66px', // account for the nav bar vh offset
                    left: 0,
                    height: '100vh',
                    display: 'flex',
                }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default HorizontalScroll;
