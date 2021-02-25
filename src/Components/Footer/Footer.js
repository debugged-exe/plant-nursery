import React from "react";
import "./Footer.css";
import Logo from './Logo.png';
import {FiInstagram} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";
import {HashLink as Link} from "react-router-hash-link";

function Footer() {
    return (
        <div className="body" style={{display: 'inline-block', width: "100%"}}>
            <footer className="footer">
                <div className="footer-left">
                    <span style={{backgroundColor: "#d7f3c2",padding: "30px 10px 3px 10px",borderRadius: "50%"}}>
                        <img src={Logo} alt="" />
                    </span>
                    <p className={'p1'}>Rohit rose nursery delivering quality plants and was established in the year of 1990. We are
                            manufacture of flower plant, fruit plant and decorative garden plant from better
                            motherplant. our products are high quality.we are bealive to give matching plants in
                            different type of climate.</p>
                    <div className="socials">
                        <a href={"#"}><FiInstagram size="2rem" color="white"/></a>
                        <a href="#"><SiGmail size="2rem" color="white"/></a>
                        <a href="#"><AiOutlineTwitter size="2rem" color="white"/></a>
                        <a href="#"><FaWhatsapp size="2rem" color="white"/></a>
                    </div>
                </div>
                <ul className="footer-right">
                    {/*<li>*/}
                    {/*    <h2 className={'h2'}>Product</h2>*/}
                    {/*    <ul className="box">*/}
                    {/*        <li><a href="#">Theme Design</a></li>*/}
                    {/*        <li><a href="#">plugin Design</a></li>*/}
                    {/*        <li><a href="#">wordpress</a></li>*/}
                    {/*        <li><a href="#">joomla yemplate</a></li>*/}
                    {/*        <li><a href="#">html template</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    <li>
                        <h2 className={'h2'}>Contact Us at</h2>
                        <ul className="box">
                            <li>+91 83294 04709</li>
                            <li>+91 94210 16545</li>
                            <li>+91 97307 62675</li>
                            <li>+91 75880 32791</li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2 className={'h2'}>Useful links</h2>

                        <ul className="box">
                            <li><Link to='/seeds/#OurProducts'>Seeds</Link></li>
                            <li><Link to='/plants/#OurProducts'>Plants</Link></li>
                            <li><Link to='/pots/#OurProducts'>Pots</Link></li>
                            <li><Link to='/tools/#OurProducts'>Tools</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h2 className={'h2'}
                         href="https://www.google.com/maps/place/Rohit+Rose+Nursery/@18.1946358,74.7885891,17.44z/data=!4m5!3m4!1s0x3bc379cda998a349:0x8794d03056af9de3!8m2!3d18.1940078!4d74.790571"
                         target="_blank"
                        >
                            Address
                        </h2>
                        <ul className="box">
                            <li><a
                                href="https://www.google.com/maps/place/Rohit+Rose+Nursery/@18.1946358,74.7885891,17.44z/data=!4m5!3m4!1s0x3bc379cda998a349:0x8794d03056af9de3!8m2!3d18.1940078!4d74.790571"
                                target="_blank">Rohit rose nursery AP-kalas,</a></li>
                            <li><a
                                href="https://www.google.com/maps/place/Rohit+Rose+Nursery/@18.1946358,74.7885891,17.44z/data=!4m5!3m4!1s0x3bc379cda998a349:0x8794d03056af9de3!8m2!3d18.1940078!4d74.790571"
                                target="_blank">Bhigwan-Walchandnagar road,</a></li>
                            <li><a
                                href="https://www.google.com/maps/place/Rohit+Rose+Nursery/@18.1946358,74.7885891,17.44z/data=!4m5!3m4!1s0x3bc379cda998a349:0x8794d03056af9de3!8m2!3d18.1940078!4d74.790571"
                                target="_blank">Tal-Indapur, Dist-Pune 413105</a></li>
                            <li><a
                                href="https://www.google.com/maps/place/Rohit+Rose+Nursery/@18.1946358,74.7885891,17.44z/data=!4m5!3m4!1s0x3bc379cda998a349:0x8794d03056af9de3!8m2!3d18.1940078!4d74.790571"
                                target="_blank">Maharashtra, India</a></li>
                        </ul>
                    </li>

                </ul>
            </footer>
            <footer className="pv4 ph3 ph5-m ph6-l white flex justify-center" style={{backgroundColor: '#015716'}}>
                <small className="f6 db" style={{textAlign: 'center'}}>© 2021 <b className="ttu">Developed by
                    Debugged.exe</b>., All Rights
                    Reserved</small>
            </footer>
        </div>
    );
}

export default Footer;
