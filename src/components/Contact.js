import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { MouseContainer, ChasingElement } from 'react-mouse-image-move'
import db from './Firebase'
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 

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

    const Submit = async (e) => {
        e.preventDefault();
        let docRef = null;
        docRef = await addDoc(collection(db,"Contacted-users"),{
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message
        });
        setFormDetails(initForm);
        if(docRef != null){
            setStatus(true);
        }
      };
      

    return(
        <section className="contact" id="connect" style={{"border-radius": "35px"}}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <MouseContainer
                        options={{
                            effectType: 'perspective', // or 'movement'
                            max: 15,
                            perspective: 1000,
                            scale: 1,
                        }}
                        chasingElement={
                            <ChasingElement>
                                <img src={contactImg} alt="contact"/>
                            </ChasingElement>
                          }
                      />
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
                                <Col sm={6} size={12} className="px-1">
                                    <input 
                                    type="tel" 
                                    id="phone" 
                                    value={formDetails.phone}
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
                                    <button type="submit" onClick={Submit}><span>Submit</span></button>
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