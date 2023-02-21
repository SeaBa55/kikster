import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import './style.css';

const LoginPortal = (ref) => {
    const myRef = useRef(null);

    useEffect(() => {
        myRef.current.classList.add('animate-border');
    },[]);

    return (
        <>
            <div className="back-drop"/>
            <div className="login-wrapper">
                <div className="svg-wrapper">
                    <svg height="300" width="320" >
                        <rect ref={myRef} className="shape" height="300" width="320"/>
                    </svg>
                    <motion.div
                        className="text2"
                        initial={{ 
                            y: -100, 
                            scale: 0.9, 
                            opacity: 0.0,
                        }}
                        animate={{
                            y: 0, 
                            scale: 1, 
                            opacity: 1.0,
                        }}
                        transition={{
                            opacity: { 
                                ease: "linear",
                                duration: 1
                            },
                            duration: 0.1,
                            type: 'spring',
                            damping: 10,
                            delay: 1.6
                        }}
                    >
                        <div className='admin-mode-label shimmer'>
                            ADMIN MODE
                        </div>
                        <form>
                            <div className='admin-mode-user'>
                                <label htmlFor="user">username</label>
                                <input type="text" id="user" name="user"/>
                            </div>
                            <div className='admin-mode-pass'>
                                <label htmlFor="pass">password</label>
                                <input type="password" id="pass" name="pass"/>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default LoginPortal;