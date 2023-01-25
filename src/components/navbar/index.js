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
        <Navbar 
            id="navbar-container"
            onToggle={toggle} 
            expanded={navExpanded} 
            expand="lg" 
            bg="light" 
            variant="light" 
            sticky="top"
        >
            <Navbar.Brand id="navbar-brand">
                <NavLink
                    to="/"
                    style= {{color: "inherit"}}
                    className= "text-decoration-none"
                >
                    <img
                        id="navbar-link-home"
                        src={`${baseURL}/Kikster_Oficial_Recuadros_K.png`}
                        style= {iconImageStyle}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Kikster logo"
                    />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle
                id="navbar-toggle-hamburger"
                aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse
                id="navbar-collapse-container"
            >
                <Nav
                    id="nav-links-container"
                    className="justify-content-end" 
                    style={{ width: "100%" }}
                >
                    <Nav.Link
                        id="navlink-about"
                        as="div"
                    >
                        <NavLink
                            id="navlink-about-link"
                            to="about"
                            style= {{color: "inherit"}}
                            className= "text-decoration-none"
                            onClick={collapsNav}
                        >
                            About Us
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link
                        id="navlink-portfolio"
                        as="div"
                    >
                        <NavLink
                            id="navlink-portfolio-link"
                            to="portfolio"
                            style= {{color: "inherit"}}
                            className="text-decoration-none"
                            onClick={collapsNav}
                        >
                            Portfolio
                        </NavLink>
                    </Nav.Link>
                    {/* <Nav.Link
                        id="navlink-contact"
                        as="div"
                    >
                        <NavLink
                            id="navlink-contact-link"
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