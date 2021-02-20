import React, {useState} from 'react';
import CountUp from 'react-countup';
import {FaSeedling} from 'react-icons/fa';
import {RiPlantFill} from 'react-icons/ri';
import {GiApothecary} from 'react-icons/gi';
import {FaTools} from 'react-icons/fa';
import './counterUp.css';
const Counter = () => {
    return (
        <section className="f3 flex flex-wrap justify-around items-center mt4 ">
            <div data-aos={'fade-right'} data-aos-duration={'2000'} className={'pointer flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <FaSeedling size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={50} duration={20}/></p>
                <p className={'pa0 ma0'}>Seeds</p>
            </div>
            <div data-aos={'fade-right'} data-aos-duration={'1000'} className={'pointer flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <RiPlantFill size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={58} duration={20}/></p>
                <p className={'pa0 ma0'}>Plants</p>
            </div>
            <div data-aos={'fade-left'} data-aos-duration={'1000'} className={'pointer flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <GiApothecary size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={53} duration={20} /></p>
                <p className={'pa0 ma0'}>Pots</p>
            </div>
            <div data-aos={'fade-left'} data-aos-duration={'2000'} className={'pointer flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <FaTools size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={60} duration={20}/></p>
                <p className={'pa0 ma0'}>Tools</p>
            </div>
        </section>
    );
}

export default Counter;
