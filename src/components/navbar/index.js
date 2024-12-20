import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Nav, 
    Navbar
} from 'react-bootstrap';
import './style.css';

const baseURL = process.env.PUBLIC_URL;

const NavBar = () => {
    const [navExpanded, setNavExpanded] = useState(false);

    const toggle = (expanded) => {
        setNavExpanded(expanded);
    };

    const collapsNav = () => {
        // protection against erratice toggling of navExpanded
        if(navExpanded) {
            setNavExpanded(false);
        };
    };

    const iconImageStyle = {
        marginLeft: '20%'
    }

    return (
        <Navbar onToggle={toggle} expanded={navExpanded} expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand>
                <NavLink
                    to="/"
                    style= {{color: "inherit"}}
                    className= "text-decoration-none"
                >
                    <img
                        src={`${baseURL}/Kikster_Oficial_Recuadros_K.png`}
                        style= {iconImageStyle}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Kikster logo"
                    />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link as="div">
                        <NavLink
                            to="about"
                            style= {{color: "inherit"}}
                            className= "text-decoration-none"
                            onClick={collapsNav}
                        >
                            Sobre Nosotros
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link as="div">
                        <NavLink
                            to="portfolio"
                            style= {{color: "inherit"}}
                            className="text-decoration-none"
                            onClick={collapsNav}
                        >
                            Portafolio
                        </NavLink>
                    </Nav.Link>
                    {/* <Nav.Link as="div">
                        <NavLink 
                            to="contact"
                            style= {{color: "inherit"}}
                            className="text-decoration-none"
                            onClick={collapsNav}
                        >
                            Contact Us
                        </NavLink>
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;




// return (
//     <Navbar onToggle={toggle} expanded={navExpanded} bg="dark" variant="dark" sticky="top" >

//         <Navbar.Brand>
//             <NavLink to="/"> Kickster </NavLink>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//         <Navbar.Collapse >

//             <Nav>
//                 <Nav.Link as="div">
//                     <NavLink to="about" onClick={collapsNav}> About </NavLink>
//                 </Nav.Link>

//                 <Nav.Link as="div">
//                     <NavLink to="portfolio" onClick={collapsNav}> Portfolio </NavLink>
//                 </Nav.Link>

//                 <Nav.Link as="div">
//                     <NavLink to="contact" onClick={collapsNav}> Contact </NavLink>
//                 </Nav.Link>
//             </Nav>

//         </Navbar.Collapse>
//     </Navbar>
// );