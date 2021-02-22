import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import img7 from './img7.jpeg';
import img8 from './img8.jpeg';
import img9 from './img9.jpeg';
function gallery() {
    return (
        <section style={{overflow: 'hidden'}}>
            <h1 className='f1 tc mb3 mt3'>What we Offer !</h1>
            <article className="cf">
                <div className="fl w-50 w-25-ns pa3" data-aos={'fade-down'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Beyoncé"
                              style={{backgroundImage: `url(${img1})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'fade-up'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Kaytranada"
                              style={{backgroundImage: `url(${img2})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'fade-down'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Woman - Justice"
                              style={{backgroundImage: `url(${img3})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'fade-up'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Skin - Flume"
                              style={{backgroundImage: `url(${img4})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 pa3" data-aos={'fade-right'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Seat at Table Solange"
                              style={{backgroundImage: `url(${img5})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'flip-up'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Untitled Unmastered - Kendrick Lamar"
                              style={{backgroundImage: `url(${img6})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'fade-left'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Moon Shaped Pool 2"
                              style={{backgroundImage: `url(${img7})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'flip-down'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Colour Anything 2"
                              style={{backgroundImage: `url(${img8})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3" data-aos={'fade-left'} data-aos-duration={'2000'}>
                    <a href="" className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Good Luck Do Your Best"
                              style={{backgroundImage: `url(${img9})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
            </article>

        </section>);
}

export default gallery;