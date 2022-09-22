import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg"
import React from 'react';
import { MouseContainer, ChasingElement } from 'react-mouse-image-move'
import Typewriter from 'typewriter-effect';


// const styles = {
//     mouseContainer: {
//     },
//     chasingElement: {
//         width: 4000,
//         height: 3000
//     }
// }

function Banner() {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi! I'm Rishu Anand</h1>
                        <h2 style={{ "height": "2rem" }}>
                            <Typewriter
                                options={{
                                    strings: ['Full-Stack Web Developer', 'Competitive Programmer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </h2>
                        <button onClick={() => document.getElementById('connect').scrollIntoView()}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <MouseContainer
                            options={{
                                effectType: 'perspective', // or 'movement'
                                max: 15,
                                perspective: 1000,
                                scale: 1,
                            }}
                            chasingElement={
                                <ChasingElement>
                                    <img src={headerImage} alt="Header" />
                                </ChasingElement>
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Banner;