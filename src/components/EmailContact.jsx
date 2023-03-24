import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import '../css/contact.css'
import ContactMap from "./ContactMap";

const EmailContact = () => {
    const[phone,setPhone]=useState("");
  return (
    <Container className='email-contact'>
       <Row>
        <Col xs={12} md={6}>
            <ContactMap/>
        </Col>
        <Col xs={12} md={6}  >
        <fieldset><h3>Get In Touch</h3></fieldset>
        <Form className="contact-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="ENTER YOUR NAME" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <PhoneInput className="contact-number" country={"eg"} enableSearch={true} value={phone} onChange={(phone) => setPhone(phone)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="email" placeholder="ENTER YOUR EMAIL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="text">
                <Form.Control as="textarea"
                              required
                              type="text"
                              placeholder="ENTER YOUR MESSAGE"
                              cols="5"
                              rows="7"
                />
            </Form.Group>
            <Button className="contact-send-btn" type="submit">
                Send
            </Button>
        </Form>
        </Col>
       </Row>
    </Container>
  )
}

export default EmailContact