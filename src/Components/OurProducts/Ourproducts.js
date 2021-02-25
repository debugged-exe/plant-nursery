import React from 'react';
import './Ourproducts.css';
import Carousel from 'react-elastic-carousel';
import seeds from '../../Database/Seeds';
import plants from '../../Database/Plants';
import pots from '../../Database/Pots';
import tools from '../../Database/Tools';
function Ourproducts() {
    const i_seeds = Math.floor(Math.random()*9);
    const i_plants = Math.floor(Math.random()*9);
    const i_pots = Math.floor(Math.random()*9);
    const i_tools = Math.floor(Math.random()*9);
    return (
        <section id={'OurProducts'} className="pb4">

            <div style={{
                fontWeight: '700',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '5%',
                paddingTop: '2%'
            }} data-aos={'slide-down'} data-aos-duration={'3000'}>
                Top Selling Products
            </div>
            <Carousel itemsToShow={1} data-aos={'fade-up'}>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={seeds[i_seeds].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{seeds[i_seeds].name}</b></h1>
                            <p className="lh-copy ik">
                                {seeds[i_seeds].desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={plants[i_plants].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{plants[i_plants].name}</b></h1>
                            <p className="lh-copy ik">
                              {plants[i_plants].desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>

                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={pots[i_pots].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{pots[i_pots].name}</b></h1>
                            <p className="lh-copy ik">
                              {pots[i_pots].desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ma2 ph3-ns" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="cf ph2-ns">
                        <div className="db dtc-ns v-mid-ns">
                            <img src={tools[i_tools].imgUrl} alt="aboutimage" className="image"/>
                        </div>
                        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns" style={{paddingLeft: '1%'}}>
                            <h1><b>{tools[i_tools].name}</b></h1>
                            <p className="lh-copy ik">
                              {tools[i_tools].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default Ourproducts;
