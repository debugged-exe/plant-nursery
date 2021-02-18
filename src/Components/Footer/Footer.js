import React from "react";
import imageUrl5 from "./Navleaf.jpg";
import "./Footer.css";
import "react-icons";
import fbLogo from './facebook.svg';
import gLogo from './mail.svg';
import wLogo from './whatsapp.svg';
import tLogo from './twitter.svg';
function Footer() {
    return (
        <div className="body" style={{display: 'inline-block'}}>
            <footer className="footer">
                <div className="footer-left">
                    <img src={imageUrl5} alt=""/>
                    <p className={'p1'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum.</p>
                    <div className="socials">
                        <a href="#"><img src={fbLogo} style={{width:"80%"}}/></a>
                        <a href="#"><img src={gLogo} style={{width:"80%"}}/></a>
                        <a href="#"><img src={wLogo} style={{width:"80%"}}/></a>
                        <a href="#"><img src={tLogo} style={{width:"80%"}}/></a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <h2 className={'h2'}>Product</h2>
                        <ul className="box">
                            <li><a href="#">Theme Design</a></li>
                            <li><a href="#">plugin Design</a></li>
                            <li><a href="#">wordpress</a></li>
                            <li><a href="#">joomla yemplate</a></li>
                            <li><a href="#">html template</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2 className={'h2'}>Useful links</h2>

                        <ul className="box">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Ticket</a></li>
                            <li><a href="#">Customers Service</a></li>

                        </ul>
                    </li>
                    <li>
                        <h2 className={'h2'}>Address</h2>
                        <ul className="box">
                            <li><a href="#">Kalyani Nagar</a></li>
                            <li><a href="#">Pune</a></li>
                            <li><a href="#">411006</a></li>
                            <li><a href="#">India</a></li>
                        </ul>
                    </li>
                </ul>
            </footer>
            <footer className="pv4 ph3 ph5-m ph6-l white flex justify-center" style={{backgroundColor:'#015716'}}>
                <small className="f6 db " style={{textAlign: 'center'}}>© 2021 <b className="ttu">Developed by Debugged.exe</b>., All Rights
                    Reserved</small>
            </footer>
        </div>
    );
}

export default Footer;
