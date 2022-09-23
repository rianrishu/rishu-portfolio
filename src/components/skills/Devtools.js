import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiGit, SiGithub, SiVisualstudiocode } from 'react-icons/si'

export default function Languages() {
    return (
        <section>
            <Container>
                <Row>
                    <Col >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiGit size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiGithub size="3em"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="d-flex justify-content-center card-pad">
                                <SiVisualstudiocode size="3em"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}