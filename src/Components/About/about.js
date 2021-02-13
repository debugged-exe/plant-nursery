import React from 'react';
import './about.css';
import imageUrl from './plants.png';
function About() {
    return (
        <section id={'section-about'}>
            <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                <div style={{fontWeight: '700',fontSize: '3rem', textAlign: 'center',marginTop: '5%',marginBottom:'5%',paddingTop: '2%'}}>
                    About Us
                </div>
                <div className="cf ph2-ns">
                    <div className="db dtc-ns v-mid-ns">
                        <img src={imageUrl} alt="aboutimage" className="image"/>
                    </div>
                    <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                        <h1><b>Welcome to the Oak</b></h1>
                        <p className="lh-copy ik">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry’s standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
