import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export default function Contact(){
    const initForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(initForm);
    const [status, setStatus] = useState(false);

    const updateForm = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="text" 
                                    value={formDetails.firstName}
                                    placeholder="First Name"
                                    onChange={(e) => updateForm('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px=1">
                                    <input 
                                    type="text" 
                                    value={formDetails.lastName} 
                                    placeholder="Last Name" 
                                    onChange={(e) => updateForm('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="email" 
                                    value={formDetails.email} 
                                    placeholder="Email" 
                                    onChange={(e) => updateForm('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                                    placeholder="Phone no."
                                    onChange={(e) => updateForm('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea 
                                    type="text" 
                                    value={formDetails.message}
                                    placeholder="Message" 
                                    rows={6}
                                    onChange={(e) => updateForm('message', e.target.value)}/>
                                    <button type="submit" onClick={() => console.log(formDetails)}><span>Submit</span></button>
                                    {status ? <p 
                                                style={{"background" : "green", "fontStyle" : "bold", "margin" : "0px", "padding": "0px"}}>
                                                    Message sent successfully
                                                    </p> : ""}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}