import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiC, SiCplusplus, SiJavascript, SiPython } from 'react-icons/si'

export default function Languages() {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiC size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiCplusplus size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiJavascript size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiPython size="3em"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}