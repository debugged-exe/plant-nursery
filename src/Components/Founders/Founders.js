import React from "react";
import './Founders.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import founderImg from './Founder_image.jpeg';
import coFounderImg from './Co-Founder_image.jpeg';

AOS.init();
function Founders() {
    return (
        <section style={{overflow:'hidden'}} id={'section-founder'} >
            <div className="">
                <h1 className="tc" data-aos={"fade-up"} data-aos-duration={'2000'}>
                    Our Founders
                </h1>
                <div className="flex justify-around items-center flex-wrap " >
                <div class="fl w-cent w-halfcent-ns  " >
                    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" data-aos="slide-right" data-aos-duration={'2000'}>
                        <div class="tc">
                            <img src={founderImg} class="br-100 h4 w4 dib ba b--black-05 pa2 " title="Founder photo" />
                            <h1 class="f3 mb2">Mimi W.</h1>
                            <h2 class="f5 fw4  mt0">  Founder  </h2>
                        </div>
                    </article>
                    </div>
                    <div class="fl w-cent w-halfcent-ns  " >
                        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bg-light-grey" data-aos="slide-left" data-aos-duration={'2000'}>
                            <div class="tc">
                                <img src={coFounderImg} class="br-100 h4 w4 dib ba b--black-05 pa2" title="co-founder photo" />
                                <h1 class="f3 mb2">Mimi W.</h1>
                                <h2 class="f5 fw4  mt0">Co-founder</h2>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founders;

