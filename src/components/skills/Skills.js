import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorsharp from '../../assets/img/color-sharp.png';
import Languages from "./Languages";
import Frontend from "./Frontend";
import Backend from "./Backend"
import Devtools from "./Devtools"

export default function Skills() {
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <br/>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="meter-1"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="meter-2"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="meter-3"/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel> */}
                            <Tab.Container id="skill-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Languages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Frontend</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Backend</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">DevTools</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Languages />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Frontend />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Backend />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Devtools />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp} alt="bg left" />
        </section>
    );

}