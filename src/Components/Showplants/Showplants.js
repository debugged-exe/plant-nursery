import React ,{useEffect} from 'react';
import Aos from 'aos';
import imgurl1 from './plant1.png';
import imgurl2 from './plant2.png';
import imgurl3 from './plant3.png';
import imgurl4 from './plant4.png';
import './Showplants.css';
import Carousel from 'react-elastic-carousel';

const products = [
    {
        name: "Money Plant",
        desc:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl1
    },
    {
        name: "Hanging plant",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl2
    },
    {
        name: "Some plant",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl3
    },
    {
        name: "Monstera",
        desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        imgUrl: imgurl4
    }
];




var i=0;

function Showplants(){

    return (
        <section id={'OurProducts'} className="pb4 chan">
            <div style={{
                fontWeight: '700',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '5%',
                paddingTop: '2%'
            }} data-aos={'slide-down'} data-aos-duration={'3000'}>
                
            </div>
            <div className="displaycarousel">
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
            </div>
            <div className="displaycards cf ">
            
            
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                <div className='card ma3'>
                <div className='imgBox'>
                    <img src={`${products[0].imgUrl}`} alt='Taj Mahal'></img>
                </div>
                <div className='content'>
                    <h2>{products[0].name}</h2>
                    <p>{products[0].desc}</p>
                </div>
            </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[1].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[1].name}</h2>
                            <p>{products[1].desc}</p>
                        </div>
                    </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[2].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[2].name}</h2>
                            <p>{products[2].desc}</p>
                        </div>
                    </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[3].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[3].name}</h2>
                            <p>{products[3].desc}</p>
                        </div>
                    </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[0].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[0].name}</h2>
                            <p>{products[0].desc}</p>
                        </div>
                    </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[1].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[1].name}</h2>
                            <p>{products[1].desc}</p>
                        </div>
                    </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[2].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[2].name}</h2>
                            <p>{products[2].desc}</p>
                        </div>
                    </div>
            </div>
            <div className="fl w-100 w-50-m w-25-l  tc pv4">
                    <div className='card ma3'>
                        <div className='imgBox'>
                            <img src={`${products[3].imgUrl}`} alt='Taj Mahal'></img>
                        </div>
                        <div className='content'>
                            <h2>{products[3].name}</h2>
                            <p>{products[3].desc}</p>
                        </div>
                    </div>
            </div>
            
            
            </div>
        </section>

    );
}

export default Showplants;
