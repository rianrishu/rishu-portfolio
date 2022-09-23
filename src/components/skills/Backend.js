import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiDjango, SiFirebase, SiMongodb, SiMysql, SiNodedotjs,  } from 'react-icons/si'

export default function Languages() {
    return (
        <section>
            <Container>
                <Row>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiDjango size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiNodedotjs size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiMongodb size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiMysql size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col  >
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