import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/my-project.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="logo" style={{"height": "45px"}}/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a 
                            href="https://mail.google.com/mail/u/lee@example.org/?view=cm&to=rishuanand2552@gmail.com&su=Via,portfolio"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.linkedin.com/in/rishu-anand-9rian9999/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.instagram.com/rianrishu/"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright &copy; 2022 RianQ</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}