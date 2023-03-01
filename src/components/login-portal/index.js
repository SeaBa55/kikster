import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import './style.css';

const LoginPortal = (ref) => {
    const svgRef = useRef(null);
    const userRef = useRef(null);
    const passRef = useRef(null);

    useEffect(() => {
        svgRef.current.classList.add('animate-border');
    },[]);

    const login = () => {
        const username = userRef.current.value;
        const password = passRef.current.value;
        console.log(username, password);
    }
    return (
        <>
            <div className="back-drop" id="back-drop"/>
            <div className="login-wrapper">
                <div className="svg-wrapper">
                    <svg height="300" width="320" >
                        <rect ref={svgRef} className="shape" height="300" width="320"/>
                    </svg>
                    <motion.div
                        className="text2"
                        initial={{ 
                            y: -20, 
                            scale: 0.8, 
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
                            delay: 1.6
                        }}
                    >
                        <div className='admin-mode-label shimmer'>
                            <h3>ADMIN MODE</h3>
                        </div>
                        <form>
                            <div className='admin-mode-user'>
                                <label htmlFor="user">username</label>
                                <input ref={userRef} type="text" id="user" name="user"/>
                            </div>
                            <div className='admin-mode-pass'>
                                <label htmlFor="pass">password</label>
                                <input ref={passRef} type="password" id="pass" name="pass"/>
                            </div>
                            <div className='admin-mode-submit'>
                                <input 
                                    class="btn btn-outline-light" 
                                    type="button" 
                                    value="Submit" 
                                    onClick={() => login()}
                                />
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default LoginPortal;