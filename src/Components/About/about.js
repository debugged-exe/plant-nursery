import React from 'react';
import './about.css';
import imageUrl from './plants.png';

function About() {
    return (
        <section id={'about'} style={{overflow: 'hidden'}}>
            <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                <div data-aos={"fade-left"} style={{
                    fontWeight: '700',
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginTop: '5%',
                    marginBottom: '5%',
                    paddingTop: '2%'
                }}>
                    About Us
                </div>
                <div className="cf ph2-ns">
                    <div className="db dtc-ns v-mid-ns" data-aos={'fade-right'} data-aos-duration={'2000'}>
                        <img src={imageUrl} alt="aboutimage" className="image"/>
                    </div>
                    <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}
                         data-aos={'fade-left'} data-aos-duration={'2000'}>
                        <h1><b>Welcome to Rohit Nursey</b></h1>
                        <p className="lh-copy ik">
                            Rohit rose nursery delivering quality plants and was established in the year of 1990. We are
                            manufacture of flower plant, fruit plant and decorative garden plant from better
                            motherplant. our products are high quality.we are bealive to give matching plants in
                            different type of climate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
