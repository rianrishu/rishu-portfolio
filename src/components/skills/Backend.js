import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiDjango, SiFirebase, SiMongodb, SiMysql, SiNodedotjs,  } from 'react-icons/si'

export default function Languages() {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiDjango size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiNodedotjs size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiMongodb size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiMysql size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3} >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiFirebase size="3em"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}