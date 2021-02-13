import React from "react";
import imageUrl1 from "./question.png";
import 'tachyons';
function Contact() {
    return (
        <section id={'section-contact'}>
            <div className="mw9 center ph3-ns ">
                <div className={"tc"}>
                    <h1>Have Some Questions</h1>
                </div>
                <div className="cf ph2-ns ">
                    <div className="fl  w-50-ns pa2">
                        <img src={imageUrl1} alt="question"/>
                    </div>
                    <div className="fl w-50-ns  pa2">
                        <form className="flex items-center flex-column tc mv6-l pl2-m " style={{width: '100%'}}>
                            <input
                                type="text"
                                className={"w-100 h2 mt2"}
                                name="fname"
                                placeholder="Full Name"
                            />
                            <br/>
                            <input
                                type="email"
                                className={"w-100 h2 mt2 "}
                                name="email"
                                placeholder="Email"
                            />
                            <br/>
                            <input
                                type="tel"
                                className={"w-100 h2 mt2"}
                                name="Ph"
                                placeholder="Phone Number"
                            />
                            <br/>
                            <textarea
                                rows={"2"}
                                className={"w-100 h3 mt2 f4"}
                                placeholder={"Message"}
                            ></textarea>
                            <a
                                className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-green mt1"
                                href="#0"
                            >
                                Submit
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
