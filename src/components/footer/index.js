import React from "react";
import './style.css';
import { Col, Row } from "react-bootstrap";
import {
    faLocationDot,
    faPaperPlane,
    faPhone,
    faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        // <footer className="footer bg-light fixed-bottom">
        //     <div className="footer-container d-flex justify-content-center">
        //         {/* <!-- Site version info --> */}
        //         <span className="my-foot-text">© 2022 v1.0 - updated: 09/29</span>
        //     </div>
        // </footer>

        <footer className="footer bg-dark pt-3">
                <div className="d-flex row justify-content-center">
                    <p className="fw-bold ">Contáctanos</p>
                        <Col xl={5}>
                    <Row className="justify-content-center">
                            <p style={{
                                textAlign: 'start',
                                padding: 0,
                            }}>
                                Si tu comunidad desarrolla proyectos de turismo rural comunitario en destinos de naturaleza y quieres articular su modelo operativo de manera funcional y sostenible, te podemos ayudar.
                            </p>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xl={4}>
                            <Row className="justify-content-start"> 
                                <Col xl={1} className="p-0">
                                    <FontAwesomeIcon className='fa-fw' icon={faPhone} />
                                </Col>
                                <Col xl={6} className="p-0">
                                    <p>
                                        +57 318 3593342
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={4}>
                            <Row className="justify-content-center">
                                <Col xl={1} className="p-0">
                                    <FontAwesomeIcon className='fa-fw' icon={faLocationDot} />
                                </Col>
                                <Col xl={10} className="p-0">
                                    <p>
                                        Cra. 4 # 59-21 | Bogotá - Col.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={4}>
                            <Row className="justify-content-end">
                                <Col xl={1} className="p-0">
                                    <FontAwesomeIcon className='fa-fw' icon={faPaperPlane} />
                                </Col>
                                <Col xl={6} className="p-0">
                                    <p>
                                        hello@kikster.live
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p>kikster.live</p>
                    </Row>
                        </Col>
                </div>
          
        </footer>
    );
}

export default Footer;