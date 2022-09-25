import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiTwotoneStar } from "react-icons/ai";

export default function Resume() {
    return (
        <section className="resume" id="resume">
            <Container>
                <Row>
                    <Col>
                        <div className="resume-bx">
                            <h2>Resume</h2>
                            <br />
                            <Tab.Container id="resume-tabs" defaultActiveKey="first">
                                <Nav
                                    variant="pills"
                                    className="nav-pills mb-5 justify-content-center align-items-center"
                                    id="pills-tab"
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Education</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Experience</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Certifications</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Achivements</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <VerticalTimeline>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--education"
                                                date="2019 - present"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h4
                                                    className="vertical-timeline-element-title"
                                                    style={{ color: "black" }}
                                                >
                                                    Siddaganga Institute of Technology, Tumkur
                                                </h4>
                                                <h5
                                                    className="vertical-timeline-element-subtitle"
                                                    style={{ color: "black" }}
                                                >
                                                    Bachelor of Engg
                                                </h5>
                                                <p>Computer Science and Engineering</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--education"
                                                date="2016 - 18"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h4
                                                    className="vertical-timeline-element-title"
                                                    style={{ color: "black" }}
                                                >
                                                    Satyam International School, Patna
                                                </h4>
                                                <p>Class 12 CBSE</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--education"
                                                date="2016"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h4
                                                    className="vertical-timeline-element-title"
                                                    style={{ color: "black" }}
                                                >
                                                    Shivam Convent, Patna
                                                </h4>
                                                <p>Class 10 CBSE</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                                icon={<AiTwotoneStar />}
                                            />
                                        </VerticalTimeline>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <VerticalTimeline>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h4
                                                    className="vertical-timeline-element-title"
                                                    style={{ color: "black" }}
                                                >
                                                </h4>
                                                <h5
                                                    className="vertical-timeline-element-subtitle"
                                                    style={{ color: "black" }}
                                                >
                                                    
                                                </h5>
                                                <p></p>
                                            </VerticalTimelineElement>
                                        </VerticalTimeline>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <VerticalTimeline>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h5
                                                    className="vertical-timeline-element-subtitle"
                                                    style={{ color: "black" }}
                                                >
                                                    Complete web development
                                                </h5>
                                                <p>udemy</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h5
                                                    className="vertical-timeline-element-title"
                                                    style={{ color: "black" }}
                                                >
                                                    Data Structures in C++
                                                </h5>
                                                <p>Coding Ninjas</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                                icon={<AiTwotoneStar />}
                                            />
                                        </VerticalTimeline>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                    <VerticalTimeline>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h5
                                                    className="vertical-timeline-element-subtitle"
                                                    style={{ color: "black" }}
                                                >
                                                    Smart India Hakathon 2022
                                                </h5>
                                                <p>Qualified at institute level</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                iconStyle={{
                                                    background: "rgb(33, 150, 243)",
                                                    color: "#fff",
                                                }}
                                                icon={""}
                                            >
                                                <h5
                                                    className="vertical-timeline-element-title"
                                                    style={{ color: "black" }}
                                                >
                                                    Google Hash Code 2021
                                                </h5>
                                                <p>Paticipated in a team of 4 and secured a India rank of 1193 and world rank of 4081.</p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                                icon={<AiTwotoneStar />}
                                            />
                                        </VerticalTimeline>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
