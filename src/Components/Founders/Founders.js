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
                    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" data-aos="slide-right" data-aos-duration={'2000'} >
                        <div className="tc">
                            <img src={founderImg} className="br-100 h3 w3 dib" title="Founders"/>
                                <h1 className="f4">Founder</h1>
                                <hr className="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p className="lh-copy measure center f6 black-70">
                            Quite affectionate and outgoing.
                            She loves to get chin scratches and will
                            roll around on the floor waiting for you give her more of them.
                        </p>
                    </article>
                    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" data-aos="slide-up" data-aos-duration={'2000'}>
                        <div className="tc">
                            <img src={coFounderImg} className="br-100 h3 w3 dib"
                                 title="Photo of a kitty staring at you"/>
                                <h1 className="f4">Co-Founder</h1>
                                <hr className="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p className="lh-copy measure center f6 black-70">
                            Quite affectionate and outgoing.
                            She loves to get chin scratches and will
                            roll around on the floor waiting for you give her more of them.
                        </p>
                    </article>
                    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" data-aos="slide-left" data-aos-duration={'2000'}>
                        <div className="tc">
                            <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib"
                                 title="Photo of a kitty staring at you" alt={'kk'}/>
                                <h1 className="f4">Mimi Whitehouse</h1>
                                <hr className="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p className="lh-copy measure center f6 black-70">
                            Quite affectionate and outgoing.
                            She loves to get chin scratches and will
                            roll around on the floor waiting for you give her more of them.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Founders;
