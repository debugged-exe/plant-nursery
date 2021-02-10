import React from "react";
import {Image, Container, Row, Col, Form, Button} from "react-bootstrap";
import imageUrl1 from "./question.png";
import './contact.css';
function Contact() {
    return (
        <section id={'section-contact'}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: 'center'}}> Have Some Questions </h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Image
                            src={imageUrl1}
                            style={{width: "100%", height: "100%"}}
                            rounded
                        />
                    </Col>
                    <Col sm={6} style={{marginTop: '8%'}}>
                        <Form>
                            <Form.Group controlId="fullName">
                                <Form.Control size="x-lg" type="text" placeholder="Full Name"/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="email">
                                <Form.Control size="x-lg" type="email" placeholder="Email"/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="phoneNumber">
                                <Form.Control size="lg" type="tel" placeholder="Phone Number"/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="messageArea">
                                <Form.Control
                                    size="lg"
                                    as="textarea"
                                    rows={3}
                                    placeholder="Message"
                                />
                            </Form.Group>
                            <Button variant="success">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
