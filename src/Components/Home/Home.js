import React from 'react';
import './Home.css';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <div className='home-background white flex justify-center items-center flex-column ph2 pt4 pv6'
             data-aos={'fade-up'}>
            <h1 className='w-50-m text tc mt2' data-aos={"fade-up"} data-aos-duration={'2000'}
                style={{fontSize: "3rem"}}>Welcome to Rohit Nursery</h1>
            <p className='w-50-m text tc ph3' data-aos={"fade-up"} data-aos-duration={'1000'}>Rohit rose nursery
                established in the year 1990 located on bhigwan- walchandnagar road in kalas,Tal-Indapur
                Dist-Pune(Maharashtra).3 km from Pune- Solapur highway. We produce and supply all types of flower
                plants,fruit plants, decorative plants and shade plants.
                We supply plants and also give you information on how to go about taking care and growing them.
                We also specialise in the quality plant of rose, pomegranate,fig and grapes root
                variety.</p>

            <Counter/>
        </div>
    );
}

export default Home;