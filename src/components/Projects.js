import ProjectCard from "./ProjectCard";
import React from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorsharp2 from '../assets/img/color-sharp2.png'
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";


const projects = [
    {
      title: "Business Startup 1" ,
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup 4",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

export default function Project() {
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Section 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Section 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Section 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" >
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, ind) => {
                                                return (<ProjectCard 
                                                key={ind}
                                                {...project}/>)
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    second
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    third
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img classname="background-image-right" src={colorsharp2} alt="bg right"/> */}
        </section>
    );
}