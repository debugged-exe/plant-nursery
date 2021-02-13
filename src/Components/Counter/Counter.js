import React, {useState} from 'react';
import {SiAerlingus} from "react-icons/si";
import {IoFlowerOutline} from "react-icons/io5";
import {GiPalmTree} from "react-icons/gi";
import {GiBonsaiTree} from "react-icons/gi";
import CountUp from 'react-countup';
import './counterUp.css';
const Counter = () => {

    const [counterArray, setCounterArray] = useState([
        {
            'name': 'Plants',
            'count': '100'
        },
        {
            'name': 'Flowers',
            'count': '200'
        },
        {
            'name': 'Palm Tree',
            'count': '70'
        },
        {
            'name': 'Bonsai Tree',
            'count': '250'
        }
    ]);

    return (
        <section className="f3 flex flex-wrap justify-around items-center mt4 ">
            <div className={'flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <SiAerlingus size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={40} duration={20}/></p>
                <p className={'pa0 ma0'}>Bushes</p>
            </div>
            <div className={'flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <IoFlowerOutline size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={200} duration={20}/></p>
                <p className={'pa0 ma0'}>Bushes</p>
            </div>
            <div className={'flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <GiPalmTree size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={140} duration={20} /></p>
                <p className={'pa0 ma0'}>Bushes</p>
            </div>
            <div className={'flex flex-column justify-center items-center ba br2 pa4 ph5 mh2 mv2 grow shadow-2 transparent-bg'}>
                <GiBonsaiTree size={"2.4rem"} className={'pa0 ma0'}/>
                <p className={'pa0 ma0'}><CountUp end={250} duration={20}/></p>
                <p className={'pa0 ma0'}>Bushes</p>
            </div>
        </section>
    );
}

export default Counter;
