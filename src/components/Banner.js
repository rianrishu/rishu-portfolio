import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg"
import React from 'react';
import { useTypeWriter } from "@vegadev/react-type-writer";
import { MouseContainer, ChasingElement } from 'react-mouse-image-move'


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
                        <h1>Hi! I'm {
                            useTypeWriter({
                                text: [
                                    "Rishu Anand"
                                ],
                                infiniteLoop: true,
                                blinker: "|",
                                delay: 2000,
                                blinkerDelay: 500,
                            })
                        }</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button onClick={() => console.log("banner connect")}>Let's connect <ArrowRightCircle size={25} /></button>
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