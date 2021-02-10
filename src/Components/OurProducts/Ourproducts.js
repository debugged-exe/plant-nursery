import React from 'react';
import {Carousel,Button,Container,Row,Col} from 'react-bootstrap';
import imageurl1 from './plant1.png';
import imageurl2 from './plant2.png';
import imageurl3 from './plant3.png';
import imageurl4 from './plant4.png';
import './Ourproducts.css';

function Ourproducts() {
    return (
        <div className="products">
            <h2 className="producthead">Our Products</h2>
            <Container className="change" >
                <Row >
                    <Col className='ij ' sm={6}>
                        <div alt="text part" >
                            <div >
                                <h2>Heading</h2>
                            </div>
                            <div className="ik">
                                <p>Lorem  ipsum or any dummy text which can be filled as for now.This will later be replaced by the
                                    final content which is to be used in the site
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col alt="carousel part" sm={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imageurl1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imageurl2}
                                    alt="second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imageurl3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imageurl4}
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Ourproducts;
