import React from 'react';
import imgurl1 from './plant1.png';
import imgurl2 from './plant2.png';
import imgurl3 from './plant3.png';
import imgurl4 from './plant4.png';
import './Ourproducts.css';
import Carousel from 'react-elastic-carousel';

const products = [
    {
        name: "Money Plant",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl1
    },
    {
        name: "Hanging plant",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl2
    },
    {
        name: "Palm tree",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl3
    },
    {
        name: "Monstera",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl4
    }
];

var i = 0;

function Ourproducts() {
    return (
        <section id={'OurProducts'} className="pb4">

            <div style={{
                fontWeight: '700',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '5%',
                paddingTop: '2%'
            }} data-aos={'slide-down'}>
                Our Products
            </div>
            <Carousel itemsToShow={1} data-aos={'fade-up'}>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[0].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[0].name}</b></h1>
                            <p className="lh-copy ik">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[1].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[1].name}</b></h1>
                            <p className="lh-copy ik">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[2].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[2].name}</b></h1>
                            <p className="lh-copy ik">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={products[3].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{products[3].name}</b></h1>
                            <p className="lh-copy ik">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default Ourproducts;
