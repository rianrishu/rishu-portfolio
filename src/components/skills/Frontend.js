import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiHtml5, SiCss3, SiReact, SiBootstrap, SiMaterialui } from 'react-icons/si'

export default function Frontend() {
    return (
        <section>
            <Container>
                <Row>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiHtml5 size="3em" />
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiCss3 size="3em" />
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiReact size="3em" />
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiBootstrap size="3em" />
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiMaterialui size="3em" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}