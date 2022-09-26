import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import React from "react";

export default function Projects() {

  const projects = [
    {
      title: "Portfolio",
      description: "This one...",
      projectUrl: "",
      imgUrl: projImg1,
    },
    {
      title: "Automatized Project Registration",
      description: "Developed in accordance with the process that is begin followed by my college which includes functionalities related to admin, faculty and student. Admin can register faculty, assign faculty, accept or reject topic added by student, faculty can add topic and assign marks to batches and students can create a batch/team, add topic or select topic on FCFS basis.",
      projectUrl: "",
      imgUrl: projImg2,
    },
    {
      title: "Music Controller",
      description: "here is host and no host say client, a host can create a room where multiple clients can join and there a music playing in the room which only host can control like play, pause, skip the song but however there is also a voting system where clients can vote to skip the song if number of votes exceeds the number set by host.",
      projectUrl: "",
      imgUrl: projImg3,
    },
    {
      title: "College Feedback System",
      description: "This project was a part of 12 hour Smart India hackathon 2022 at the college level which was developed in a team of 4. It is a web based project where admin can register college on the portal and students and parent can rate the college on the different factors like facilities in college, faculties, etc.",
      projectUrl: "",
      imgUrl: projImg1,
    },
    {
      title: "CodePen Clone",
      description: "CodePen-Clone is a web based app which is clone of Code-Pen with limited options like in this we can only run programs written in HTML, CSS and Javascript.",
      projectUrl: "",
      imgUrl: projImg2,
    },
    {
      title: "Face Recognition Brain",
      description: "Face recognition brain is a web based application which takes link of image as a input and detects human face in that image with the help of Clarifai API.It also has basic signup and register feature with each indivisual user has a count of how many times entered to detect face in image.",
      projectUrl: "",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility> */}
            {/* {({ isVisible }) => */}
            <div className="animate__animated animate__fadeIn">
              <div className="project-bx">
                <h2>Projects</h2>
                <p>These are some of my work...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}