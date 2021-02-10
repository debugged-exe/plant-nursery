import React from 'react';
import './about.css';
import imageUrl from './plants.png';
import {Container, Row, Col} from 'react-bootstrap';

function About() {
    return (
        <section id={'section-about'}>
            <Container className="abt inline">
                <Row>
                    <Col id="img" sm={6}>
                        <img src={imageUrl} alt="aboutimage" className="image"/>
                    </Col>
                    <Col id="text" sm={6}>
                        <h2><b>Welcome to the Oak</b></h2>
                        <p className="ik">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
