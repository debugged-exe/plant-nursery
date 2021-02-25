import React from "react";
import './Founders.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import founderImg from './Founder_image.jpeg';
import coFounderImg1 from './Co-Founder_image.jpeg';
import coFounderImg2 from './Co-Founder-image2.jpeg';

AOS.init();
function Founders() {
    return (
        <section style={{overflow:'hidden'}} id={'section-founder'} >
            <div className="">
                <h1 className="tc" data-aos={"fade-down"} data-aos-duration={'2000'}>
                    Our Founders
                </h1>
                <div className="ret" >
                <div className="dt-ns dt--fixed-ns  ">
                        <div className="dtc-ns tc pv4 padd">
                        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bg-light-grey shadow-2" data-aos="slide-right" data-aos-duration={'2000'}>
                            <div className="tc">
                                <img src={coFounderImg1} className="br-100 h4 w4 dib ba b--black-05 pa2" title="co-founder photo" />
                                <h1 className="f3 mb2">Mr. Balasaheb Gorakh Pansare </h1>
                                <h2 className="f5 fw4  mt0">Co-founder</h2>
                            </div>
                        </article>
                        </div>
                        <div className="dtc-ns tc pv4 padd">
                        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bg-light-grey shadow-2" data-aos="slide-up" data-aos-duration={'2000'}>
                            <div className="tc">
                                <img src={founderImg} className="br-100 h4 w4 dib ba b--black-05 pa2" title="co-founder photo" />
                                <h1 className="f3 mb2">Mr. Rohit Vilas Pansare</h1>
                                <h2 className="f5 fw4  mt0">Founder</h2>
                            </div>
                        </article>
                        </div>
                        <div className="dtc-ns tc pv4 padd">
                        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bg-light-grey shadow-2" data-aos="slide-left" data-aos-duration={'2000'}>
                            <div className="tc">
                                <img src={coFounderImg2} className="br-100 h4 w4 dib ba b--black-05 pa2" title="co-founder photo" />
                                <h1 className="f3 mb2">Mr.Gorakh Pansare</h1>
                                <h2 className="f5 fw4  mt0">Co-founder</h2>
                            </div>
                        </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founders;



