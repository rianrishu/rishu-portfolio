import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export default function Resume(){
    return(
        <section className="resume" id="resume">
            <Container>
                <Row>
                    <Col>
                        <h2>Resume</h2>
                        <br />
                        <Tab.Container id="resume-tabs" defaultActiveKey="first">
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Experience</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" >
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        Education
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                        Experience
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}