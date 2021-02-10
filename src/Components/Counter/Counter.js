import React, {useState} from 'react';
import {SiAerlingus} from "react-icons/si";
import {IoFlowerOutline} from "react-icons/io5";
import {GiPalmTree} from "react-icons/gi";
import {GiBonsaiTree} from "react-icons/gi";
import CountUp from 'react-countup';
//import './counterUp.css';
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

        <section className='mv5'>

            <div className='flex justify-center row' style={{marginLeft: '1%', marginRight: '1%'}}>
                <div style={{width: '300px', background: 'none'}}
                     className='ba w-25 pa3 mr2'>
                    <SiAerlingus size='3.5rem'/>
                    <p className='f1 mv0 b'>
                        <CountUp start={0} end={counterArray[0].count} delay={0} duration={20}>
                            {({countUpRef}) => (
                                <span ref={countUpRef}/>
                            )}
                        </CountUp>
                    </p>
                    <p className='f3 b'>Plants</p>
                </div>
                <div style={{width: '300px', background: 'none'}}
                     className='ba w-25 pa3 mr2'>
                    <IoFlowerOutline size='3.5rem'/>
                    <p className='f1 mv0 b'>
                        <CountUp start={0} end={counterArray[1].count} delay={0} duration={20}>
                            {({countUpRef}) => (
                                <span ref={countUpRef}/>
                            )}
                        </CountUp>
                    </p>
                    <p className='f3 b'>Flowers</p>
                </div>
                <div style={{width: '300px', background: 'none'}}
                     className='ba w-25 pa3 mr2'>
                    <GiPalmTree size='3.5rem'/>
                    <p className='f1 mv0 b'>
                        <CountUp start={0} end={counterArray[2].count} delay={0} duration={20}>
                            {({countUpRef}) => (
                                <span ref={countUpRef}/>
                            )}
                        </CountUp>
                    </p>
                    <p className='f3 b'>Palm Tree</p>
                </div>
                <div style={{width: '300px', background: 'none'}}
                     className='ba w-25 pa3 mr2'>
                    <GiBonsaiTree size='3.5rem'/>
                    <p className='f1 mv0 b'>
                        <CountUp start={0} end={counterArray[3].count} delay={0} duration={20}>
                            {({countUpRef}) => (
                                <span ref={countUpRef}/>
                            )}
                        </CountUp>
                    </p>
                    <p className='f3 b'>Bonsai Tree</p>
                </div>
            </div>

        </section>
    );
}

export default Counter;
