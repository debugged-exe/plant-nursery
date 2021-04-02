import React from 'react';
import './about.css';
import imgAbout from './imgabout.jpeg';

function About() {
    return (
        <section id={'about'} style={{overflow: 'hidden'}}>
            <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                <div className="cf ph2-ns">
                    <div className="db dtc-ns v-mid-ns" data-aos={'fade-right'} data-aos-duration={'2000'}>
                        <img src={imgAbout} style={{}} alt="aboutimage" className="image"/>
                    </div>
                    <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}
                         data-aos={'fade-left'} data-aos-duration={'2000'}>
                        <h1><b>About Rohit Nursey</b></h1>
                        <p className="lh-copy ik">
                            Rohit nursery has been delivering premium quality plants since 1990. We manufacture flower
                            plants, fruit plants and decorative garden plants from better mother plants.We believe to
                            provide you plants matching to your personal and climatic needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
